import React from "react";
import "./styles.css";

const FamilyTree = () => {
  return (
    <div className="headerStyle scrollableList">
      <header className="nested-header">
        <h1>Family Tree for Xpath Testing</h1>
      </header>
      <div className="tree-container">
        {/* Ancestor */}
        <div className="row generation ancestor">Ancestor</div>

        {/* Parents Generation */}
        <div className="row generation parents">
          <div>Parent 1</div>
          <div>Parent 2</div>
        </div>

        {/* Children Generation */}
        <div className="row generation children">
          <div>Self 1</div>
          <div>Self 2</div>
          <div>Self 3</div>
        </div>

        {/* Grandchildren Generation */}
        <div className="row generation grandchildren">
          <div>Child 1</div>
          <div>Child 2</div>
          <div>Child 3</div>
          <div>Child 4</div>
        </div>

        {/* Additional Family (New Generation) */}
        <div className="row generation great-grandchildren">
          <div>Grandchild 1</div>
          <div>Grandchild 2</div>
          <div>Grandchild 3</div>
          <div>Grandchild 4</div>
          <div>Grandchild 5</div>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
