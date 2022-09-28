import React from 'react';

class Form extends React.Component {
    
   
    submitHandle = e => {
        const {add} = this.props;
        e.preventDefault();
        let name = this.input.value;
        add(name);
    }

   
    render() {
               return (
            <section>
                <form onSubmit={this.submitHandle}>
                    <input ref={ node => this.input = node }/>
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;