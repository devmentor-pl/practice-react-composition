import React from 'react';
import { createRoot } from 'react-dom/client';
import Textarea from './Textarea';

class App extends React.Component {
    // State przechowuje stan komponentu. W tym przypadku przechowuje wartosc pola textarea
    state = {
        text: '',
    }

    // Metoda ktora jest wywolana przy kazdej zmianie wartosci pola textarea
    // Aktualizuje stan komponentu na podstawie wprowadzanego tekstu
    handleTextareaChange = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        // Pobieram aktualny tekst z obiektu state
        const { text } = this.state;

        // Renderuje komponent Textarea przekazujac aktualny tekst i funkcje obslugi zmiany jako props
        return (
            <Textarea value={text} onChange={this.handleTextareaChange} />
        );
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);

// 