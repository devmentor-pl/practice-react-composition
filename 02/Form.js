import React from 'react';

class Form extends React.Component {
    inputRef = React.createRef()

    handleSubmit = e => {
        e.preventDefault()

        const { addItem } = this.props
        const input = this.inputRef.current

        if(typeof addItem === 'function') {
            addItem(input.value)
            input.value = ''
        } else {
            console.error('You must pass a function to the component.')
        }
        
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