import React from 'react';

class Form extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault()

        const { value } = this.input

        if (value) {
            this.props.addUser(value)
        }
        else {
            alert('Uzupełnij polę "imię"')
        }
        this.input.value = ''
    }

    render() {

        return (
            <section >
                <form onSubmit={this.handleSubmit}>
                    <input placeholder='wpisz imię' ref={node => this.input = node} />
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;