import React from 'react';

class Form extends React.Component {

    nameRef = React.createRef()
    surnnameRef = React.createRef()

    addSubmit = (e) => {
        e.preventDefault()

    const name = this.nameRef.current.value
    const surname = this.surnnameRef.current.value

    if(!name || !surname) return

    this.props.addUser({name, surname})

    this.nameRef.current.value = ''
    this.surnnameRef.current.value = ''

}

    render() {
        return (
            <section>
                <form onSubmit={this.addSubmit}>
                    <input type="text" placeholder='Podaj imię' ref={this.nameRef} />
                    <input type="text" placeholder='Podaj nazwisko' ref={this.surnnameRef}/>
                    <input type='submit' value="Dodaj" />
                </form>
            </section>
        )
    }
}

export default Form;