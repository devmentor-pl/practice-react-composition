import React from "react";
import { v4 as uuid } from "uuid";

class List extends React.Component {
    render() {
        const files = this.props.list.map((f) => {
            return (
                <li key={uuid()}>
                    name: {f.name}, type: {f.type}, size: {f.size}
                </li>
            );
        });
        return <ul>{files}</ul>;
    }
}

export default List;
