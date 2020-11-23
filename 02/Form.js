import React from "react";

class Form extends React.Component {
  handleSubmitForm(e) {
    e.preventDefault();
    this.props.onAddUser(this.input.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmitForm(e)}>
        <input ref={(node) => (this.input = node)} />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
