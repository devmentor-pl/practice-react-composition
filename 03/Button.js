import React from "react";


function Button(props) {

    const {data , onClick, disabled, content} = props;

    return (
        <button
            onClick={ () => onClick(data)}
            disabled={disabled}
        >
            {content}
        </button>
    )
}

export default Button;