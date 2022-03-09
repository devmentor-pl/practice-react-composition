import React from 'react';

class Form extends React.Component {

    submitHandler = e => {
        e.preventDefault();

        let user = this.input.value;
        const{addUser}=this.props;
        addUser(user);
        this.input.value = '';
    }

    render() {
        return (
            <section>
                <form onSubmit={this.submitHandler}>
                    <input type="text" ref={input => this.input = input}/>
                    <input type="submit" />
                </form >
            </section>
        )
    }
}

export default Form;