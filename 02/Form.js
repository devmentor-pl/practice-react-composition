import React from 'react';

class Form extends React.Component {

    refInput = React.createRef()

    handleSubmit = e => {
        e.preventDefault();
        
        const {addItem} = this.props;
        const input = this.refInput.current;

        if(typeof addItem === 'function') {
            this.props.addItem(input.value);
            input.value = '';
        } else {
            console.error('Nie przekazałeś funkcji do komponentu!');
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input ref={ this.refInput }/><input type="submit" />
            </form>
        )
    }
}

export default Form;