import React from "react"

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

export default TableFooter