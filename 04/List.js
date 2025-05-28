import React from "react";

class List extends React.Component {
  render() {
    return (
      <>
        <h2>Lista plików</h2>
        <table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Rozmiar [B]</th>
              <th>Typ</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items?.map((file) => (
              <tr key={file.id}>
                <td>{file.name}</td>
                <td>{file.size}</td>
                <td>{file.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default List;
