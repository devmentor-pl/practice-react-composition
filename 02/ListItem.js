import React from "react";

function ListItem(props) {
	const { listItemText } = props;

	return <li>{listItemText}</li>;
}

export default ListItem;
