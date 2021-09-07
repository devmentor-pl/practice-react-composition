import React from "react";
import { v4 as uuid } from "uuid";
import ListItem from "./ListItem";

class List extends React.Component {
    render() {
        const { items } = this.props;
        console.log(items);

        return (
            <ul>
                {items.map((item) => (
                    <ListItem item={item} key={uuid()} />
                ))}
            </ul>
        );
    }
}

export default List;
