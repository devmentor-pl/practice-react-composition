import React from 'react';

export default class Info extends React.Component {
    render() {
        const { msg } = this.props;
        if (msg) {
            return (
                <p style={{ color: 'red' }}>
                    {msg}
                </p>
            );
        };
        return null;
    };
};