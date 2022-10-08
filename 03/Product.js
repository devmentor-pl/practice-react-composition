import React from "react";

export class Product  extends React.Component {
  render() {
    const { item, isCategory, addItem, removeItem } = this.props;
    return (
        <div>
            <p>Nazwa: {item.name}</p>
            <p>Cena: {item.price} PLN</p>
            {isCategory ? <button onClick={addItem}>DODAJ</button> : <button onClick={removeItem}>USUŃ</button>}
        </div>
    )
  }
}

export default Product;