import React from 'react';

class Form extends React.Component {
    render() {
        const {onClick} = this.props

        return (
            <section>
                <input ref={ref => this.inputRef = ref}/>
                <input type="submit" onClick={() => {
                    onClick(this.inputRef.value)
                    this.inputRef.value = ''}}/>
            </section>
        )
    }
}

export default Form;