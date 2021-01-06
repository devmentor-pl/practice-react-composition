import React from 'react'

class TableHeader extends React.Component {
    render() {
        const {listPrices} = this.props
        const style = {textAlign: 'left'}
        const headerContent = listPrices.map( item =>  
            <tr key={ item.id }>
                <th>
                    { item.name }
                </th>
                <th>
                    { item.price }
                </th>
            </tr> 
            )
        
        return ( <thead style={ style }>
            <tr>
                <th>ELEMENT</th>
                <th>CENA</th>
            </tr>
                { headerContent }
        </thead> )
    }
}

export default TableHeader;