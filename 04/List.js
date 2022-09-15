import React from 'react';

class List extends React.Component {
    
    render() {
        const styleUL = {
            border: '1px solid gray',
            listStyle: 'none',
            padding: 0,
        }
        const styleLI = {
            paddingBottom: '5px',
            borderBottom: '1px dotted red'
        }
        const {filesData} = this.props
        const fileShow = filesData.map(file => {
            return(
                <ul style={styleUL}>
                    <li style={styleLI}>{file.name}</li>
                    <li style={styleLI}>{file.size} B</li>
                    <li>{file.content}</li>
                </ul>
            )
        })
        return (
            <div>
                <h2>Lista plików</h2>
                {
                    filesData.length === 0
                    ? <div>Nie wybrano plików</div>
                    : fileShow
                }
                {/* {fileShow} */}
            </div>
        )
    }
}

export default List;