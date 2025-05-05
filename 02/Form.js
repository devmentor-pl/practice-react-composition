import React from 'react';

class Form extends React.Component { 

    handleSubmit = e => {

        e.preventDefault();
        const inputValue = this.input.value;
        this.props.addUser(inputValue);
        this.input.value = '';
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref = { node => this.input = node}/>
                <input type="submit" />
            </form>
        )
    }
}

export default Form;