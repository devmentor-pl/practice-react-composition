import React from 'react'

class Form extends React.Component {
  
  onSubmit = e => {
    e.preventDefault()
    const { updateList } = this.props
    updateList(this.input.value)
    this.input.value = ''
  }

  render () {
    return (
        <section>
            <form onSubmit={this.onSubmit}>
                <input defaultValue="Wpisz..." ref = {input => this.input = input}/>
                <input type="submit" />
            </form>
        </section>
    )
  }
}

export default Form
