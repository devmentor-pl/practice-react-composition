import React from 'react';

class File extends React.Component {
    submitHandle = e => {
        e.preventDefault();
        const {add} = this.props;
        const file = this.input.files[0];
        const fileName = this.input.files[0].name;
        const fileSize = this.input.files[0].size;
        console.log(this.input.files[0].name, this.input.files[0].size)
        if(file && file.type.includes('text')) {
            const reader = new FileReader();
            reader.onload = function(readerEvent) {
            const content = readerEvent.target.result;
                let fileContent = content;
                const fileElement = {name:fileName, size:fileSize, content:fileContent}
                add(fileElement);
            };
            reader.readAsText(file, 'UTF-8');
        } else {
            alert('Wybierz plik tekstowy!');
            }          
    }

    render() {
        return(
            <form onSubmit={this.submitHandle}>
                <input type="file" multiple 
                ref={ node => this.input = node }
                />
                <input type="submit" />
            </form>
        )
    }
}

export default File;