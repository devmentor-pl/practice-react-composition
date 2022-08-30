import React from 'react';

class Form extends React.Component {
    render() {
        const {onSubmit} = this.props
        return (
            <form onSubmit={onSubmit}>
                <input /><input type="submit" />
            </form>
        )
    }
}

export default Form;