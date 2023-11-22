import React from "react";
class Product extends React.Component {
  addToCart = (productId, productName, productPrice) => {
    const productObj = {
        id: productId,
        name: productName,
        price: productPrice
    }
      this.props.addToCartHandler({ ...productObj }); 
  };

  handleClick = (e, id, name, price) => {
    if (this.props.isCategory) {
      this.addToCart(id, name, price);
      e.target.disabled = true;
    } else if (this.props.isCart) {
      this.props.removeFromCart(id);
    }
  };

  render() {
    const { id, name, price, isCart, isCategory } = this.props;
    return (
      <li>
        {name} {price}
        {isCategory ? (
          <button onClick={(e) => this.handleClick(e, id, name, price)} disabled={false} id={id}>
            Dodaj do koszyka
          </button>
        ) : (
          ""
        )}
        {isCart ? <button onClick={() => this.handleClick(null, id)} id={id} >Usuń z koszyka</button> : ""}
      </li>
    );
  }
}

export default Product;
