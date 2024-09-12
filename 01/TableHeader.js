import React from 'react'

class TableHeader extends React.Component {
    render() {
        const { colNames } = this.props
        return (
            <thead>
                <tr>
                    {colNames.map((el) => {
                        return (
                            <th key={el}>{el}</th>
                        )
                    })}
                </tr>
            </thead >
        )
    }
}

export default TableHeader