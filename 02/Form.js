import React from 'react';

class Form extends React.Component {

    refInput = React.createRef()

    handleSubmit = (e) => {
        e.preventDefault()

        const {addUser} = this.props
        const input = this.refInput.current
        
        if(addUser) {
            addUser(input.value) 
            input.value = ''
        } else {
            alert('nie przekazałeś funkcji do formularza')
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={this.refInput}/><input type="submit" />
            </form>
        )
    }
}

export default Form;