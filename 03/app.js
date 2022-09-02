import React from 'react';
import ReactDOM from 'react-dom';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';
import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
        product: []

    }
    componentDidMount() {  
        this.setState(() => ({
            cart: data
        }))
    }

    addItem = (e, id) => {
        const clickedButton = e.target
        clickedButton.setAttribute('disabled', 'true')
        clickedButton.setAttribute('id', `button-${id}`)
        const newItem = this.state.cart.find(item => item.id === id)
       
        this.setState((state) => ({
            product: [...state.product, newItem]
        }))
        
        
    }

    removeItem = (id) => {
        const newCart = this.state.product.filter(item => item.id !== id)
        this.setState(() =>({
            product: [ ...newCart ]
        }))

        const disabledButton = document.querySelector(`#button-${id}`)
        disabledButton.removeAttribute('disabled')
      
    }

    render() {
        const productsToBuy = this.state.cart.map(item => {
            return (
                <Product  
                item={item}
                isCategory={true}
                addItem={(e) => this.addItem(e, item.id)} /> 
            )
        })
        const productsInCart = this.state.product.map(item => {
            return (
                <Product  
                item={item}
                isCategory={false}
                removeItem={() => this.removeItem(item.id)} /> 
            )
        })
        return (
            <div>
                <Category>
                    {productsToBuy}
                </Category>
                <Cart>
                    {productsInCart}
                </Cart>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);