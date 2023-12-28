import React from 'react';
import { createRoot } from 'react-dom/client';
import { v4 as uuidv4 } from 'uuid';
import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [], // Stan poczatkowy, przechowujacy liste plikow
    }

    // Obsluguje zdarzenie wyboru plikow
    handleFilesSelected = (selectedFiles) => {
        // Konwertuje fileList na tablice i iteruje po kazdym pliku
        Array.from(selectedFiles).forEach(file => {
            const reader = new FileReader(); // Tworze nowa instancje FileReader
            reader.onload = (e) => { // Ustawiam funkcje, ktora zostanie wywolana po zaladowaniu pliku
                const fileContent = e.target.result; // Pobieram zawartosc pliku
                // Aktualizuje stan aplikacji, dodajac nowy plik do listy
                this.setState(prevState => ({
                    filesList: [...prevState.filesList, {
                        id: uuidv4(), // Generuje unikalne id za pomoca biblioteki uuid
                        name: file.name, // Pobieram nazwe pliku
                        size: file.size, // Pobieram rozmiar pliku
                        content: fileContent, // Pobieram zawartosc pliku
                    }]
                }));
            };
            reader.readAsText(file);  // Rozpoczynam odczytanie zawartosci pliku jako tekst
        });
    };




    render() {
        const { filesList } = this.state;
        // Renderuje komponenty File i List, przekazujac odpowiednie props
        return (
            <section>
                <File onFileChange={this.handleFilesSelected}/>
                <List files={filesList}/>
            </section>
        )
    }
}

const root = createRoot(document.querySelector('#root'));
root.render(<App />);
