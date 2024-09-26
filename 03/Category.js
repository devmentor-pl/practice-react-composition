import React from "react";

function Category(props) {
	const { productsToBuy } = props;

	return (
		<>
			<h2>Category</h2>
			<ul>{productsToBuy}</ul>
		</>
	);
}

export default Category;
