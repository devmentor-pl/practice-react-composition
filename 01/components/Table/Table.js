import React from 'react';

class Table extends React.Component {
    render() {
        const {  children } = this.props;

        return <table>{children}</table>

    }
}

export default Table;
