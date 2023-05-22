import React from "react";
import PropTypes, { element } from "prop-types";
import DOM from "react-dom-factories";

import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array,
  };

  state = {
    color: " ",
  };

  render() {
    const borderStyle = {
      borderColor: this.state.color,
      borderWidth: 10,
      borderStyle: "solid",
      textAlign: "center",
    };

    return <div style={borderStyle}>{this.props.children}</div>;
  }
}

export default RainbowFrame;
