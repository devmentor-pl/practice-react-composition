    import React from 'react';
    import { createRoot } from 'react-dom/client';

    import Textarea from './Textarea';

    class App extends React.Component {
        state = {
            text: '',
        }
        txtRef = React.createRef();

        componentDidMount() {
            console.log(this.txtRef.current.getHeight())
        }

        render() {
            const { text } = this.state;
            return (
                <Textarea ref={this.txtRef} content={ text } />
            )
        }
    }

    const root = createRoot(document.querySelector('#root'));
    root.render(<App />);
