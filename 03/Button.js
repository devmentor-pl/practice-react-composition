import React from 'react';

export default class Button extends React.Component {
    render() {
        const { product, product: { isAdded }, onClick, isCart } = this.props.data;
        return (
            <button
                onClick={() => onClick(product)}
                disabled={(!isCart && isAdded)}>
                {isCart ? 'remove' : 'add'}
            </button>
        );
    };
}