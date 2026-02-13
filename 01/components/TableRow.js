import React from "react"
import TableHeader from "./TableHeader"

function TableRow({id, name, price, quantity, isEven}){ // isEven - parzyste 
    return (
    <tr className={`table__row ${isEven ? "table__row--even" : ""}`}>
      <td className="table__cell">{id}</td>
      <td className="table__cell">{name}</td>
      <td className="table__cell">{price} zł</td>
      <td className="table__cell">{quantity}</td>
    </tr>
  )
}

export default TableRow

