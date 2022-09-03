import React from 'react';
import { v4 as uuid } from 'uuid'

class File extends React.Component {
    inputRef = React.createRef()

    handleChange = () => {

        [...this.inputRef.current.files].forEach(file => {
            if (file && file.type.includes('text')) {
                const reader = new FileReader()

                reader.onload = (readerEvent) => {
                    const content = readerEvent.target.result
                    const data = {
                        name: file.name,
                        size: file.size,
                        content: content,
                        id: uuid()
                    }

                    this.props.addData(data)
                }

                reader.readAsText(file, 'UTF-8')
            } else {
                alert('Wrong file type')
            }
        })
    }

    render() {
        return (
            <form >
                <input type="file" multiple
                    ref={this.inputRef}
                    onChange={this.handleChange}
                />
            </form>
        )
    }
}

export default File;