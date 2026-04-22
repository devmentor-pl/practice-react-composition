import React from 'react';

import { Table, TableBody, TableFooter, TableHeader, TableRow } from './Table';
import data from './../../data.json'

function App() {
  return (
    <Table data={data} >
      <TableHeader />
      <TableBody>
        {data.map((el) => {
          return (
            <TableRow item={el} key={el.id} />
          )
        })}
      </TableBody>
      <TableFooter data={data} />
    </Table>
  )
}

export default App
