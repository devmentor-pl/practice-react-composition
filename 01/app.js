import React from 'react';
import { createRoot } from 'react-dom/client';

import Table from './Table';
import defaultData from './data.json';

function App() {
    const data = defaultData.map((item) => ({
        ...item, total: item.price * item.quantity,
    }));
    return <Table data={data}
        columns={[
            { propName: 'id', label: 'id' },
            { propName: 'name', label: 'nazwa' },
            { propName: 'price', label: 'cena' },
            { propName: 'quantity', label: 'ilosc' },
            { propName: 'total', label: 'razem' },
        ]}
    />
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);