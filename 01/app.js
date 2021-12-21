import React from 'react';
import ReactDOM from 'react-dom';

import Table from './Table';
import data from './data.json';
import './style.css'

function App()  {
    return <Table data={ data }/>
}

ReactDOM.render(<App/>, document.querySelector('#root'));