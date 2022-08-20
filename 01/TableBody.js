import React from 'react';

const TableBody = props => {
    const {children} = props
  
    return (
        <tbody>    
            {children}
        </tbody>
   ) 
}

export default TableBody;