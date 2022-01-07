import React from 'react';


class Form extends React.Component {
 
        
   handleSubmit = (event) => {
       event.preventDefault();
       console.log('submit');

       this.props.addNewUser(this.input.value);
       this.input.value = '';
   }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="input" ref={item => this.input = item} /><input type="submit" />       
            </form>
        )
    }
}


export default Form;



