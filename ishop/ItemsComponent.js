var ItemsComponent = React.createClass({

    displayName: 'ItemsComponent',

    propTypes: {
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.number.isRequired,
        rest: React.PropTypes.number.isRequired,
    },

    render: function () {

        return React.DOM.tr({ className: 'TabTr' },
            React.DOM.td({ className: 'TabTd' }, this.props.name),
            React.DOM.td({ className: 'TabTd' }, this.props.price),
            React.DOM.td({ className: 'TabTd' }, this.props.rest)
        );
    },
});