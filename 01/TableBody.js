import React from 'react';
import TableRow from './TableRow';

export default class TableBody extends React.Component {

    renderRow(){
        const{data} = this.props;
        return data.map(item => {
            return <TableRow key={item.id} data={item}/>
        })
    }

    render(){
        return(
            <tbody>
                {this.renderRow()}
            </tbody>
        )
    }
}