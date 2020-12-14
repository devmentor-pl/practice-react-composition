import React from 'react';
import ReactDOM from 'react-dom';

import Table from './components/Table/Table';
import data from './data.json';

function App()  {
    return <Table data={ data }/>
}

ReactDOM.render(<App/>, document.querySelector('#root'));