import React from 'react';

class Form extends React.Component {

    handleSubmit = e => {
        e.preventDefault();
        let userData = this.input.value
        this.props.onSubmit(userData);
        this.input.value = '';
    }

    render() {
        return (
            <section>
                <form onSubmit= {this.handleSubmit}>
                    <input defaultValue='Enter your name...'
                        ref={el=> this.input = el} />
                    <input type= "submit"/>
                </form>
            </section>
        )
    }
}

export default Form;