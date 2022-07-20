import React from 'react';

// import TableRow from './TableRow';

class TableBody extends React.Component {
    render() {
        return (
            <tbody>{this.props.children}</tbody>
        )
    }
}

export default TableBody;