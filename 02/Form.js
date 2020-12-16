import React from 'react';

class Form extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const { onListUpdate } = this.props;
        onListUpdate(this.input.value);
        this.input.value = ''
    }

    render() {
        return (
            < form onSubmit={this.handleSubmit}>
                <input ref={node => this.input = node} /><input type="submit" />
            </ form>
        )
    }
}

export default Form;