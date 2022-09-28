import React from 'react';

class Textarea extends React.Component {

    changeHandler = (e) => {
        e.preventDefault();
        const {add} = this.props;
        const text = e.target.value;
        add(text);
    }

    getHeight() {
        return this.textarea.offsetHeight;
        }

    getScrollHeight() {
        return this.textarea.scrollHeight;
    }

    setHeight() {
        const {addRows} = this.props;
        addRows();
    }
       

    render() {
        const {rows} = this.props;
        return (
                <textarea  rows={rows} ref={el => this.textarea = el} onChange={this.changeHandler}>
                </textarea>
        )
    }
}

export default Textarea;