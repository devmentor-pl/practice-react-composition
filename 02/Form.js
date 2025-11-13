import React from 'react';

class Form extends React.Component {
    firstNameInput = null;
    lastNameInput = null;

    handleSubmit = e => {
        e.preventDefault();

        const firstName = this.firstNameInput.value.trim();
        const lastName = this.lastNameInput.value.trim();

        if (firstName && lastName) {
            this.props.addUser({ firstName, lastName });
            e.target.reset();
        }
    };
        
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input 
                    ref={ node => this.firstNameInput = node }
                    placeholder='Imię'
                />
                <input 
                    ref={ node => this.lastNameInput = node }
                    placeholder='Nazwisko'
                />
                <input type="submit" />
            </form>
        )
    }
}

export default Form;