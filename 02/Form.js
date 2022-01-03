import React from 'react';

class Form extends React.Component {

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    onClick={this.clearInputField}
                    defaultValue="Enter your name"
                    ref={ ref => this.input = ref}
                />
                <input type="submit" />
            </form>
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const {onSubmit} = this.props

        onSubmit(this.input.value)
        this.input.value = this.input.defaultValue;
    }

    clearInputField = () => {
        this.input.value = "";
    }
}

export default Form;