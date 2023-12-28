import React from 'react';

class Form extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const name = this.nameInput.value.trim();
        const surname = this.surnameInput.value.trim();

        if (name && surname) {
            this.props.onAddUser({ name, surname });
            this.nameInput.value = '';
            this.surnameInput.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={(input) => this.nameInput = input} type="text" placeholder="Imię" />
                <input ref={(input) => this.surnameInput = input} type="text" placeholder="Nazwisko" />
                <input type="submit" value="Dodaj" />
            </form>
        )
    }
}

export default Form;