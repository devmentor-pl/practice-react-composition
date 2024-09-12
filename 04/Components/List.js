import React from 'react';

class List extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <ol>
                <h2>Lista plików</h2>
                {children}
            </ol>
        )
    }
}

export default List;