import React from 'react';



class Footer extends React.Component {
    render() {
        const {data} = this.props;
        const total = data.reduce((acc, next) => acc +(next.price * next.quantity), 0);
        console.log(total);
        return (
                <tbody>
                        <tr>{total + ' ' +  'Kwota do zapłaty za wszystkie produkty'}</tr>
                </tbody>
                
        )
    }
}

export default Footer;