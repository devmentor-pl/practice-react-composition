import React from "react";
import { createRoot } from "react-dom/client";
import { v4 as uuid } from "uuid";
import File from "./File";
import List from "./List";

class App extends React.Component {
	state = {
		filesList: [],
	};

	addFile = files => {
		const filesArray = Object.values(files);

		filesArray.map(file => {
			if (file && file.type.includes("text")) {
				const reader = new FileReader();

				reader.onload = readerEvent => {
					const content = readerEvent.target.result;

					const fileData = {
						name: file.name,
						size: file.size,
						content: content,
						id: uuid(),
					};
					this.addFileToState(fileData);
				};
				reader.readAsText(file, "UTF-8");
			}
		});
	};

	addFileToState = files => {
		const { filesList } = this.state;
		this.setState({ filesList: [...filesList, files] });
	};

	render() {
		const list = Object.values(this.state.filesList).map(item => {
			return (
				<li>
					key={item.id} {""}
					{item.name} {""} {item.size} {""} {item.content}
				</li>
			);
		});

		return (
			<section>
				<File addFile={this.addFile} />
				<List list={list} />
			</section>
		);
	}
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
