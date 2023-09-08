import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
	state = {
		usersList: [],
	};
	handleFormSubmit = inputValue => {
		this.setState(prevState => ({
			usersList: [...prevState.usersList, inputValue], 
		}));
	};
	render() {
		const { usersList } = this.state;
		return (
			<section>
				<Form submit={this.handleFormSubmit} />
				<List items={usersList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
