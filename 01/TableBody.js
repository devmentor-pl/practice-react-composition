import React from 'react';
import TableRow from './TableRow';


class TableBody extends React.Component {
    render() {
        // dlatego bo przy uruchomieniu zrobiłem <TableBody data={} />
        console.log(this.props.data)
        return <tbody>
            <TableRow data={this.props.data}/>
        </tbody>
    }
}

export default TableBody;
