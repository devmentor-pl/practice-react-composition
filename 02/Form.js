import React from 'react';

class Form extends React.Component {
  state = {
    userName: '',
    isEmptyFieldError: false,
  };

  handleInputChange = (event) => {
    this.setState({ userName: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userName.trim() !== '') {
      this.props.addUser(this.state.userName);
      this.setState({ userName: '', isEmptyFieldError: false });
    } else {
      this.setState({ isEmptyFieldError: true });
    }
  };

  render() {
    return (
      <section>
        <input
          placeholder={
            this.state.isEmptyFieldError
              ? 'Proszę wpisać dane!'
              : 'Imię i Nazwisko'
          }
          value={this.state.userName}
          onChange={this.handleInputChange}
          className={this.state.isEmptyFieldError ? 'error' : ''}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Dodaj użytkownika
        </button>
      </section>
    );
  }
}

export default Form;
