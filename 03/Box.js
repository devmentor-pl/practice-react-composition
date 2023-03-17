import React from 'react';

const Box = (props) => {
	const { title, children } = props;
	return (
		<div>
			<h2>{title}</h2>
			<ul>{children}</ul>
		</div>
	);
};

export default Box;
