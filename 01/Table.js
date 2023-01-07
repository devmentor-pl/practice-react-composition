import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';
import Row from './Row';


class Table extends React.Component {
    render() {
        const {data} = this.props;
        console.log(data);

        return <table>
            <Header></Header>
            
            <Row data = {data}></Row>
            <Footer data = {data}></Footer>
            
        </table>
    }
}

export default Table;

