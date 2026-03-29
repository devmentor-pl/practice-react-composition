import React from "react";

const FilesList = ({ children }) => {
  return (
    <div>
      <h2>Wczytane pliki</h2>
      {children}
    </div>
  );
};

export default FilesList;
