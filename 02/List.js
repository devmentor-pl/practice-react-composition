import React from "react";
import ListItem from "./ListItem";
import { v4 as uuid } from "uuid";

function List(props) {
	const { listFromState } = props;

	const list = listFromState.map(listItem => {
		return <ListItem key={uuid()} listItemText={listItem} />;
	});

	return <ul>{list}</ul>;
}

export default List;
