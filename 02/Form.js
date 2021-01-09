import React from 'react';

class Form extends React.Component {
  getInputValue() {
    if (this.input.value) {
      const value = this.input.value;
      this.clearInput();
      return value;
    } else return null;
  }

  clearInput = () => {
    this.input.value = '';
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <section>
        <form onSubmit={handleSubmit}>
          <input
            defaultValue='Wpisz imię... '
            ref={(input) => (this.input = input)}
          />
          <input type='submit' />
        </form>
      </section>
    );
  }
}

export default Form;
