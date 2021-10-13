import React from 'react';


class Product extends React.Component {
    state = {
            card: this.props.items
    }

    render() {
        const {items} = this.props;
        return(
           items.map(({id, name, price}) => {
                return (
                    <li key={id}>
                        <h3>{name}</h3>
                        <p>{price} PLN</p>
                        <button>DODAJ</button>
                        <button>USUŃ</button>
                    </li>
                )
            })
        )
    }
}

export default Product;