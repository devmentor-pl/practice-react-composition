import React from "react";

class Form extends React.Component {
  refForm = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    let inputValue = this.refForm.current.value;
    const { addClient } = this.props;
    addClient(inputValue);
    this.refForm.current.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref={this.refForm} />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
