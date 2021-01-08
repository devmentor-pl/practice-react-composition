import React from 'react'

class TableHeader extends React.Component {
    render() {
        const {listPrices} = this.props
        const style = {textAlign: 'left'}
        
        return ( <thead style={ style }>
            <tr>
                <th>ELEMENT</th>
                <th>CENA</th>
            </tr>
        </thead> )
    }
}

export default TableHeader;