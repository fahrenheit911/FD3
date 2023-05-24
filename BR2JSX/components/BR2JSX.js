import React, { Fragment } from "react";
import PropTypes, { element } from "prop-types";
import DOM from "react-dom-factories";

import "./BR2JSX.css";

class BR2JSX extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  render() {
    const re = /<br *\/?>/g;
    const textLine = this.props.text.split(re);
    const textArr = [];

    for (let i = 0; i < textLine.length; i++) {
      if (i) textArr.push(<br key={i} />);
      textArr.push(textLine[i]);
    }

    return <div>{textArr}</div>;
  }
}

export default BR2JSX;
