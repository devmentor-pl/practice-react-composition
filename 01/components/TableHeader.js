import React from 'react'; 



function TableHeader({ items }) {
    
    return(
      
     
        <thead>
           
             <tr className="tr">
                {items.map((item) => {
                    return <th className="th" key={item}> {item} </th>
                })}

            </tr>
             
        </thead>

      

    )
}
   









export default TableHeader;