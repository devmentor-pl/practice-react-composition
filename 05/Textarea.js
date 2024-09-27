import React from 'react';

class Textarea extends React.Component {
    render() {
        const { reference, onChange, rows } = this.props
        return (
            <textarea
                ref={reference}
                onChange={onChange}
                rows={rows}
            >
            </textarea>
        )
    }
}

export default Textarea;