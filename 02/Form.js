import React from 'react';

class Form extends React.Component {
    secRef = React.createRef();

    render() {
        const { func } = this.props;
        return (
            <section>
                <form onSubmit={(ev) => func(ev, this.secRef.current)}>
                    <input ref={this.secRef} />
                    <input type="submit" />
                </form>
            </section>
        )
    }
}

export default Form;