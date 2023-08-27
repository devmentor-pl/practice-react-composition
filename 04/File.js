import React from 'react';
import { v4 as uuid } from 'uuid';

class File extends React.Component {
    inputHandler = () => {
        const files = [...this.input.files]

        if (files) {
            files.forEach(file => {
                const ifText = file.type.includes('text')

                if (ifText) {
                    const { name, size } = file
                    const reader = new FileReader()

                    reader.onload = (e) => {
                        const text = e.target.result

                        const item = {
                            id: uuid(),
                            name,
                            size: size + ' B',
                            text
                        }
                        this.props.updateState(item)
                    }
                    reader.readAsText(file, 'UTF-8')
                }
                else {
                    alert("Wybierz plik tekstowy")
                }
            })

        }

    }

    render() {
        return <input
            ref={el => this.input = el}
            onChange={this.inputHandler}
            type="file"
            multiple />
    }
}

export default File;