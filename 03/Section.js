import React from 'react';

function Section(props) {
    const { children, title } = props;
    return (
        <>
            <h2>{title}</h2>
            <ul>
                {children}
            </ul>
        </>
    );
};

export default Section;