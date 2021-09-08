import React from "react";

class Product extends React.Component {
    render() {
        const { name, price } = this.props;
        return (
            <div>
                <p>
                    {name}: {price}
                </p>
            </div>
        );
    }
}

export default Product;
