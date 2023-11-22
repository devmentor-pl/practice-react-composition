    import React from 'react';
    import { createRoot } from 'react-dom/client';

    import Textarea from './Textarea';

    class App extends React.Component {
        state = {
            text: '',
        }

        txtRef = React.createRef();

        componentDidUpdate() {
            console.log(this.txtRef.current.getHeight())
        }
      
        render() {
            const { text } = this.state;
            return (
                <Textarea content={ text } ref={this.txtRef}/>
            )
        }
    }

    const root = createRoot(document.querySelector('#root'));
    root.render(<App />);
