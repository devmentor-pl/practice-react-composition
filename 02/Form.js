import React from 'react';

class Form extends React.Component {
    render() {
        const { onClick, onChange } = this.props;
        return (
            <section>
                <input onChange={onChange} /><input type="submit" onClick={onClick} />
            </section>
        )
    }
}

export default Form;