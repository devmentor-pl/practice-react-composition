export const TableFooter = props => {
    const { data } = props
    const total = data.reduce((reduced, item) => reduced + item.price * item.quantity, 0)
    return (
        <tr>
            PRICE: {total} PLN
        </tr>

    )

}

export default TableFooter