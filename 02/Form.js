import React from 'react';

class Form extends React.Component {

    render() {
        const {onSubmit} = this.props
        return (
            <section>
                <input onSubmit={onSubmit} /><input type="submit" />
            </section>
        )
    }
}

export default Form;