import React from "react";
import { v4 as uuidv4 } from 'uuid';

class TableHeader extends React.Component{
    render() {
        const { names } = this.props;
        return (
            <thead>
                <tr>
                    {names.map(name => <td key={uuidv4()}>{name}</td>)}
                </tr>
            </thead>
        )
     };
};

export default TableHeader;