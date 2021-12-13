import React from "react";

export default class TableHeader extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <thead>
        <tr>
          {Object.keys(data).map((key, idx) => {
            if (key === "id") {
              return null;
            }
            return <th key={idx}>{key.toUpperCase()}</th>;
          })}
          <th>SUM</th>
        </tr>
      </thead>
    );
  }
}
