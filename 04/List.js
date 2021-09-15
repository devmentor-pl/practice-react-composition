import React from "react";

class List extends React.Component {
    render() {
        const files = this.props.list.map((f) => {
            return (
                <li key={f.key}>
                    name: {f.name}, type: {f.type}, size: {f.size}
                </li>
            );
        });
        return <ul>{files}</ul>;
    }
}

export default List;
