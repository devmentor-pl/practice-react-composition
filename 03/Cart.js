import React from 'react'
import Product from './Product'

function Cart(props) {
	const { data, remove } = props

	return (
		<>
			<h2>Category</h2>
			<Product products={data} isCart={true} remove={remove} />
		</>
	)
}

export default Cart