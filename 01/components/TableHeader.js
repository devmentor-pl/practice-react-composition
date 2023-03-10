import React from 'react';

const TableHeader = (props) => {
	const { columnNames } = props;
	const tableHeaders = columnNames.map((name, index) => {
		return <th key={index}>{name}</th>;
	});

	return (
		<thead>
			<tr>{tableHeaders}</tr>
		</thead>
	);
};

export default TableHeader;
