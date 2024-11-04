import React from "react";

class Form extends React.Component {
  render() {
    const { handleClick } = this.props;
    return (
      <section>
        <input ref={(node) => (this.input = node)} />
        <input onClick={() => handleClick(this.input)} type="submit" />
      </section>
    );
  }
}

export default Form;
