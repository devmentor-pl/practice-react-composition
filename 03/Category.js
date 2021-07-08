import React from "react";

function Category({ children }) {
  return (
    <>
      <h2>Category</h2>
      <div className={"category-list"}>{children}</div>
    </>
  );
}

export default Category;
