import React from "react";

class Form extends React.Component {
  render() {
    return (
      <section>
        <form onSubmit={this.submitHandler}>
          <input ref={(input) => (this.input = input)} />
          <input type="submit" />
        </form>
      </section>
    );
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.input.value);
    const { onUpdate } = this.props;
    onUpdate(this.input.value);
    this.input.value = "";
  };
}

export default Form;
