import React from 'react';

function Category(props) {
  const list = React.Children.map(props.children, (child) => {
    return <li>{child}</li>;
  });

  return (
    <>
      <h2>Category</h2>
      <ul>{list}</ul>
    </>
  );
}

export default Category;
