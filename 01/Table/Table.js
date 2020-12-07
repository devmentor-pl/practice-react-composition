import React from 'react';

class Table extends React.Component {
    render() {
        const { children, style } = this.props;

        return <table style={style}>
            {children}
        </table>
    }
}

export default Table;
