import React from "react";

class Form extends React.Component {
  formRef = React.createRef();

  add = (e) => {
    e.preventDefault();
    console.log(this.formRef.current.value);
    this.props.addNewUser(this.formRef.current.value);
    this.formRef.current.value = ""
  };

  render() {
    
    return (
      <form onSubmit={this.add}>
        <input ref={this.formRef} />
        <input type="submit" />
      </form>
    );
  }
}

export default Form;
