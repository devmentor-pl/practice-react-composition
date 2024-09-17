import React from 'react';

class Textarea extends React.Component {
    secRef = React.createRef();

    render() {
        return <textarea onChange={e => this.props.handleChange(e.target.value)} ref={(el) => (this.secRef = el)}></textarea>;

    }

    getSnapshotBeforeUpdate = () => {
        if (this.getTextAreaHeight() < 100) {
            return { resize: true };
        } else {
            return { resize: false };
        }
    };

    getTextAreaHeight() {
        return this.secRef.offsetHeight
    }
    getScrollTextAreaHeight() {
        return this.secRef.scrollHeight
    }
    componentDidUpdate(props, state, snapshot) {
        const scrollHeight = this.getScrollTextAreaHeight();
        if (snapshot.resize && this.getTextAreaHeight() < scrollHeight) {
            this.secRef.style.height = `${scrollHeight}px`
        }
    }

}

export default Textarea;



