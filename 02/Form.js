import React from 'react';

class Form extends React.Component {
    handleSubmit = e => {
        const {addName} = this.props;
        e.preventDefault();
        let name = this.input.value;
        addName(name);
    }
    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <input ref={ node => this.input = node}/><input type="submit" />
            </form>
        )
    }
}

export default Form;