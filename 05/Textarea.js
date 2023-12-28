import React from "react";

class Textarea extends React.Component {
    // Ustawiam referencje do pola textarea aby moc manipulowac elementem DOM 
    setTextareaRef = (element) => {
        this.textareaRef = element;
    };

    // Obsluguje zmiane wartosci w polu textarea i przekazuje te wartosc do komponentu nadrzednego
    handleChange = (event) => {
        const { onChange } = this.props;
        onChange(event);
    };

    // Wiem ze nie sa uzywane te argumenty ale sa czescia sygnatury metody tak wyczytalem ;p 
    // getSnapshotBeforeUpdate jest wywolana tuz przed aktualizacja komponentu
    // Zapisuje aktualne wymiary textarea, ktore beda uzywane w componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
        const snapshot = {
            offsetHeight: this.textareaRef.offsetHeight,
            scrollHeight: this.textareaRef.scrollHeight,
        };
        return snapshot;
    }

    // Tu tak samo ;p 
    // Uzywam danych ze snapshot aby dostosowac wysokosc textarea jesli jest to konieczne
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot.offsetHeight < snapshot.scrollHeight && snapshot.offsetHeight < 100) {
            this.textareaRef.style.height = `${snapshot.scrollHeight}px`;
        }
    }

    render() {
        const { value } = this.props;
        // Renderuje pole textarea z przypisana wartoscia i obsluga zdarzenia zmiany
        // style: height: 'aut' zapewnia ze wysokosc pola bedzie sie dostosowywac
        // overflow: 'hidden' ukrywa pasek przwijania
        return (
            <textarea
                ref={this.setTextareaRef}
                value={value}
                onChange={this.handleChange}
                style={{ height: 'auto', overflow: 'hidden' }}
            />
        );
    }
}

export default Textarea; 