import React from "react";

export default class Product extends React.Component {
      
    render() {
        const {data : {name, price}, clickButton, isCart, data} = this.props; 

        return (
            <>
                <h2>{ name }</h2>
                <p>{ price }</p>
                <button 
                    onClick={ () => clickButton(data) }
                    disabled= { data.inCart&&!isCart ? true : false}> 
                    { isCart ? 'Delete' : 'Add' }
                </button>
            </>
        )
    }
}