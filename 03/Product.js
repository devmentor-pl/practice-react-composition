import React from "react";
class Product extends React.Component {
  state = {
    cartArray: [],
  };

  addToCart = (e, productId, productName, productPrice) => {
    e.target.disabled = true;
    const productObj = {
        id: productId,
        name: productName,
        price: productPrice
    }
    this.setState((prevState) => ({
        cartArray: [...prevState.cartArray, productObj],
      }));
      this.props.addToCartHandler(productObj);
      
  };
  removeFromCart = (id) => {
    this.setState((prevState) => ({
      cartArray: prevState.cartArray.filter((product) => product.id !== id)
    }), () => {
      console.log(this.state.cartArray)
    });
  }
  render() {
    const { id, name, price, isCart, isCategory } = this.props;
    return (
      <li>
        {name} {price}
        {isCategory ? (
          <button onClick={(e) => this.addToCart(e, id, name, price)} disabled={false} id={id}>
            Dodaj do koszyka
          </button>
        ) : (
          ""
        )}
        {isCart ? <button onClick={() => this.props.removeFromCart(id)} id={id} >Usuń z koszyka</button> : ""}
      </li>
    );
  }
}

export default Product;
