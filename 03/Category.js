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
    handleAddToCart = (id) => {
        console.log("adding to cart");
        this.props.addToCart(id);
    };

    render() {
        const { data } = this.props;
        const productsList = data.map((p) => {
            return (
                <div style={productCont} key={p.id}>
                    <Product name={p.name} price={p.price} id={p.id} />{" "}
                    <button
                        style={{ height: "20px" }}
                        onClick={() => {
                            this.handleAddToCart(p);
                        }}
                    >
                        Add to cart
                    </button>
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
