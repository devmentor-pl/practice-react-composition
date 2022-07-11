import React from 'react';

class Form extends React.Component {
    refInput = React.createRef()
    handleSubmit = (e) => {
        e.preventDefault()
        const user = this.refInput.current.value
        // console.log(user)
        this.props.addUser(user)
        this.refInput.current.value = ''
    }
    render() {

        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input ref={this.refInput} />
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;