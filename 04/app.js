import React from 'react';
import ReactDOM from 'react-dom';

import File from './File';
import List from './List';

class App extends React.Component {
    state = {
        filesList: [],
    }

    onChangeFile(e) {
        const file = e.target.files[0]
        console.log(file)

        if (file && file.type.includes('image')) {
            const reader = new FileReader()

            reader.onload = e => {
                const result = e.target.result

                const data = { name: file.name, size: file.size, result: result }

                console.log(result)

                this.setState({
                    filesList: [...this.state.filesList, data]
                })

            }

            reader.readAsDataURL(file)
        }

        else {
            alert('Wybierz plik graficzny!')
        }


    }

    render() {

        return (
            <section>
                <File onChangeFile={this.onChangeFile.bind(this)} />
                <List filesArray={this.state.filesList} />
            </section>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));