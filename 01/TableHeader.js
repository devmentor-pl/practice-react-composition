import React from 'react';

const TableHeader = props => {
    const {headers} = props
    const header = headers.map(name => <th>{name}</th> )

    return (
        <thead>    
            <tr>
                {header}
            </tr>
        </thead>
   ) 
}

export default TableHeader;