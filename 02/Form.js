import React from 'react';

class Form extends React.Component {
    render() { 
        const {eventHandler} = this.props
        return (
            <form onSubmit={eventHandler}>
                <input name='input' /><input type='submit'/>
            </form>
        )
    }
}

export default Form;