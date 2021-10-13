import React from 'react';
import {v4 as uuid} from 'uuid';

class Product extends React.Component {
   render() {
        const {items} = this.props;
        return(
            items.map((item) => {
                const {name, price, isAdded} = item
                const addDisabled = isAdded === true ? true : false;
                const removeDisabled = this.props.type === 'cart' ? false : true;
                return (
                    <li key={uuid()}>
                        <h3>{name}</h3>
                        <p>{price} PLN</p>
                        <button disabled={addDisabled} onClick={()=>this.props.onClick(item)}>DODAJ</button>
                        <button disabled={removeDisabled} onClick={() =>{this.props.onClick(item)}}>USUŃ</button>
                    </li>
                )
            })
        )
    }
}

export default Product;