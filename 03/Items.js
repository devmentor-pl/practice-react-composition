import React from 'react';


function Items(props) {
    const {data, inCart, clickHandle} = props;

    function handleClick(id) {
        if(typeof clickHandle === 'function') {
            clickHandle(id);
        }
    }


    return (
        <li>{data.id} {data.name} {(data.price)} <button disabled={inCart ? true :false} onClick={() => handleClick(data.id)}>Kup Teraz</button></li>
    )
}

export default Items;