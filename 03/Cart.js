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
    handleDeleteItem = (id) => {
        console.log("handle removing from cart");
        this.props.remove(id);
    };

    render() {
        const cartList = this.props.cart.map((p) => {
            return (
                <div style={productCont} key={p.id}>
                    <Product name={p.name} price={p.price} id={p.id} />{" "}
                    <button
                        style={{ height: "20px" }}
                        onClick={() => {
                            this.handleDeleteItem(p.id);
                        }}
                    >
                        Delete
                    </button>
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
