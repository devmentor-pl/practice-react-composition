import React from 'react';

class Table extends React.Component {
    render() {
        const { data, children } = this.props;
        console.log(data);

        return (
            <table>
                {children}
            </table>
        )
    }
}

export default Table;
