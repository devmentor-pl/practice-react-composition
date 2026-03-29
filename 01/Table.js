import React from "react";

const wrapperStyle = {
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
};
const tableStyle = {
  borderCollapse: "collapse",
  width: "auto",
  minWidth: "400px",
};

export class Table extends React.Component {
  render() {
    return (
      <div style={wrapperStyle}>
        <table style={tableStyle}>{this.props.children}</table>
      </div>
    );
  }
}
