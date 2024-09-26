import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    const { updateState } = this.props;

    updateState(this.input.value);
    this.input.value = "";
  };

  render() {
    return (
      <section>
        <input ref={(ref) => (this.input = ref)} />
        <input type="submit" onClick={this.handleSubmit} />
      </section>
    );
  }
}

export default Form;
