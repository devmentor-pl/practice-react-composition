import React from 'react';

class Form extends React.Component {
    handleSubmit = (e) => {
        const { addUserName } = this.props;
        e.preventDefault();
        addUserName(this.input.value);
        this.input.value = '';
     };
    render() {
        return (
            <section>
                <form onSubmit={this.handleSubmit}>
                    <input ref={node => this.input = node} />
                    <input type="submit" />
                </form>
            </section>
        )
    }
    componentDidMount() {
        console.dir(this.input.value);
    }
}

export default Form;