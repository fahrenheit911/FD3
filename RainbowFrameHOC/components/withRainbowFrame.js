import React from "react";

function withRainbowFrame(color) {
  return function (Comp) {
    return (props) => (
      <div style={{ borderColor: color, border: "solid 2px" }}>
        <Comp {...props} />
      </div>
    );
  };
}

export { withRainbowFrame };
