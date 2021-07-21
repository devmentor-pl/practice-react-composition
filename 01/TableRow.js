import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.json';





class TableRow extends React.Component {

    render() {
        const taskList = data.map(t => {
            return (
                <tr>
                    <td>{t.name}</td>
                    <td>{t.price * t.quantity}</td>
                </tr>
            )
        })
        return taskList;
    }
}

export default TableRow;