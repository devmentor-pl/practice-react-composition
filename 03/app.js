import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';
import Product from './Product';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }


    removeProducts = (el) => {

        const result = this.state.cart.filter((item) => item.id !== el.id)
        this.setState(({
            cart: result

        }))



    };
    addProducts = (el) => {

        this.setState(({
            cart: [...this.state.cart, el]

        }))



    };
    render() {

        return (
            <section>

                <Category  >
                    {data.map(el => {
                        return <Product
                            onClick={() => this.addProducts(el)}
                            isCategory={true}
                            
                            item={el} />

                    })}
                </Category>
                <Cart >
                    {this.state.cart.map(el => {
                        return <Product
                            onClick={() => this.removeProducts(el)}
                            isCart={true}
                            item={el} />

                    })}

                </Cart>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
