import React from 'react';

class File extends React.Component {
    handleFileChange = (event) => {
        // Sprawdzam czy istnieje funkcja do obslugi pliku przekazana w props
        if (this.props.onFileChange) {
            // Wywoluje funkcje przekazana w props z wybranymi plikami jako argument
            this.props.onFileChange(event.target.files);
        }
    }

    render() {
        // Renderuje element input typu file, ktory pozwala na wybor wielu plikow
        return <input type="file" multiple onChange={this.handleFileChange} />
    }
}

export default File;