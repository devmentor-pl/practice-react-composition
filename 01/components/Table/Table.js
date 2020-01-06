import React from 'react';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';

class Table extends React.Component {
    render() {
        const{ children } = this.props;

        return (
            <table>
                {children}       
            </table>
        )
    }
}

export default Table;
