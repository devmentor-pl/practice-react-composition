import React from 'react';

const TableBody = (props) => {
  const { children } = props;
  const list = React.Children.map(children, (child) => {
    return <tr>{child}</tr>;
  });
  return <tbody>{list}</tbody>;
};

export default TableBody;
