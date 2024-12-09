import React from "react";

function Category({ children }) {
  return (
    <div>
      <h2>Category</h2>
      <ul>{children}</ul>
    </div>
  );
}

export default Category;
