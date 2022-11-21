import vvv from "../vvv-native/CreateElement.js";

const { div, svg_: svg, circle_: circle, path_: path, g_: g } = vvv;

const leafStyle = "fill:#31BD4C;";
const petalStyle = "fill:#FF5A58;";
const stemStyle = "fill:#CADC2E;";
const middleStyle = "fill:#F6F0E8;";
export const Flower = ({ class: className }) =>
  svg({
    class: className,
    x: "0px",
    y: "0px",
    viewBox: `0 0 65.703 65.703`,
    children: [
      g([
        path({
          style: leafStyle,
          d: `M31.519,43.85c2.056,2.055,2.882,4.559,1.848,5.594c-1.035,1.034-3.54,0.208-5.596-1.848
							c-2.054-2.053-3.087-6.835-3.087-6.835S29.464, 41.795, 31.519, 43.85z`,
        }),
        path({
          style: leafStyle,
          d: `M35.704,43.85c-2.056,2.055-2.882,4.559-1.847,5.594c1.036,1.034,3.54,0.208,5.595-1.848
							c2.054-2.053,3.087-6.835,3.087-6.835S37.758,41.795,35.704,43.85z`,
        }),
        path({
          style: stemStyle,
          d: `M34.799,24.35c0-0.649-0.747-1.646-1.333-1.646h-0.219c-0.585,0-2.448,0.997-2.448,1.646v40.485
							c0,0.649,1.863,0.868,2.448,0.868h0.219c0.585,0,1.333-0.219,1.333-0.868V24.35z`,
        }),
        g([
          g([
            circle({
              style: petalStyle,
              cx: "33.38",
              cy: "5.665",
              r: "5.666",
            }),
            circle({
              style: petalStyle,
              cx: "40.402",
              cy: "9.561",
              r: "5.666",
            }),
            circle({
              style: petalStyle,
              cx: "41.28",
              cy: "17.544",
              r: "5.665",
            }),
            circle({
              style: petalStyle,
              cx: "35.272",
              cy: "22.873",
              r: "5.665",
            }),
            circle({
              style: petalStyle,
              cx: "27.45",
              cy: "21.048",
              r: "5.666",
            }),
            circle({
              style: petalStyle,
              cx: "24.421",
              cy: "13.61",
              r: "5.664",
            }),
            path({
              style: petalStyle,
              d: `M33.557,3.855c1.647,2.661,0.828,6.153-1.831,7.801c-2.662,1.649-6.152,0.828-7.801-1.833
									c-1.647-2.657-0.828-6.15,1.831-7.798C28.416,0.377,31.908,1.196,33.557,3.855z`,
            }),
          ]),
          circle({
            style: middleStyle,
            cx: "32.832",
            cy: "14.27",
            r: "4.935",
          }),
        ]),
      ]),
    ],
  });
