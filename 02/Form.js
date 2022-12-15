import React from 'react';

class Form extends React.Component {
    render() {
        const {add} = this.props;
        return (
            <form onSubmit={(e)=>add(e, this.input.value)}>
                <input defaultValue="" ref={node => this.input = node}/><input type="submit" />
            </form>
        )
    }
}

export default Form;