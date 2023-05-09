var MyComponent = React.createClass({
  displayName: "MyComponent",

  propTypes: {
    list: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      list: this.props.list,
      isSort: false,
      isFilter: "",
    };
  },

  listSort: function (eo) {
    this.setState({ isSort: eo.target.checked }, this.updateList);
  },

  listFilter: function (eo) {
    this.setState({ isFilter: eo.target.value }, this.updateList);
  },

  updateList: function () {
    let list = this.props.list.slice();
    if (this.state.isFilter)
      list = list.filter((v) => v.includes(this.state.isFilter));

    if (this.state.isSort) list.sort();
    this.setState({ list: list });
  },

  resetList: function () {
    this.setState({ isSort: false, isFilter: "", list: this.props.list });
  },

  render: function () {
    return React.DOM.div(
      null,
      React.DOM.input({
        type: "checkbox",
        checked: this.state.isSort,
        onChange: this.listSort,
      }),
      React.DOM.input({
        type: "text",
        value: this.state.isFilter,
        onChange: this.listFilter,
      }),
      React.DOM.input({
        type: "button",
        className: "btn-delete",
        value: "Сброс",
        onClick: this.resetList,
      }),
      React.DOM.div({ className: "List" }, this.state.list.join("\n"))
    );
  },
});
