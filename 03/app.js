import React from 'react';
import { createRoot } from 'react-dom/client';

import Category from './Category';
import Cart from './Cart';

import data from './data.json';

class App extends React.Component {
    state = {
        cart: [],
    }
    
    render() {
        return (
            <section>
                <Category />
                <Cart />
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);