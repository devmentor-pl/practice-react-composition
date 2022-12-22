import React from 'react';
import data from './data.json';


class Header extends React.Component {
    render() {
        return (
            
            <div>
            <h1>Table Header</h1>
            {data.map((detail , index) => {
                return (
                <h1>{detail.price}</h1>
                )
            })}
            </div>
            
        ) 
    }
}

export default Header;