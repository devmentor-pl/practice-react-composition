import React from 'react';

class File extends React.Component {
    refFile = React.createRef()
    handleClick = (e) => {
        const files = this.refFile.current.files
        console.log( files )

        const filesArr = Object.values(files)
        console.log(filesArr)

        const that = this

        filesArr.map(file => {
            console.log(file)
            const name = file.name 
            const size = file.size 
            const type = file.type 
   
            if(file && file.type.includes('text')) {
                const reader = new FileReader()
                reader.onload = function(readerEvent) {
                    const content = readerEvent.target.result
                    console.log( name )
                    console.log( size )
                    console.log( content )
                    const dataFiles = {
                        name,
                        size,
                        content 
                    }
                    console.log(dataFiles)
                    that.props.getDataFiles(dataFiles)
                }
                reader.readAsText(file, 'UTF-8');
            } else {
                console.log('File not text')
            }
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
