import React from 'react';

class Form extends React.Component {
    geData = e => {
        e.preventDefault()
        this.props.passData(this.input.value)
    }

    render() {
        return (
            <form onSubmit={ this.geData}>
                <input type="text" ref={node => this.input = node} /><input type="submit"
                />
            </form>
        )
    }
}

export default Form;