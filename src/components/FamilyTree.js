import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import "./styles.css";

const TreeNode = ({ id, name, children }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <li className="unique-tree-node">
      <div className="unique-node-content">
        {children && (
          <button onClick={toggleExpand} aria-expanded={expanded}>
            {expanded ? <ChevronDown className="unique-icon" /> : <ChevronRight className="unique-icon" />}
          </button>
        )}
        <div className="unique-member">{name}</div>
      </div>
      {children && expanded && <ul className="unique-children">{children}</ul>}
    </li>
  );
};

const FamilyTree = () => {
  return (
    <div className="headerStyle scrollableList">
      <div className="unique-container">
        <h1 className="unique-title">Family Tree</h1>
        <div className="unique-family-tree">
          <ul className="unique-tree-list">
            <TreeNode id="ancestor" name="Ancestor-1">
              <TreeNode id="parent-2" name="Parent-2" />
              <TreeNode id="parent-3" name="Parent-3">
                <TreeNode id="self-5" name="Self-5" />
                <TreeNode id="self-6" name="Self-6" />
                <TreeNode id="self" name="Self">
                  <TreeNode id="child-9" name="Child-9" />
                  <TreeNode id="child-10" name="Child-10">
                    <TreeNode id="grandchild-13" name="GrandChild-13" />
                    <TreeNode id="grandchild-14" name="GrandChild-14" />
                  </TreeNode>
                  <TreeNode id="child" name="Child">
                    <TreeNode id="grandchild" name="GrandChild" />
                  </TreeNode>
                  <TreeNode id="child-11" name="Child-11" />
                  <TreeNode id="child-12" name="Child-12">
                    <TreeNode id="grandchild-15" name="GrandChild-15" />
                    <TreeNode id="grandchild-16" name="GrandChild-16" />
                  </TreeNode>
                </TreeNode>
                <TreeNode id="self-7" name="Self-7" />
                <TreeNode id="self-8" name="Self-8" />
              </TreeNode>
              <TreeNode id="parent-4" name="Parent-4" />
            </TreeNode>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FamilyTree;
