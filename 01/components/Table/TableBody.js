import React from "react";

export default class TableBody extends React.Component {
  render() {
    const { children } = this.props
    return (
      <tbody>
        {
          children.map((child, key) => {
            return (
              <tr
                key={key}
              >
                {child}
              </tr>
            )
          })
        }
      </tbody>
    )
  }
}