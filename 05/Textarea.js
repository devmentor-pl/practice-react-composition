import React from 'react';

class Textarea extends React.Component {
    refArea = React.createRef()
    onSubmit = (e) => {
        e.preventDefault()
        console.log('Submit')
        const value = this.refArea.current.value 
        console.log(value)
        console.log(this.props)
        this.props.addText(value)
    }
    componentDidMount() {
        const height = this.refArea.current.offsetHeight
        console.log(height)
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" />
                <textarea ref={this.refArea}></textarea>
                <button>Send</button>
            </form>
        )
    }
}

export default Textarea;