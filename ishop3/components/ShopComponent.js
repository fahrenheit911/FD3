import React from "react";
import PropTypes from "prop-types";
import DOM from "react-dom-factories";

import "./ShopComponent.css";

import ItemsComponent from "./ItemsComponent";

class ShopComponent extends React.Component {
  static propTypes = {
    column1: PropTypes.string.isRequired,
    column2: PropTypes.string.isRequired,
    column3: PropTypes.string.isRequired,
    column4: PropTypes.string.isRequired,
    column5: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
      })
    ),
  };

  state = {
    selectedItemCode: 0,
    listItems: this.props.items,
  };

  changeBackground = (code) => {
    console.log("ShopComponent - меня выбрали " + "№ " + code);
    this.setState({ selectedItemCode: code });
    console.log(this.state.selectedItemCode);
  };

  deleteItem = (code) => {
    console.log("ShopComponent - меня удалили " + "№ " + code);
    this.setState({
      listItems: this.state.listItems.filter((v) => v.code !== code),
    });
  };

  render() {
    let itemsCode = this.state.listItems.map((v) =>
      React.createElement(ItemsComponent, {
        key: v.code,
        code: v.code,
        name: v.name,
        price: v.price,
        qty: v.qty,
        image: v.image,
        cbchangeBackground: this.changeBackground,
        cbdeleteItem: this.deleteItem,
        selectItem: this.state.selectedItemCode,
      })
    );

    return DOM.table(
      { className: "ShopComponentTable" },
      DOM.tbody(
        { className: "TBody" },
        DOM.tr(
          { className: "TabTr" },
          DOM.th({ className: "TabTh" }, this.props.column1),
          DOM.th({ className: "TabTh" }, this.props.column2),
          DOM.th({ className: "TabTh" }, this.props.column3),
          DOM.th({ className: "TabTh" }, this.props.column4),
          DOM.th({ className: "TabTh" }, this.props.column5)
        ),
        itemsCode
      )
    );
  }
}

export default ShopComponent;
