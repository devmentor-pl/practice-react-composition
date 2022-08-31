import React from 'react';

class Form extends React.Component {
    inputRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()

        const { addItem } = this.props
        const input = this.inputRef.current

        addItem(input.value)
        input.value = ''
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                    ref={ this.inputRef }
                />
                <input type="submit" />
            </form>
        )
    }
}

export default Form;