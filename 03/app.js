import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';
import Product from './Product';

class App extends React.Component {
    state = {
        cart: [],
    }

    addProductToCart = (product) => {
        product.alreadyAdded = true;
        
        console.log('dodaje do cart')
        this.setState((state) => {
            return{
                cart: [ ...state.cart, product]
            }
        })
    }

    removeProductFromCart = (product) => {
       product.alreadyAdded = false;
      
        console.log('usuwam')
        this.setState((state) => {
          
            const newOrder =  state.cart.filter((item) => {
                    item.id !== product.id
             })
             return {
                cart: newOrder
               }
            
            
        })
       
    }


    render() {

       const categoryList = data.map((product) => {
           return(
               <Product 
               key={product.id}
               product={product}
               isAdded = {true}
               addToOrder = {this.addProductToCart}
                />
           )
       })

       const orderList = this.state.cart.map((product) => {
           return (
            <Product 
                key={product.id}
                product={product}
                isAdded = {false}
                removedFromOrder = {this.removeProductFromCart}
             />
           )
       })


        return (
            <section>
                <Category> {categoryList} </Category>
                <Cart> {orderList}  </Cart>
            </section>
        )
    }
}

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);