import React from 'react'

class Product extends React.Component {
	handleClick = (e, product) => {
		const { isCategory, isCart } = this.props
		e.preventDefault()
		isCategory ? this.props.add(product) : isCart ? this.props.remove(product) : ''
	}

	render() {
		const { products, isCategory, isCart } = this.props

		const styles = {
			display: 'grid',
			gridTemplateColumns: '1fr 1fr 1fr',
		}

		const product = products.map(product => {
			const { name, price, id, inBasket } = product

			return (
				<div key={id} style={styles}>
					<h3>Nazwa: {name}</h3>
					<h3>Cena: {price}</h3>
					<button onClick={e => this.handleClick(e, product)} disabled={isCategory && inBasket}>
						{isCategory ? 'Dodaj do koszyka' : isCart ? 'Usuń z koszyka' : 'Dodaj'}
					</button>
				</div>
			)
		})

		return product
	}
}

export default Product