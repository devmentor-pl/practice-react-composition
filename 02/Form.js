import React from 'react';

class Form extends React.Component {

    handleSubmit = e => {
        e.preventDefault;
        this.props.onSubmit(this.input.value)
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
               <input ref = {item=>this.input = item}/><input type="submit" />
            </form>
        )
    }
}

export default Form;