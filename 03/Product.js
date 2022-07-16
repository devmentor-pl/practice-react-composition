import React from 'react';
import Button from './Button';

class Product extends React.Component {
    
    render () {
        const { data, onClick, type } = this.props;
        const { name, price } = data;
        return (
            <>
            <li>{ name }: { price }</li>
            <Button onClick={ onClick } data={ data } type={ type }/>
            </>
        )
    }
}

export default Product;