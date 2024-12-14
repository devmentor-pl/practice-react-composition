import React from 'react';

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.nameInput.value;
        this.props.addUser(name);
        this.nameInput.value = '';
    };
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input
                        ref={(input) => {
                            this.nameInput = input;
                        }}
                    />
                    <input type="submit" />
                </form>
            </section>
        );
    }
}