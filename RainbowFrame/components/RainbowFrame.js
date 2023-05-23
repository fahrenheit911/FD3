import React, { Fragment } from "react";
import PropTypes, { element } from "prop-types";
import DOM from "react-dom-factories";

import "./RainbowFrame.css";

class RainbowFrame extends React.Component {
  static propTypes = {
    colors: PropTypes.array,
  };

  render() {
    let content = this.props.children;

    for (let color of this.props.colors) {
      const borderStyle = {
        borderColor: color,
        borderWidth: 10,
        borderStyle: "solid",
        textAlign: "center",
      };
      content = <div style={borderStyle}>{content}</div>;
    }

    return <Fragment>{content}</Fragment>;
  }
}

export default RainbowFrame;
