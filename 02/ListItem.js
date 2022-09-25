import React from 'react';


function ListItem(props) {      
        /*const users = props.items.map(i=>{
            <>
            <li key={i}>{i}</li>
            </>
        })*/
        return <li>{ props.name }</li>

}

export default ListItem;