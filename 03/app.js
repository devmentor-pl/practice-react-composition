import React from "react";
import ReactDOM from "react-dom";

import Category from "./Category";
import Cart from "./Cart";

import data from "./data.json";

const styles = {
    border: "1px solid black",
    width: "1000px",
    display: "flex",
    gap: "10px",
    padding: "0.5rem",
};

class App extends React.Component {
    state = {
        cart: [],
    };

    addToCart = (item) => {
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            isCart: true,
        };
        this.setState((state) => ({
            cart: [...state.cart, newItem],
        }));
    };

    removeFromCart = (product) => {
        this.setState({
            cart: this.state.cart.filter((item) => item.id !== product.id),
        });
    };

    render() {
        return (
            <section style={styles}>
                <Category
                    data={data}
                    cart={this.state.cart}
                    addToCart={this.addToCart}
                />
                <Cart cart={this.state.cart} remove={this.removeFromCart} />
            </section>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
