import React from "react";

class TableHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Nazwa produktu</th>
                    <th scope="col">Cena</th>
                    <th>Ilość</th>
                    <th>Kwota do zapłaty</th>
                </tr>
            </thead>
        )
    }
}

export default TableHeader