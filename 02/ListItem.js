import React from "react";

class ListItem extends React.Component {
    render() {
        const { item } = this.props;

        return <li>{item}</li>;
    }
}

export default ListItem;
