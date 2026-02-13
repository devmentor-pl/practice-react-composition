import React from 'react';

function Table({ children, className }) { // dodaje rowniez stylowanie :) 
  return (
    <table className={`table ${className || ""}`}>{children}</table>
  );
}


/* ath components */

function TableHeader() {
  return (
    <thead className="table__header">
      <tr>
        <th className="table__header-cell">ID</th>
        <th className="table__header-cell">Nazwa</th>
        <th className="table__header-cell">Cena</th>
        <th className="table__header-cell">Ilość</th>
      </tr>
    </thead>
  )
}

function TableBody({children}){
    return(
        <tbody className="table__body">{children}</tbody>
        ) 
}

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

function TableFooter({total}){
    return(
    <tfoot className="table__footer">
      <tr>
        <td className="table__footer-cell" colSpan="3">
          <strong>Suma zakupów</strong>
        </td>
        <td className="table__footer-cell total__sum">
          <strong>{total} zł</strong>
        </td>
      </tr>
    </tfoot>
  )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow
Table.Footer = TableFooter

export default Table;
