import React from 'react'
import { createRoot } from 'react-dom/client'

import List from './List'
import Form from './Form'

class App extends React.Component {
	state = {
		usersList: [],
	}
	addUser = user => {
		this.setState(
			state => {
				return {
					usersList: [...state.usersList, user],
				}
			},
			() => {
				console.log(this.state.usersList)
			}
		)
	}

	render() {
		const { usersList } = this.state

		return (
			<section>
				<Form onSubmit={this.addUser} />
				<List items={usersList} />
			</section>
		)
	}
}

const root = createRoot(document.querySelector('#root'))
root.render(<App />)