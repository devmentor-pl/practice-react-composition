import React from 'react';

class Form extends React.Component {
    render() {
        const {firstInput, onClick} = this.props;
        console.log(firstInput)
        return (
            
            <section>
                <input ref={firstInput}/>
                <button onClick={onClick}>Submit</button>
            </section>
        )
    }
}

export default Form;