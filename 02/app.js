import React from 'react';
import ReactDOM from 'react-dom';

import List from './List';
import Form from './Form';

class App extends React.Component {
  state = {
    usersList: [],
  };

  handleClick = (e) => {
    e.preventDefault();
    const name = this.input.getInputValue();
    const usersListCopy = this.state.usersList;

    this.setState({ usersList: [...usersListCopy, name] });
  };

  render() {
    const { usersList } = this.state;

    return (
      <section>
        <Form
          handleSubmit={this.handleClick}
          ref={(reference) => (this.input = reference)}
        />
        <List items={usersList} />
      </section>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
