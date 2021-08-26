import React from 'react';

import evenNumber from './styles/evenNumber';
import oddNumber from './styles/oddNumber';

let i = 0;
let j = 0;

function UsersList(props) {
    const name = props.name;
    i++;
    j = i % 2;
    if (j === 1) {
        return <li style={oddNumber}>{name}</li>;
    } else {
        return <li style={evenNumber}>{name}</li>;
    }
}

export default UsersList;