import React from 'react';

class Form extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.input.value);
        this.input.value = '';
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder='type user name' ref={node => this.input = node} />
                <input type="submit" />
            </form>
        );
    };
}

export default Form;