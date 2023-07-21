import React from 'react';

class Form extends React.Component {
    render() {
        const { addUser, reference } = this.props
        return (
            <section>
                <form onSubmit={addUser}>
                    <input
                        ref={reference}
                    />
                    <input
                        type="submit"
                    />
                </form>
            </section>
        )
    }
}

export default Form;