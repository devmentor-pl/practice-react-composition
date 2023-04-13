import React from 'react';

function Group({ children, title }) {
    return (
        <>
            <h2>{title}</h2>
            {children}
        </>
    );
}

export default Group;