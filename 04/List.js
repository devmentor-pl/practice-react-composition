import React from "react";
import { v4 as uuid } from "uuid";
function List(props) {
  const uploadFileDatas = props.items.map((i) => (
    <li key={uuid()}>
      <b>{i[0]}</b> to: {i[1]}
    </li>
  ));

  return <ul>{uploadFileDatas}</ul>;
}

export default List;
