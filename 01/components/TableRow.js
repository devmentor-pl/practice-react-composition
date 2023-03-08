import React from "react";

export default class TableRow extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <tr>
                {items.map((i, index) => <td key={index}>{i}</td>)}
            </tr>
        )
    }
}