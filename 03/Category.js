import React from 'react'
import Product from './Product'

function Category(props) {
	const { data, add } = props

	return (
		<>
			<h2>Category</h2>
			<Product products={data} isCategory={true} add={add} />
		</>
	)
}

export default Category