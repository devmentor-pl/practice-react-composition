import React from 'react';

class Form extends React.Component {

    getData = e => {
        e.preventDefault();
        const {formHandle} = this.props;
        formHandle(this.input.value);
        this.input.value = '';
    }

    render() {
        return (
            <form onSubmit={this.getData}>
                <input ref = {node => this.input = node}/>
                <input type="submit" />
            </form>
        )
    }
}

export default Form;