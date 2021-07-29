import React from 'react';
import ReactDOM from 'react-dom';

class TableRow extends React.Component {

    render() {

        // const data = this.props.data;
        const { data } = this.props;

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