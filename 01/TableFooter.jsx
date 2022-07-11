import React from 'react';

const TableFooter = (props) => {
    const {data} = props
    return ( 
        <div>
            <span>
            {
                data.reduce((prev, next) => {
                    return prev + next.price * next.quantity
                }, 0)
            }
            </span>
        </div>
     );
}
 
export default TableFooter;