import React from "react";

const TableHeader = props => {
	const { children } = props;

	return (
		<thead>
			<tr>{children}</tr>
		</thead>
	);
};

export default TableHeader;
