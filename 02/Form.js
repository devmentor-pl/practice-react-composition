import React from 'react';

class Form extends React.Component {
    
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input ref={this.props.inputRef}/>
                <input type="submit" />
            </form>
        )
    }
}

export default Form;