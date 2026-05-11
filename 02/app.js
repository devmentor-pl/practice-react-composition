import React from 'react';
import { createRoot } from 'react-dom/client';

import List from './List';
import Form from './Form';

class App extends React.Component {
	state = {
		usersList: [],
	};

	handleInputData = data => {
		this.setState(prev => ({
			usersList: [...prev.usersList, data],
		}));
	};

	render() {
		const { usersList } = this.state;
		console.log(usersList);

		return (
			<section>
				<Form onDataAdd={this.handleInputData} />
				<List items={usersList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
