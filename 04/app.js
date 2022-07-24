import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getDataTxtFile = (name, size, txt) => {
        const data = {
            name: name,
            size: size,
            txt, txt
        };

        this.setState(prevState => ({
            filesList: [...prevState.filesList, data]
        }));
     };

    render() {
        return (
            <section>
                <File getDataTxtFile={this.getDataTxtFile} />
                <List data={this.state.filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));