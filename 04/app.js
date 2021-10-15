import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    getInfo = (files) => {
        this.setState({filesList: files})  
    }

    render() {
        const copyItems = this.state.filesList.map(el=>{
            return {...el, id:uuid()}
        })
        return (
            <section>
                <File onChange={this.getInfo}/>
                <List items ={copyItems}/>
            </section>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));