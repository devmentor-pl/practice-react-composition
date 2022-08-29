import React from 'react'

class TableHeader extends React.Component {
 
    render() {
        const {headerData} = this.props

        return(
            <thead>
                <tr>
                {headerData.map((product,index) => <th key={index}>{product}</th>)}
                </tr>
            </thead>
        )
    }
}

export default TableHeader
