import React from 'react';

class Form extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        this.props.onSubmit({name})
       
    }
    render() {
        return (
            <section onSubmit={ this.handleSubmit} >
                <input name="name"/>
                <input  type="submit" />
            </section>
        )
    }
}

export default Form;