import React from 'react';

const TableHeader = (props) => {
	const { colNames } = props;
	const tableHeaders = colNames.map((name) => {
		return <th key={name}>{name}</th>;
	});

	return (
		<thead>
			<tr>{tableHeaders}</tr>
		</thead>
	);
};

export default TableHeader;
