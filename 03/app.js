import React from 'react';
import ReactDOM from 'react-dom';

import Category from './components/Category';
import Cart from './components/Cart';

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

ReactDOM.render(
    <App />, 
    document.querySelector('#root')
);