import React from 'react';



class Row extends React.Component {
    render() {
        const {data} = this.props;
        return (
                <tbody>
                    {data.map((product)=>{
                        return (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>
                        )
                    })  

                    }
                </tbody>
                
        )
    }
}

export default Row;