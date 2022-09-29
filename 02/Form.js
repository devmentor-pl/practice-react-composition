import React from "react";

class Form extends React.Component {
  render() {
    const { onClick, onChange } = this.props;
    return (
      <section>
        <input onChange={onChange} />
        <input onClick={onClick} type="submit" />
      </section>
    );
  }
}

export default Form;
