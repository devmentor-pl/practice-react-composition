import React from "react";

class Button extends React.Component{
    render(){
        const {onClick, disabled, name} = this.props
        return (<button onClick={onClick} disabled={disabled}>{name}</button>)
    }
}
export default Button