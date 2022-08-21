import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    
    textAreaRef = React.createRef();

    state = {
        text: '',
    }

    changeText = (text) => {
        this.setState ({
            text: text, 
        })
    // console.log(text);
    }
    // Użyj metody `.getSnapshotBeforeUpdate()` – pozwoli to sprawdzić wysokość `<textarea />` (`.offsetHeight`) jeszcze przed aktualizacją danych. Zwróć w tej metodzie informacje, 
    // które będą określać, czy wysokość po aktualizacji ma zostać zmieniona (np. `{ resize: true }`).

    getSnapshotBeforeUpdate(prevProps, prevState) {
        // console.log(this.textAreaRef.current.getOffSetHeight());
        const offsetHeight = this.textAreaRef.current.getOffSetHeight()
    
        
        if(offsetHeight <= 100) {
            return {
                resize: true
            };
        }
        return {
            resize: false
        };

    }

    // metodzie `.componentDidMount()` zmodyfikuj wysokość dla `<teaxtarea />`, jeśli `.offsetHeight < .scrollHeight` oraz gdy `snapshot.resize` jest równe `true`.

    componentDidUpdate(prevProps, prevState, snapshot) {
        let scrollHeight = this.textAreaRef.current.getScrollHeight();
        let offsetHeight = this.textAreaRef.current.getOffSetHeight();
        //  console.log(`scrollHeight to jest ${scrollHeight}`);
        //  console.log(`offsetHeight to jest ${offsetHeight}`);
        //  console.log(this.textAreaRef.current.textareaRef.current.style.height)
        //  console.log(snapshot);


        if(snapshot.resize == true && offsetHeight < scrollHeight) {
            this.textAreaRef.current.textareaRef.current.style.height = `${scrollHeight + 1}px`
        }
    }s
       
       

    render() {
        const { text } = this.state;
        return (
            <Textarea changeText={this.changeText} ref={this.textAreaRef} content={ text } />
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));