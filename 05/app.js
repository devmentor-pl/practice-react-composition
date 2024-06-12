import React from 'react'
import { createRoot } from 'react-dom/client'

import Textarea from './Textarea'

class App extends React.Component {
	state = {
		text: '',
	}

	addText = text => {
		this.setState({ text }, () => {
			console.log(this.state.text)
		})
	}

	render() {
		const { text } = this.state
		return <Textarea addText={this.addText} content={text} />
	}
}

const root = createRoot(document.querySelector('#root'))
root.render(<App />)