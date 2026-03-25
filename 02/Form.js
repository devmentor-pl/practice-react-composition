import React from "react";

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.inputRef.value;
    if (value) {
      this.props.addUser(value);
      this.inputRef.value = "";
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={(node) => (this.inputRef = node)} />
        <button type="submit">Dodaj</button>
      </form>
    );
  }
}

export default Form;
