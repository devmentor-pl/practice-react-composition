import React from 'react';

class Form extends React.Component {
    

    handleSubmit = e => {
        console.log('handle')
        e.preventDefault()
        const { onSubmit } = this.props;
        onSubmit(this.input.value)
        console.log(this.input.value)
        this.input.value = '';
       
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder = "add your name" ref={node => this.input = node} />
                <input type="submit" />
            </form>
        )
    }
}

export default Form;
