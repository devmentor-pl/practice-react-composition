import React from 'react';

class Form extends React.Component {
    render() {
        const {onClick} = this.props;
        return (
            <section>
                <input ref={node => this.input = node}/><input type="submit" onClick={onClick}/>
            </section>
        )
    }
}

export default Form;