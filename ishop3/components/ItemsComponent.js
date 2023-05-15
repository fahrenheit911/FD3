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
    return (
      <tr
        className="TabTr"
        style={{
          backgroundColor:
            this.props.selectItem === this.props.code ? "red" : "inherit",
        }}
        id={this.props.code}
        onClick={this.changeBackground}
      >
        <td className="TabTd">{this.props.name}</td>
        <td className="TabTd">{this.props.price}</td>
        <td className="TabTd">{this.props.qty}</td>
        <td className="TabTd">
          <img src={this.props.image} />
        </td>
        <td className="TabTd">
          <input
            type="button"
            className="btn-delete"
            value="Delete"
            id={this.props.code}
            onClick={this.deleteItem}
          />
        </td>
      </tr>
    );
  }
}

export default ItemsComponent;
