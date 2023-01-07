import React from 'react';
import data from './data.json';


class Header extends React.Component {
    render() {
        const {detail} = this.props;
        return (
            
            <div>
            {data.map((detail) => {
                return (
                <h2>{detail.name}</h2>
                )
            })}
            </div>
            
        ) 
    }
}

export default Header;