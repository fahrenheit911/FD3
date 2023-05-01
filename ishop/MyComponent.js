var MyComponent = React.createClass({

    displayName: 'MyComponent',

    propTypes: {
        column1: React.PropTypes.string.isRequired,
        column2: React.PropTypes.string.isRequired,
        column3: React.PropTypes.string.isRequired,
        items: React.PropTypes.arrayOf(
            React.PropTypes.shape({
                code: React.PropTypes.number.isRequired,
                name: React.PropTypes.string.isRequired,
                price: React.PropTypes.number.isRequired,
                image: React.PropTypes.string.isRequired,
                rest: React.PropTypes.number.isRequired,
            })
        )
    },

    render: function () {

        var itemsCode = this.props.items.map(v =>
            React.createElement(ItemsComponent, { key: v.code, name: v.name, price: v.price, rest: v.rest, image: v.image, })
        );

        return React.DOM.table({ className: 'MyComponentTable' },
            React.DOM.tbody({ className: 'TBody' },
                React.DOM.tr({ className: 'TabTr' },
                    React.DOM.th({ className: 'TabTh' }, this.props.column1),
                    React.DOM.th({ className: 'TabTh' }, this.props.column2),
                    React.DOM.th({ className: 'TabTh' }, this.props.column3),
                    React.DOM.th({ className: 'TabTh' }, this.props.column4),
                ),
                itemsCode,
            ),
        );
    },
});