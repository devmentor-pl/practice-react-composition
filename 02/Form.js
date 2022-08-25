import React from 'react';

class Form extends React.Component {
    
    refInput = React.createRef();
    
    onSubmit = e => {
        const { submitForm } = this.props;
        e.preventDefault();
        submitForm(this.refInput.current.value);
    }

    render() {
        return (
            <form onSubmit={ this.onSubmit } >
                <input ref={ this.refInput }/>
                <input type="submit" />
            </form>
        )
    }
}

export default Form;