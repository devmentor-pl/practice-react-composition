import React from 'react';
import ReactDOM from 'react-dom';


import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    render() {
        return (
            <section>
                <File onChange={this.readFile}/>
                <List data={this.state.filesList} />
            </section>
        )
    }

    readFile = data => {
        Object.values(data.target.files).map(file => {
            if(file && file.type.includes('text')) { 
                const reader = new FileReader()

                const scope = this
                reader.onload = function(readerEvent) {
                    const content = readerEvent.target.result
                    const newFile = {name: file.name, size: file.size, content: content}

                    scope.setState(state =>{
                       return{filesList: [...scope.state.filesList, newFile]}  
                    })
                }
                reader.readAsText(file, 'UTF-8')
            } else {
                alert('Wybierz plik tekstowy!');
                }
            })     
        }
    }


ReactDOM.render(<App/>, document.querySelector('#root'));