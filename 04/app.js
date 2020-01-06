import React from 'react';
import ReactDOM from 'react-dom';
import {v4 as uuid} from 'uuid';


import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    readFile = e => {

        const files = e.target.files;
        
        [...files].forEach(file=>{
            if(file && file.type.includes('text')){
                const reader = new FileReader();
                reader.readAsText(file,'UTF-8');

                reader.onload = readerEvent=>{
                    const content = readerEvent.target.result;
                    const{size,name} = file;
                
                    this.createNewFile(name,size,content);
                }
            }
        });
    }
    
    createNewFile(name,size,content) {
        size = this.addSizeUnit(size);
        const id = uuid();
        const newFile = {
            id: id,
            name : name,
            size: size,
            content: content,
        }

        this.addNewFile(newFile);
    }

    addSizeUnit(size){
        if(size < 1024){
            size += ' B';
        } else if(size > 1000 && size < 1000000 ){
            size /= 1000;
            size += ' KB';
        } else {
            size /= 100000;
            size += ' MB';
        }

        return size;
    }

    addNewFile(newFile){
        this.setState(state => {
            return {
                filesList : [...state.filesList, newFile],
            }
        });
    }
    render() {
        const {filesList} = this.state;
        
        return (
            <section>
                <File onChange={this.readFile} />
                <List filesList={filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));