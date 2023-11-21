import React from 'react';

class Textarea extends React.Component {
    textareaRef = React.createRef();

    getHeight = () => {
        if (this.textareaRef.current) {
            return this.textareaRef.current.clientHeight;
        }
        return 0;
    };

    render() {
        const { content } = this.props;
        return (
            <textarea
                ref={this.textareaRef}
                value={content}
                onChange={() => {}}
                // other textarea props as needed
            />
        );
    }
    
}

export default Textarea;