import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {

   
    state = {
        btnStatus: false,
        cart: [],
    }

    addItem = () => {
        console.log("działa")
    }
    
    render() {
        console.log(data)
        return (
            <section>
                <Category onClick={this.addItem}  products={data} />
                <Cart />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
