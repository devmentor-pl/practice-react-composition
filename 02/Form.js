import React from 'react';

class Form extends React.Component {

    refInput = React.createRef()

    hadleSubmit = e => {
        e.preventDefault();
        //console.log('test formularza',this.refInput.current.value);

        this.props.addUser(this.refInput.current.value);
    }

    render() {
        return (
            <form onSubmit={this.hadleSubmit}>
                <input ref={this.refInput}/><input type="submit" />
            </form>
        )
    }
}

export default Form;