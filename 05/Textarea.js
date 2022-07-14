import React from 'react';

class Textarea extends React.Component {
    refArea = React.createRef()
    state = {
        value: ''
    }
    onSubmit = (e) => {
        e.preventDefault()
        console.log('Submit')
        const value = this.refArea.current.value 
        console.log(value)
        console.log(this.props)
        this.props.addText(value)
    }
    onTextArea = (e) => {
        console.log('onTextArea')
        this.setState({ value: e.target.value });
    }
    componentDidMount() {
        const height = this.refArea.current.offsetHeight
        console.log(height)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return {
            height: this.refArea.current.offsetHeight
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
        console.log(snapshot.height)
        const height = this.refArea.current.offsetHeight
        console.log(height)
        const scroll = this.refArea.current.scrollHeight
        console.log(scroll)
        if(height < scroll) {
            this.refArea.current.style.height = scroll + 'px'
        }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <textarea 
                    ref={this.refArea}
                    value={this.state.value}
                    onChange={this.onTextArea}
                ></textarea>
                <button>Send</button>
            </form>
        )
    }
}

export default Textarea;