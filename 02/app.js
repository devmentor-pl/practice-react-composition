import React from "react";
import { createRoot } from "react-dom/client";
import { v4 as uuid } from "uuid";
import List from "./List";
import Form from "./Form";
import ListItem from "./ListItem";

class App extends React.Component {
	state = {
		usersList: [],
	};

	addListItem = name => {
		this.setState(state => {
			return { usersList: [...state.usersList, name] };
		});
	};

	render() {
		const { usersList } = this.state;

		const list = usersList.map(listItem => {
			return <ListItem key={uuid()} listItemText={listItem} />;
		});

		return (
			<section>
				<Form onSubmit={this.addListItem} />
				<List children={list} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
