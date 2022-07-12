import React from 'react';

class File extends React.Component {
    refFile = React.createRef()
    handleClick = (e) => {
        const files = this.refFile.current.files
        console.log( files )

        const filesArr = Object.values(files)
        console.log(filesArr)

        const dataFiles = 'Ala'
        const that = this

        filesArr.map(file => {
            console.log(file)
            const name = file.name 
            const size = file.size 
            const type = file.type 
            console.log(name)
            console.log(size)
            console.log(type)

            if(file && file.type.includes('text')) {
                console.log('file txt - okey')
                const reader = new FileReader()
                reader.onload = function(readerEvent) {
                    const content = readerEvent.target.result
                    console.log( content )
                    console.log( name )
                    const dataFiles = {
                        name,
                        size,
                        content 
                    }
                    console.log(dataFiles)
                    console.log(this)
                    console.log(that)
                    that.props.getDataFiles(dataFiles)
                }
                reader.readAsText(file, 'UTF-8');
            } else {
                console.log('File not text')
            }
            console.log(this)
        })
    }
    render() {
        
        return (
            <input
                name='names[]'
                type="file" 
                multiple 
                accept=".txt"
                ref={this.refFile} 
                onChange={this.handleClick}
            />
        )
    }
}

export default File;
