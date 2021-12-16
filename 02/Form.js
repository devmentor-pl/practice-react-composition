import React from "react";

class Form extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addUser(this.input.value);
        this.input.value = "";
    };

    render() {
        const addUser = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <input defaultValue="" ref={(node) => (this.input = node)} />
                <input type="submit" />
            </form>
        );
    }
}

export default Form;
