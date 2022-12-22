import React from 'react';
import Header from './Header';


class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return <table>
            <Header></Header>
        </table>
    }
}

export default Table;

