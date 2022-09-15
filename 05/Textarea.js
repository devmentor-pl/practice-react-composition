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
        this.setState({ value: e.target.value });
    }
    componentDidMount() {
        const height = this.refArea.current.offsetHeight
        console.log('textarea height', height)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        return {
            height: this.refArea.current.offsetHeight,
            risize: true
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
        console.log('snapshot.height', snapshot.height)
        const scroll = this.refArea.current.scrollHeight
        console.log('scroll', scroll)
        if(snapshot.height < scroll && snapshot.risize) {
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