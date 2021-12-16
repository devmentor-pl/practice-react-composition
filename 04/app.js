// Tym razem naszym zadaniem jest wyświetlenie zawartości wybranych plików tekstowych poprzez pole formularza.

// W komponencie <App /> mamy state, w którym będziemy przechowywać informacje o zawartości pliku, jego nazwie oraz rozmiarze.

// Pamiętaj, aby również dodać uniklane id. Możesz użyć do tego uuid, który opisuję w materiałach.

// Zapisane dane powinniśmy przekazać do komponentu <List /> i w nim je wyrenderować.



import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }


    showFile = async (e) => {
        e.preventDefault()

        for( let i = 0; i< e.target.files.length; i++) {
            const file = e.target.files[i]
        

        let infoFile = {};
        if( file && file.type.includes('text')) {
            const reader = new FileReader()
            reader.onload = async (e) => { 
              const text = (e.target.result)
              console.log(text)
              alert(text) 
        


        infoFile = {
            id: uuid(),
            name: file.name,
            size: file.size,
            text: text,
        }

        this.addFile(infoFile);
    };
        reader.readAsText(file, 'UTF-8');

      }
    }}

addFile = (file) => {
   this.setState(state => {
       return {
           filesList: [...state.filesList, file],
       };
   }, () => {
       console.log(this.state.filesList);
   });
}


render() {
    const { filesList } = this.state;
    return (
        <section>
            <File onChange={this.showFile} />
            <List items={filesList} />
        </section>
    )
}
}

ReactDOM.render(<App/>, document.querySelector('#root'));