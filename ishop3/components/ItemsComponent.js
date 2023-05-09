import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./ItemsComponent.css";

class ItemsComponent extends React.Component {
  static propTypes = {
    code: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    cbchangeBackground: PropTypes.func.isRequired,
    cbdeleteItem: PropTypes.func.isRequired,
    selectItem: PropTypes.number.isRequired,
    deleteItem: PropTypes.number.isRequired,
  };

  changeBackground = (eo) => {
    console.log("ItemsComponent - меня выбрали");
    this.props.cbchangeBackground(this.props.code);
  };

  deleteItem = (eo) => {
    console.log("ItemsComponent - меня удалили");
    eo.stopPropagation();
    this.props.cbdeleteItem(this.props.code);
  };

  render() {
    return DOM.tr(
      {
        style: {
          backgroundColor:
            this.props.selectItem === this.props.code ? "red" : "inherit",
          display:
            this.props.deleteItem === this.props.code ? "none" : "visible",
        },
        className: "TabTr",
        id: this.props.code,
        onClick: this.changeBackground,
      },
      DOM.td({ className: "TabTd" }, this.props.name),
      DOM.td({ className: "TabTd" }, this.props.price),
      DOM.td({ className: "TabTd" }, this.props.qty),
      DOM.td(
        { className: "TabTd" },
        React.createElement("img", { src: this.props.image })
      ),
      DOM.td(
        { className: "TabTd" },
        DOM.input({
          type: "button",
          className: "btn-delete",
          value: "Delete",
          id: this.props.code,
          onClick: this.deleteItem,
        })
      )
    );
  }
}

export default ItemsComponent;
