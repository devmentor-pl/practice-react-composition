import React from "react"

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

export default TableHeader