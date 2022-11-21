import vvv, { createElement } from "../vvv-native/CreateElement.js";
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
      Circle({ radius, fill: "#0D70F9", class: "sun" }),
      Circle({ radius, fill: "#FFFFFF", class: "sun" }),
      Circle({ radius, fill: "#FFE150", class: "sun" }),
    ],
  });
};

createElement(document.body, [
  SunGroup({ radius: "40%", maxRadius: 200 }),
  div({
    class: "flower-group",
    children: [
      Flower({ class: "flower" }),
      Flower({ class: "flower" }),
      Flower({ class: "flower" }),
    ],
  }),
]);
