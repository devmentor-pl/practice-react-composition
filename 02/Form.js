import React from 'react';

class Form extends React.Component {

    secRef = React.createRef()

    handleSubmit = (e) => {
        e.preventDefault();
        const username = this.secRef.current.value;
        this.props.handleSubmit(username);
    }

    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.secRef} name="user" defaultValue="" /><input type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;