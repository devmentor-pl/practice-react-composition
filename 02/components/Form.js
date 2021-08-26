import React from 'react';

class Form extends React.Component {
    render() {
        const {formEl} = this.props;
        return (
            <section>
                <form onSubmit={formEl}>
                    <input 
                        name='input'
                        type='text'
                        placeholder='nazwisko i imię'
                        autoComplete='off'
                    />
                    <input type='submit'/>
                </form>
            </section>
        )
    }
}

export default Form;