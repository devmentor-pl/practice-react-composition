import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getInfos = (files) => {
        this.setState({filesList: files})
    }


    render() {
        const newItems = this.state.filesList.map(el => {
            return {...el, id: uuid()}
        })

        return (
            <section>
                <File onChange={this.getInfos} />
                <List items={newItems}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));