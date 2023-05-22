import React from "react";
import ReactDOM from "react-dom";

import RainbowFrame from "./components/RainbowFrame.js";

let colorArr = [
  "red",
  "orange",
  "yellow",
  "green",
  "#00BFFF",
  "blue",
  "purple",
];

ReactDOM.render(
  <RainbowFrame colors={colorArr}>Hello!</RainbowFrame>,
  document.getElementById("container")
);
