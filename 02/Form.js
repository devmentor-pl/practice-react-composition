import React from 'react';

class Form extends React.Component {
    onSubmit= (e) => {
        e.preventDefault()
        this.props.addUser(this.input.value)
        this.input.value = '';
    }

    render() {
        return (
            <section>
                <form onSubmit={this.onSubmit}>
                <input ref={ node => this.input = node } /><input  type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;