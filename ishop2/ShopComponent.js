var ShopComponent = React.createClass({
  displayName: "ShopComponent",

  propTypes: {
    column1: React.PropTypes.string.isRequired,
    column2: React.PropTypes.string.isRequired,
    column3: React.PropTypes.string.isRequired,
    column4: React.PropTypes.string.isRequired,
    column5: React.PropTypes.string.isRequired,
    items: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        code: React.PropTypes.number.isRequired,
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        image: React.PropTypes.string.isRequired,
        qty: React.PropTypes.number.isRequired,
      })
    ),
  },

  getInitialState: function () {
    return {
      selectedItemCode: 0,
      deleteItemCode: 0,
    };
  },

  changeBackground: function (code) {
    console.log("ShopComponent - меня выбрали " + "№ " + code);
    this.setState({ selectedItemCode: code });
    console.log(this.state.selectedItemCode);
  },

  deleteItem: function (code) {
    console.log("ShopComponent - меня удалили " + "№ " + code);
    this.setState({ deleteItemCode: code });
    console.log(this.state.deleteItemCode);
  },

  render: function () {
    var itemsCode = this.props.items.map((v) =>
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
        deleteItem: this.state.deleteItemCode,
      })
    );

    return React.DOM.table(
      { className: "ShopComponentTable" },
      React.DOM.tbody(
        { className: "TBody" },
        React.DOM.tr(
          { className: "TabTr" },
          React.DOM.th({ className: "TabTh" }, this.props.column1),
          React.DOM.th({ className: "TabTh" }, this.props.column2),
          React.DOM.th({ className: "TabTh" }, this.props.column3),
          React.DOM.th({ className: "TabTh" }, this.props.column4),
          React.DOM.th({ className: "TabTh" }, this.props.column5)
        ),
        itemsCode
      )
    );
  },
});
