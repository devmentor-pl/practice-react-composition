import React from 'react';
import ReactDOM from 'react-dom';

import Table from './components/Table';
import data from './data.json';

const style = {
    border: '1px solid black',
}

function App()  {
    return <Table data={ data } style={style}/>
}

ReactDOM.render(<App/>, document.querySelector('#root'));