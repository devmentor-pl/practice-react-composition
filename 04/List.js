import React from 'react';

class List extends React.Component {


    render() {

        const { filesArray } = this.props

        return <ul>Lista plików
            {filesArray.map((element, index) => {
                return <li key={index}>{element.name}, {element.size.toFixed(2)}B<br></br><img src={element.result}></img></li>
            })}


        </ul>
    }
}

export default List;