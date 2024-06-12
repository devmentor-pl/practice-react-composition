import React from 'react'

class List extends React.Component {
	render() {
		const { data } = this.props

		const listItem = data.map(item => {
			return (
				<li key={item.id}>
					<h1>Nazwa: {item.name}</h1>
					<p>Tekst: {item.text}</p>
					<h3>Rozmiar: {item.size}</h3>
				</li>
			)
		})

		return <ul>{listItem}</ul>
	}
}

export default List