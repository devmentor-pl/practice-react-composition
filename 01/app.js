import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './components/App';

// function App()  {
//     return <Table data={ data }/>
// }

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
