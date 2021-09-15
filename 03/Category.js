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

class Category extends React.Component {
    render() {
        const { data, cart } = this.props;
        const productsList = data.map((p) => {
            return (
                <div style={productCont} key={p.id}>
                    <Product
                        item={p}
                        addToCart={this.props.addToCart}
                        isCart={false}
                        cart={cart}
                    />{" "}
                </div>
            );
        });
        return (
            <div style={styles}>
                <h2>Category</h2>
                {productsList}
            </div>
        );
    }
}

export default Category;
