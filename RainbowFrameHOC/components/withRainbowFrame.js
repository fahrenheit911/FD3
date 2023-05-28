import React, { Fragment } from "react";

function withRainbowFrame(colors) {
  return function (Comp) {
    return (props) => {
      let content = <Comp {...props} />;
      for (let color of colors) {
        const borderStyle = {
          borderColor: color,
          borderWidth: 10,
          borderStyle: "solid",
          textAlign: "center",
          margin: 5,
        };
        content = <div style={borderStyle}>{content}</div>;
      }
      return content;
    };
  };
}

export { withRainbowFrame };
