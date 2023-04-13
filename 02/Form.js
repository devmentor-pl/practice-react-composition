import React from 'react';

class Form extends React.Component {
    render() {
        const { onSubmit } = this.props;

        return (
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='userName'
                />
                <input type="submit" />
            </form>
        )
    }
}

export default Form;