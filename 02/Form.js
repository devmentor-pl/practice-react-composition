import React from 'react';


class Form extends React.Component {
 
        
   
 
    render() {
const {handleEvent} = this.props;
        return (
            <form onSubmit={handleEvent}>
                <input name="input"/><input type="submit" />
               
            </form>
        )
    }
}


export default Form;



