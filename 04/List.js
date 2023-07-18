import React from 'react';


class List extends React.Component {

    renderList = () => {
        const {data} = this.props;
        const list = data.map(item=> {
            const {name,size,content, id} = item;
            return (
                <li key={id}>
                    <h1>NAME: {name}</h1>
                    <h2>SIZE: {size} bytes</h2>  
                    {content}
                </li>
            )
        })
        return list;
    }

    render() {
        return <ul>{this.renderList()}</ul>
    }
}

export default List;