import React from "react";
import { createRoot } from "react-dom/client";

import Textarea from "./Textarea";

class App extends React.Component {
	state = {
		text: "",
	};

	handleTextarea = words => {
		const { text } = this.state;
		this.setState(
			{
				text: words,
			},
			() => console.log(text)
		);
	};

	getSnapshotBeforeUpdate(prevState, prevProps) {
		const offsetHeight = this.ref.getOffsetHeight();
		const scrollHeight = this.ref.getScrollHeight();

		const resize =
			offsetHeight <= 100 && offsetHeight < scrollHeight
				? { resize: true }
				: { resize: false };
		return resize;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		const snapshotHeight = snapshot.resize;
		const scrollHeight = this.ref.getScrollHeight();
		const textArea = this.ref;
		console.log(textArea);

		if (snapshotHeight === true) {
			textArea.ref.style.height = scrollHeight + "px";
			console.log(this.ref.height);
		}
	}

	render() {
		return (
			<Textarea
				ref={el => (this.ref = el)}
				addTextToState={this.handleTextarea}
			/>
		);
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
