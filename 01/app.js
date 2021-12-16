// Twoim pierwszym wyzwaniem będzie napisać komponent złożony <Table />, który będzie zawierał dane z pliku data.json, a jego struktura ma być podobna do tej przedstawionej niżej:

// <Table>
//     <TableHeader />
//     <TableBody>
//         <TableRow />
//         <TableRow />
//         <TableRow />
//     <TableBody>
//     <TableFooter />
// </Table>
// Gdzie:

// <TableHeader /> - zawiera nazwy pól wraz z informacją o kwocie do zapłaty
// <TableBody /> - zawiera wszystkie wiersze tabeli, pewnie przyda się .map() do renderowania wielu <TableRow />
// <TableRow /> - zawiera informacje o danym produkcie wraz z kwotą do zapłaty za ten produkt tj. price * quantity
// <TableFooter /> - zwiera informacje o sumie do zapłaty za wszystkie produkty, można wykorzystać .reduce()
// Zwróć uwagę na przekazywanie danych z rodzica do dziecka. Nie przekazuj wszystkich danych tylko te, które będa wykorzystane w dziecku.

// Proponuję najpierw wykonać całe zadanie jako komponent <Table />, potem dopiero wykonać dzielenie na mniejsze komponenty.

// Użyj React Developer Tools do sprawdzenia jak są przekazywane props z rodzica do dziecka.


import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';
import data from './data.json';


function App()  {
    return <Table data={ data }/>
}

ReactDOM.render(<App/>, document.querySelector('#root'));