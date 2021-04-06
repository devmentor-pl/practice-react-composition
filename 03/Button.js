import React from 'react';

class Button extends React.Component {
    render() {
        const { title, onClickButton, isDisabled } = this.props;

        return (
            <button onClick={onClickButton} disabled={isDisabled}> {title} </button>
        )
    }
}

export default Button;