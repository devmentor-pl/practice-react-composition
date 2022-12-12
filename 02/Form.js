import React from 'react';

class Form extends React.Component {
    render() {
        const {add} = this.props;
        console.log(add);
        return (
            <section >
                <input defaultValue="" ref={node => this.input = node}/><input onClick={()=>add(this.input.value)}type="submit" />
            </section>
        )
    }
}

export default Form;