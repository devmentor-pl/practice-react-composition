import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={node => this.input = node} /><input type="submit"/>
            </form>
             )
        }
    }
    
   handleSubmit = e => {
        e.preventDefault()
        console.log(this.input.value)

        const {onSubmit} = this.props
        onSubmit(this.input.value)
        this.input.value = ''
}

export default Form;