    import React from 'react';
    import { createRoot } from 'react-dom/client';

    import Textarea from './Textarea';

    class App extends React.Component {
        state = {
            text: '',
        }

        addText = (txt) => {
            this.setState({
                text: txt,
            })
        }
        render() {
            const { text } = this.state;
            return (
                <Textarea content={ text } addText={this.addText}/>
            )
        }
    }

    const root = createRoot(document.querySelector('#root'));
    root.render(<App />);
