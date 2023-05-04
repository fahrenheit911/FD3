var ShopComponent = React.createClass({

    displayName: 'ShopComponent',

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
        )
    },

    changeBackground: function (a) {
        console.log("ShopComponent - меня выбрали " + "№ " + a);
    },

    render: function () {

        var itemsCode = this.props.items.map(v =>
            React.createElement(ItemsComponent, {
                key: v.code,
                name: v.name,
                price: v.price,
                qty: v.qty,
                image: v.image,
                cbchangeBackground: this.changeBackground
            })
        );

        return React.DOM.table({ className: 'ShopComponentTable' },
            React.DOM.tbody({ className: 'TBody' },
                React.DOM.tr({ className: 'TabTr' },
                    React.DOM.th({ className: 'TabTh' }, this.props.column1),
                    React.DOM.th({ className: 'TabTh' }, this.props.column2),
                    React.DOM.th({ className: 'TabTh' }, this.props.column3),
                    React.DOM.th({ className: 'TabTh' }, this.props.column4),
                    React.DOM.th({ className: 'TabTh' }, this.props.column5),
                ),
                itemsCode,
            ),
        );
    },
});