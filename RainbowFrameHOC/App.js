import ReactDOM from "react-dom";
import React, { Fragment } from "react";

import DoubleButton from "./components/DoubleButton";
import { withRainbowFrame } from "./components/withRainbowFrame";

const colorArr = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
let FramedDoubleButton = withRainbowFrame(colorArr)(DoubleButton);

ReactDOM.render(
  <Fragment>
    <DoubleButton
      colors={colorArr}
      caption1="однажды"
      caption2="пору"
      cbPressed={(num) => alert(num)}
    >
      в студёную зимнюю
    </DoubleButton>

    <FramedDoubleButton
      colors={colorArr}
      caption1="я из лесу"
      caption2="мороз"
      cbPressed={(num) => alert(num)}
    >
      вышел, был сильный
    </FramedDoubleButton>
  </Fragment>,
  document.getElementById("container")
);
