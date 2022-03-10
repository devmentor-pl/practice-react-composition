import React from 'react';
import Product from './Product';

export default class Category extends React.Component {
    render(){
        const {data,addProduct,cart} = this.props;
        const list =  data.map(item =>
            <Product data={item} key={item.id} addProduct={addProduct} cart={cart} disabled={this.disabledButton(item.id)} />
        )

        return (
            <>
                <h2>Category</h2>
                <ul>{list}</ul>
            </>
        )
    }

    disabledButton = id => {
        console.log(id);
        const {cart} = this.props;

        return cart.map(item => {
            console.log(item.id);
            if(item.id === id){
                return true
            }
            return false
        })
    }
}
