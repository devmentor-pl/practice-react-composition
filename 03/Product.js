import React from 'react';

class Product extends React.Component {

    categoryClick = e => {
        const { id } = this.props
        this.props.newOrder(id)
    }

    cartClick = e => {
        const { id } = this.props
        this.props.deleteOrder(id)
    }

    render() {
        const { id, name, price, isCart, isCategory, order } = this.props
        if (isCategory) {

            return (
                <div key={`${id}-category`}>
                    <p> {id}. Nazwa produktu: {name} </p>
                    <p> Cena: {price} zł </p>
                    <button
                        onClick={this.categoryClick}
                        disabled={order > 0 ? true : false}>
                        Zamów teraz!
                    </button>
                </div>
            )
        }
        if (isCart) {
            if (order > 0) {

                return (
                    <div key={`${id}-cart`}>
                        <p> {id}. Nazwa produktu: {name} </p>
                        <p> Cena: {price} zł </p>
                        <button
                            onClick={this.cartClick}
                        >
                            Usuń produkt
                        </button>
                    </div>
                )
            }
        }
    }

}
export default Product