import React from 'react';

class Textarea extends React.Component {

    refTextarea = React.createRef();


    getSnapshotBeforeUpdate(prevProps){

        if (prevProps.content !== this.props.content) {
            return {
              resize: this.refTextarea.current.offsetHeight < this.refTextarea.current.scrollHeight
            };
          }
    }

    componentDidUpdate(prevProps, prevState, snapshot){

        if (snapshot.resize === true){
            this.refTextarea.current.style.height = 'auto';

            const newHeight = Math.min(this.refTextarea.current.scrollHeight, 100);
            this.refTextarea.current.style.height = `${newHeight}px`
        }

    }

    render() {
        const {content, onChange} = this.props;
        return <textarea ref={this.refTextarea} value={content} onChange={onChange}></textarea>
    }
}

export default Textarea;