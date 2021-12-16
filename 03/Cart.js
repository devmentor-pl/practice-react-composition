import React from "react";
import Product from "./Product";

const styles = {
    border: "1px solid black",
    width: "100%",
    padding: "5px",
};

const productCont = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
};

class Cart extends React.Component {
    render() {
        const { cart } = this.props;
        const cartList = this.props.cart.map((p) => {
            return (
                <div style={productCont} key={p.id}>
                    <Product
                        item={p}
                        isCart={true}
                        cart={cart}
                        remove={this.props.remove}
                    />{" "}
                </div>
            );
        });
        return (
            <div style={styles}>
                <h2>Cart</h2>
                {cartList}
            </div>
        );
    }
}

export default Cart;
