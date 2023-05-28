import React, { Fragment } from "react";
import PropTypes, { element } from "prop-types";
import DOM from "react-dom-factories";

import "./DoubleButton.css";

class DoubleButton extends React.Component {
  static propTypes = {
    caption1: PropTypes.string.isRequired,
    caption2: PropTypes.string.isRequired,
    cbPressed: PropTypes.func.isRequired,
    colors: PropTypes.array.isRequired,
  };

  selectButton = (eo) => {
    eo.stopPropagation();
    this.props.cbPressed(eo.target.id);
  };

  render() {
    return (
      <div className="buttonBlok">
        <input
          type="button"
          className="btn-left"
          value={this.props.caption1}
          id="1"
          onClick={this.selectButton}
        />
        {this.props.children}
        <input
          type="button"
          className="btn-right"
          value={this.props.caption2}
          id="2"
          onClick={this.selectButton}
        />
      </div>
    );
  }
}

export default DoubleButton;
