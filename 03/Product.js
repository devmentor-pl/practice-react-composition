import React from "react";

class Product extends React.Component {
    handleAddToCart = (item) => {
        this.props.addToCart(item);
    };

    handleDeleteItem = (item) => {
        this.props.remove(item);
    };

    handleOnClick = (item) => {
        if (item.isCart === true) {
            this.handleDeleteItem(item);
        } else {
            this.handleAddToCart(item);
        }
    };

    render() {
        const { item, cart, isCart } = this.props;
        const inCart = cart.some((i) => i.id === item.id);
        const disabled = !isCart && inCart;
        console.log(isCart, inCart);
        const text = isCart === false ? "Add to cart" : "Delete";
        return (
            <div>
                <p>
                    {item.name}: {item.price}
                </p>
                <button
                    disabled={disabled}
                    style={{ height: "20px" }}
                    onClick={() => {
                        this.handleOnClick(item);
                    }}
                >
                    {text}
                </button>
            </div>
        );
    }
}

export default Product;
