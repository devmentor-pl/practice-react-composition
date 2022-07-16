import React from 'react';

class Button extends React.Component {

    render () {
        const { onClick, data, type } = this.props;
        const { added } = data;
        return (
            <button disabled={ added && type==='category' ? true : false } onClick={ () => onClick(data) }>{ type === 'category' ? 'add' : 'remove' }</button>
        )
    }
}


export default Button;