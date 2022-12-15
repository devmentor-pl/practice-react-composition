import React from 'react';

class List extends React.Component {
    render() {
        const {list} = this.props;
        console.log(list);
        return <table>{list.map(element => {
                return (<tr>
                    <td>{element.name}</td>
                    <td>{element.size}</td>
                    <td>{element.content}</td>
                </tr>)
        })}</table>
    }
}

export default List;