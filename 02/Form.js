import React from 'react';

class Form extends React.Component {
        handleSubmit = e => {
            e.preventDefault()
            this.props.mySubmit(this.input.value);
            console.log(this.input.value);
            this.input.value = '';
        }
        render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input defaultValue="name" ref={node => this.input = node} />
                <input type="submit" />
            </form>
        )
    }
}

export default Form;