import vvv, { createElement, getElement } from "../vvv-native/index.js";
import { Flower } from "./MeditationFlower.js";
const { div, svg_, circle_ } = vvv;

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

const middleSunControl = middleSun.$el.animate(
  createSunAnimation(1.25),
  sunTiming
);
const bottomSunControl = bottomSun.$el.animate(
  createSunAnimation(1.5),
  sunTiming
);

const {
  ["$.flower.one"]: flowerOne,
  ["$.flower.two"]: flowerTwo,
  ["$.flower.three"]: flowerThree,
} = flowerGroup;
// console.log(flowerOne.$el);
const createFlowerAnimation = (deg) => [
  { transform: `rotate(0deg)` },
  { transform: `rotate(${deg}deg)` },
  { transform: `rotate(0deg)` },
  { transform: `rotate(${deg * -1}deg)` },
  { transform: `rotate(0deg)` },
];
const flowerOneControls = flowerOne.$el.animate(
  createFlowerAnimation(-5),
  sunTiming
);
const flowerTwoControls = flowerTwo.$el.animate(
  createFlowerAnimation(4),
  sunTiming
);
const flowerThreeControls = flowerThree.$el.animate(
  createFlowerAnimation(7),
  sunTiming
);
middleSunControl.pause();
bottomSunControl.pause();
flowerOneControls.pause();
flowerTwoControls.pause();
flowerThreeControls.pause();

const overlay = getElement(".overlay");
const playButton = overlay["$button"];

let paused = true;
const pause = ($event) => {
  if ($event.code === "Space") {
    paused = !paused;
    if (paused) {
      middleSunControl.pause();
      bottomSunControl.pause();
      flowerOneControls.pause();
      flowerTwoControls.pause();
      flowerThreeControls.pause();
      document.body.appendChild(overlay.$el);
    } else {
      middleSunControl.play();
      bottomSunControl.play();
      flowerOneControls.play();
      flowerTwoControls.play();
      flowerThreeControls.play();
      overlay.$el.remove();
    }
  }
};
document.addEventListener("keydown", pause);

createElement(playButton.$el, {
  click() {
    middleSunControl.play();
    bottomSunControl.play();
    flowerOneControls.play();
    flowerTwoControls.play();
    flowerThreeControls.play();
    overlay.$el.remove();
  },
});
