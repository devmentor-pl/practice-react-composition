// import React from 'react';

// class Textarea extends React.Component {
//     secRef = React.createRef();

//     componentDidMount() {
//         console.log(this.secRef.current.offsetHeight);
//     }
//     getRows = (scrollBar) => {
//         return this.props.scrollBar ? 2 : 1;
//     }
//     // render() {
//     //     const { isScroll, scrollBar } = this.props;
//     //     return <textarea rews={2} ref={this.secRef} onInput={(e) => {
//     //         isScroll(e), console.log(scrollBar)
//     //     }}></textarea>
//     // }
//     render() {
//         const { content, isScroll, scrollBar } = this.props;
//         return (
//             <textarea
//                 value={content}
//                 onScroll={isScroll}
//                 rows={this.getRows(scrollBar)}
//             />
//         )
//     }

// }

// export default Textarea;



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



