import ReactDOM from "react-dom";
import React, { Fragment } from "react";

import DoubleButton from "./components/DoubleButton";
import { withRainbowFrame } from "./withRainbowFrame";

//let color = ["red"];
let FramedDoubleButton = withRainbowFrame("red")(DoubleButton);


ReactDOM.render(
  <FramedDoubleButton
    caption1="однажды"
    caption2="пору"
    cbPressed={(num) => alert(num)}
  >
    в студёную зимнюю
  </FramedDoubleButton>,
  document.getElementById("container")
);
