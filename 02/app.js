import React from "react";
import { createRoot } from "react-dom/client";
import List from "./List";
import Form from "./Form";

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

		return (
			<section>
				<Form onSubmit={this.addListItem} />
				<List listFromState={usersList} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
