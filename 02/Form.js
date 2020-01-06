import React from 'react';

class Form extends React.Component {

    getUser(){
        return this.input.value;
    }
    
    render() {
        const {onSubmit} = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input ref={ node => this.input = node }/><input type="submit" />
            </form>
        )
    }
}

export default Form;