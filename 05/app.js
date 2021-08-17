// Naszym zadaniem będzie napisanie rozwiązanie dla komponentu <Textarea />, które będzie zwiększać wysokość dla znacznika <textarea /> w przypadku gdy wielkość tekstu będzie powodować pojawianie się paska przewijania. Z zatrzeżeniem, że <textarea /> może zwiększać wysokość dopóki nie przekracza 100px.

// Zauważ, że state przechowujący treść pola formularza jest w <App /> i tak ma zostać czyli zawartość komponentu <Textarea /> jest kontrolowana przez ten state.

// Użyj .getSnapshotBeforeUpdate(), które pozwoli sprawdzić wysokość <textarea /> (.offsetHeight) jeszcze przed aktualizacją danych. Zwróć w tej metodzie informacje, które będą określać czy wysokość po aktualizacji ma zostać zmieniona (np. { resize: true }).

// W metodzie .componentDidMount() zmodyfikuj wysokość dla <teaxtarea /> jeśli .offsetHeight < .scrollHeight oraz gdy snapshot.resize jest równe true.

// Aby móc sprawdzić wysokość <textarea /> musisz utworzyć referencje dla tego elementu.



import React from 'react';
import ReactDOM from 'react-dom';

import Textarea from './Textarea';

class App extends React.Component {
    state = {
        text: [],
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');

        return {
            height: this.refUl.offsetHeight,
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate');
        console.log(snapshot.height)
        console.log(this.refUl.offsetHeight);
    }


    render() {
        const { text } = this.state;
        return (
            <>
                <Textarea content={text} ref={el => this.refUl = el} />
                {
                    text.map(
                        n => <li key={n} >{n} </li>
                    )
                }
            </>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));