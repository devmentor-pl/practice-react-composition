import React from 'react';

class Product extends React.Component {
   render() {
        const {item} = this.props;
        const {name, price, isAdded, id } = item;
        const addDisabled = isAdded === true ? true : false;
        const removeDisabled = this.props.type === 'cart' ? false : true;
        console.log(id);
        return (
            <li key={id} >
                <h3>{name}</h3>
                <p>{price} PLN</p>
                <button disabled={addDisabled} onClick={()=>this.props.onClick(item)}>DODAJ</button>
                <button disabled={removeDisabled} onClick={() =>{this.props.onClick(item)}}>USUŃ</button>
            </li>
        )
    }
}

export default Product;