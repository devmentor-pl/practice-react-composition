import React from 'react';

class Form extends React.Component {
    render() {
        const { onClick } = this.props;
        return (
            <form onSubmit={onClick}>
                <input name='name' /> <input type="submit" />
            </form>
        )
    }
}
export default Form;