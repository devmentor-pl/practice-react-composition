import React from 'react'

class TableBody extends React.Component {

    render() {
        const {bodyKey} = this.props
        return (
            <tbody key={bodyKey}>
                {this.props.children}
            </tbody>
        )
    }
}

export default TableBody