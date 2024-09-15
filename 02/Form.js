import React from 'react';

class Form extends React.Component {

    refInput = React.createRef()

    handleSubmit = (e) => {

        e.preventDefault()
               
        this.props.addItem(this.refInput.current.value)
        this.refInput.current.value = ''
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={ this.refInput } /><input type="submit" />
            </form>
        )
    }
}

export default Form;