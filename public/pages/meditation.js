import vvv, { createElement } from "../vvv-native/CreateElement.js";

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

const SunGroup = ({ radius }) => {
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

createElement(document.body, [SunGroup({ radius: 200 })]);
