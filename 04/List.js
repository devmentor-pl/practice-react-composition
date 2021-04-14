import React from 'react';


class List extends React.Component {
    render() {
        const {data} = this.props;

        const dataItem = data.map((item) => {
            console.log(item);
            return (
                <React.Fragment key ={item.id}>
                     <li>
                        <p>Name: {item.name}</p>
                        <p>Size: {item.size}</p>
                        <p>Result: {item.content}</p>
                    </li>
                </React.Fragment>
            )
        } );

        return <ul>{dataItem}</ul>;
    }
}

export default List;