import React from 'react';

class Form extends React.Component {

   getValue(){
    return this.input.value
    
   }

  
    render() {
         const { add } = this.props;
        return (
          <form onSubmit={add}>
            <input  ref={ el => this.input = el} />
            <input type="submit" />
          </form>
        );
    }
}

export default Form;