import React from 'react';

class File extends React.Component {
    refFile = React.createRef()
    handleClick = (e) => {
        const files = this.refFile.current.files
        console.log( files )

        const filesArr = Object.values(files)
        console.log(filesArr)

        filesArr.map(file => {
            console.log(file)
            console.log(file.name)
            console.log(file.size)
            console.log(file.type)

            if(file && file.type.includes('text')) {
                console.log('file txt - okey')
                const reader = new FileReader()
                reader.onload = function(readerEvent) {
                    const content = readerEvent.target.result
                    console.log( content )
                }
                reader.readAsText(file, 'UTF-8');
            } else {
                console.log('File not text')
            }
        })
        this.props.getDataFiles()
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



// get one file 
// ------------
// import React from 'react';

// class File extends React.Component {
//     refFile = React.createRef()
//     handleClick = (e) => {
//         const files = this.refFile.current.files
//         console.log( files )
//         const file1 = this.refFile.current.files[0]
//         console.log( file1 )
//         window.file1 = file1
//         const fileName = file1.name
//         const fileSize = file1.size
//         const fileType = file1.type
//         console.log( fileName )
//         console.log( fileSize )
//         console.log( fileType )
//         if(file1 && file1.type.includes('text')) {
//             const reader = new FileReader()
//             reader.onload = function(readerEvent) {
//                 console.log(readerEvent)
//                 const content = readerEvent.target.result
//                 console.log( content )
//             }
//             // reader.readAsDataURL(file1)
//             reader.readAsText(file1, 'UTF-8');
//         } else {
//             console.log('File not text')
//         }
//     }
//     render() {
        
//         return (
//             <input
//                 name='names[]'
//                 type="file" 
//                 multiple 
//                 accept=".txt"
//                 ref={this.refFile} 
//                 onChange={this.handleClick}
//             />
//         )
//     }
// }

// export default File;



// PDF
// ------------
// JS Form - input - 34-40
// React - kompozycja 76