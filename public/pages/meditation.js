import vvv, { createElement } from "../vvv-native/CreateElement.js";
import { getElement } from "../vvv-native/GetElement.js";
import { Flower } from "./MeditationFlower.js";
const { div, p, svg_, circle_ } = vvv;

// /**
//  * @param {number} radius
//  * @param {string} fill
//  * @returns {HTMLElement}
//  */
const Circle = ({ radius, fill, class: className }) =>
  svg_({
    class: className,
    height: radius * 2,
    width: radius * 2,
    children: [
      circle_({
        cx: radius,
        cy: radius,
        r: radius,
        fill,
      }),
    ],
  });

const SunGroup = ({ radius, maxRadius }) => {
  if (typeof radius === "string" && radius.endsWith("%")) {
    const percent = parseInt(radius) * 0.01;
    radius = Math.floor(window.innerWidth * percent);
    if (radius % 2) {
      //keep it even for easy division
      radius += 1;
    }
    //don't let the sun get massive
    if (radius > maxRadius) {
      radius = maxRadius;
    }
  }
  return div({
    class: "sun-group",
    style: {
      top: `-${radius * 0.75}px`,
      position: "absolute",
      left: `calc(50% - ${radius}px)`,
      width: `${radius * 2}px`,
    },
    children: [
      Circle({ radius, fill: "#0D70F9", class: "sun bottom" }),
      Circle({ radius, fill: "#FFFFFF", class: "sun middle" }),
      Circle({ radius, fill: "#FFE150", class: "sun top" }),
    ],
  });
};

const sunGroup = getElement(SunGroup({ radius: "40%", maxRadius: 200 }));
const flowerGroup = getElement(
  div({
    class: "flower-group",
    children: [
      Flower({ class: "flower one" }),
      Flower({ class: "flower two" }),
      Flower({ class: "flower three" }),
    ],
  })
);

// const breatheIn = p("Breathe in");
// const holdIn = p("Hold");
// const breatheOut = p("Breathe out");
// const holdOut = p("Hold");
// const instructions = [breatheIn, holdIn, breatheOut, holdOut];
createElement(document.body, [sunGroup.$el, flowerGroup.$el]);

const { ["$.sun.middle"]: middleSun, ["$.sun.bottom"]: bottomSun } = sunGroup;

const ANIMATION_DURATION = 13000;

const createSunAnimation = (scale) => [
  { transform: `scale(1)` },
  { transform: `scale(${scale})` },
  { transform: `scale(${scale})` },
  { transform: `scale(1)` },
  { transform: `scale(1)` },
];
/**
 * @type {KeyframeEffectOption}
 */
const sunTiming = {
  duration: ANIMATION_DURATION,
  iterations: Infinity,
  easing: "linear",
};

const controls = [];

// const createInstructionAnimation = (values = []) =>
//   values.map((opacity) => ({ opacity }));

// controls.push(
//   breatheIn.animate(createInstructionAnimation([1, 0, 0, 0, 0]), sunTiming),
//   holdIn.animate(createInstructionAnimation([0, 1, 1, 0, 0]), sunTiming),
//   breatheOut.animate(createInstructionAnimation([0, 0, 1, 0, 0]), sunTiming),
//   holdOut.animate(createInstructionAnimation([0, 0, 0, 1, 1]), sunTiming)
// );

controls.push(middleSun.$el.animate(createSunAnimation(1.25), sunTiming));
controls.push(bottomSun.$el.animate(createSunAnimation(1.5), sunTiming));

const {
  ["$.flower.one"]: flowerOne,
  ["$.flower.two"]: flowerTwo,
  ["$.flower.three"]: flowerThree,
} = flowerGroup;
// console.log(flowerOne.$el);
const createFlowerAnimation = (deg) => [
  { transform: `rotate(0deg) translateY(0px)` },
  { transform: `rotate(${deg}deg) translateY(${deg}px)` },
  { transform: `rotate(0deg) translateY(0px)` },
  { transform: `rotate(${deg * -1}deg) translateY(${deg * -1}px)` },
  { transform: `rotate(0deg) translateY(0px)` },
];
controls.push(flowerOne.$el.animate(createFlowerAnimation(-5), sunTiming));
controls.push(flowerTwo.$el.animate(createFlowerAnimation(2), sunTiming));
controls.push(flowerThree.$el.animate(createFlowerAnimation(7), sunTiming));

controls.forEach((ctrl) => ctrl.pause());

const overlay = getElement(".overlay");

let paused = true;
const pause = ($event) => {
  if ($event.code === "Space" || $event instanceof MouseEvent) {
    paused = !paused;
    if (paused) {
      controls.forEach((ctrl) => ctrl.cancel());
      document.body.appendChild(overlay.$el);
    } else {
      controls.forEach((ctrl) => ctrl.play());
      overlay.$el.remove();
    }
  }
};
document.addEventListener("keydown", pause);
document.addEventListener("click", pause);
