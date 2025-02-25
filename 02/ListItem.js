import React from 'react';

function ListItem(props) {
	const { data } = props;
	const liElem = data.map((li, index) => {
		return <li key={index}>{li}</li>;
	});

	return <>{liElem}</>;
}

export default ListItem;
