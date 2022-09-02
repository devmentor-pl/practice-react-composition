class App extends React.Component {
    state = {
        cart: [],
        product: []
    }

    componentDidMount() {
        this.setState({
            product: [...data]
        })
    }

    addToBasket = (id) => {
        const addedItem = this.state.product.filter(item => item.id === id)
        this.setState({
            cart: [...this.state.cart, addedItem]
        })

    }
    removeItem = (id) => {
        const newCart = this.state.cart.filter(item => item.id !== id)

        this.setState({ 
            cart: newCart 
        })
        
    }
    render() {
        const itemsToBuy = this.state.product.map(item => {
            return <Product
                item={item}
                isCategory={true}
                addItem={() => this.addToBasket(item.id)}
                
            />
        }
        )

        const itemsInCart = this.state.cart.map(item => {
            return <Product
                item={item}
                isCategory={false}
                removeItem={() => this.removeItem(item.id)}
            />
        })

        return (
            <section>
                <Category>
                    {itemsToBuy}
                </Category>
                <Cart>
                    {itemsInCart}
                </Cart>
            </section>
        )
    }


}