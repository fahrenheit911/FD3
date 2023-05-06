var ItemsComponent = React.createClass({
  displayName: "ItemsComponent",

  propTypes: {
    code: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    price: React.PropTypes.number.isRequired,
    qty: React.PropTypes.number.isRequired,
    image: React.PropTypes.string.isRequired,
    cbchangeBackground: React.PropTypes.func.isRequired,
    cbdeleteItem: React.PropTypes.func.isRequired,
    selectItem: React.PropTypes.number.isRequired,
  },

  changeBackground: function (eo) {
    console.log("ItemsComponent - меня выбрали");
    this.props.cbchangeBackground(this.props.code);
  },

  deleteItem: function (eo) {
    console.log("ItemsComponent - меня удалили");
    eo.stopPropagation();
    this.props.cbdeleteItem(this.props.code);
  },

  render: function () {
    return React.DOM.tr(
      {
        style: {
          backgroundColor:
            this.props.selectItem === this.props.code ? "red" : "white",
        },
        className: "TabTr",
        id: this.props.code,
        onClick: this.changeBackground,
      },
      React.DOM.td({ className: "TabTd" }, this.props.name),
      React.DOM.td({ className: "TabTd" }, this.props.price),
      React.DOM.td({ className: "TabTd" }, this.props.qty),
      React.DOM.td(
        { className: "TabTd" },
        React.createElement("img", { src: this.props.image })
      ),
      React.DOM.td(
        { className: "TabTd" },
        React.DOM.div(
          null,
          React.DOM.input({
            type: "button",
            className: "btn-delete",
            value: "Delete",
            id: this.props.code,
            onClick: this.deleteItem,
          })
        )
      )
    );
  },
});
