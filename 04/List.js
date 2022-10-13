import React from "react"

class List extends React.Component {
  render() {
    return <ul>Lista plików</ul>
    const { items } = this.props
    return (
      <ul>
        {" "}
        {items.map(({ id, name, size, content }) => (
          <li key={id}>
            {name}: {content} ({size})
          </li>
        ))}
      </ul>
    )
  }
}

export default List
