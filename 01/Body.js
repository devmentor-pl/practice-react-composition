import React from 'react';




class Body extends React.Component {
    render() {
        const {data} = this.props;
        return (
            <tbody>
                    {data.map((product)=>{
                        return (
                        <Row data= {data}></Row>
                        )
                    })  

                    }
                </tbody>
            )
        
        }
    }

export default Body;
              
