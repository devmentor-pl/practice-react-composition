import React from 'react'
import { createRoot } from 'react-dom/client'

import File from './File'
import List from './List'

import { v4 as uuid } from 'uuid'
class App extends React.Component {
	state = {
		filesList: [],
	}

	addFile = (file, content) => {
		const newfile = {
			name: file.name,
			size: file.size,
			id: uuid(),
			text: content,
		}

		this.setState(
			prevState => {
				return { filesList: [...prevState.filesList, newfile] }
			},
			() => {
				console.log(this.state.filesList)
			}
		)
	}

	render() {
		const { filesList } = this.state

		return (
			<section>
				<File addFile={this.addFile} />
				<List data={filesList} />
			</section>
		)
	}
}

const root = createRoot(document.querySelector('#root'))
root.render(<App />)