import React from 'react';

export default class TableRow extends React.Component {
    render() {
        const { row: {id, name, price, quantity} } = this.props; 
                        
        return (            
            <tr>
                <td>{ id }</td>
                <td>{ name}</td>
                <td>{ price }</td>
                <td>{ quantity }</td> 
            </tr>            
        )
    }
}