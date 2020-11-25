import React from "react";

export default function ListItem({ item }) {
  return (
    <li>
      <h2>File name: {item.name}</h2>
      <p>File size: {item.size}</p>
      <h3>File content:</h3>
      <p>{item.content}</p>
    </li>
  );
}
