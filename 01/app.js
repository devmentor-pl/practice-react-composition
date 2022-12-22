import React from 'react';
import { createRoot } from 'react-dom/client';
import Table from './Table';
import data from './data.json';
import Header from './Header';





function App()  {
    return <Table data={ data }/>,
    <Header></Header>
    
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
