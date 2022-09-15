import React from 'react'

const Product = (props) => {
    const { id, name, price } = props.item
    const { disabled, isCart } = props
    return (
        <li>
            <span>
                {name} : {price} zł
            </span>{' '}
            {
                isCart ?
                    <button 
                        onClick={() => props.removeProduct(id)}
                    >
                        REMOVE
                    </button>
                    :
                    <button 
                        onClick={() => props.addProduct(id)}
                        disabled={disabled}
                    >
                        BUY
                    </button>
            }
        </li>
    )
}

export default Product