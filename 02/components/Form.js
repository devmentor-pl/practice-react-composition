import React from 'react';

class Form extends React.Component {
    handleSubmit = e => {
        const { updateState } = this.props;
        e.preventDefault();
        updateState(this.input.value)
        this.input.value = '';
    }

    render() {
        
        return (
            <section>
                <form onSubmit={ this.handleSubmit } >
                    <input 
                        placeholder="Add user"
                        defaultValue=''
                        ref={ node => this.input = node }
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