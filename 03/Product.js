import React from 'react';

class Product extends React.Component {
  state = {
    // isCategory: false,
    // isCart: false,
  };

  handleAddToCart = (elem) => {
  
    this.props.onAddToCart(elem);
  };

  render() {
    const { items } = this.props;
    const list = items.map((elem) => {
      return (
        <React.Fragment key={elem.id}>
          <li>
            {elem.name} - {elem.price}PLN
            <button onClick={() => this.handleAddToCart(elem)}>+</button>
            <button>-</button>
          </li>
        </React.Fragment>
      );
    });
    return <>{list}</>;
  }
}
export default Product;