import React from "react";

export default function TableHeader({ headers }) {
  return (
    <thead>
      <tr>
        {headers.map((header) => {
          return <th key={header}>{header}</th>;
        })}
      </tr>
    </thead>
  );
}
