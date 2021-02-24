import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';
import {v4 as uuid} from 'uuid';


class App extends React.Component {
    state = {
        filesList: [],
    }
    readerFunction = (e) => {
        const id = uuid();
        const input = e.target;
        let obj = {}
        const file = input.files[0];
        const size = file.size;
        const name = file.name;

        const reader = new FileReader()
        reader.onload = () => {
            const lines = reader.result
            obj = {...obj, lines,  size, name, id};
            this.setState({...this.state, filesList: [...this.state.filesList, obj]})
        }
        
        reader.readAsText(input.files[0])
       
        
    }
    renderList = () => {
        return this.state.filesList.map((item) => {
            return (
                <li key={item.id}>Name: {item.name}, Content: {item.lines},
                Size: {item.size}
                </li>
            )
        })
    }
    render() {
        console.log(this.state)
        return (
            <section>
                <File func={this.readerFunction} />
                <List list={this.renderList()}/>
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));