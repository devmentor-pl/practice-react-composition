import React from 'react';

function ListItem({ user }) {
    return (
        <li>
            {user.firstName} {user.lastName}
        </li>
    );
};

export default ListItem;