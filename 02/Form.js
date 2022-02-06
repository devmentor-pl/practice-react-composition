import React from "react";

class Form extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.passToParent(this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <section>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="imię i nazwisko"
            ref={(node) => (this.input = node)}
          />
          <input type="submit" />
        </form>
      </section>
    );
  }
}

export default Form;
