import React from 'react';

class Form extends React.Component {
    refInput = React.createRef()

    onSubmit = e => {
        e.preventDefault()
        const input = this.refInput.current 
        console.log(input.value)
        this.props.addUser(input.value)
        input.value =''
    }


    render() {
        return (
            <section>
                <form onSubmit={this.onSubmit}>
                    <input
                        ref={this.refInput}
                    />
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;