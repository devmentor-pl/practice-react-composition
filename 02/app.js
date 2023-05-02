import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuid } from 'uuid';

import List from './List';
import Form from './Form';

class App extends React.Component {
	state = {
		usersList: [],
		user: '',
	};

	addUser = (e) => {
		e.preventDefault();

		const user = this.state.user;
		this.setState((state) => {
			return {
				usersList: [...state.usersList, { name: user, uuid: uuid() }],
			};
		});

		this.setState({
			user: '',
		});
	};

	inputChange = (e) => {
		const { value } = e.target;
		this.setState({
			user: value,
		});
	};

	render() {
		const { usersList } = this.state;

		return (
			<section>
				<Form
					inpValue={this.state.user}
					onSubmit={this.addUser}
					onChange={this.inputChange}
				/>
				<List items={usersList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
