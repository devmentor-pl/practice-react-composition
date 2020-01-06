import React from 'react';

const Button = props => {
    const {onClick, label, isCategory, className} = props;
    return (
        <button className={className} onClick={onClick} disabled={isCategory}>{label}t</button>
    );
}

export default Button;