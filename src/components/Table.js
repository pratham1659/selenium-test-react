import React, { useState } from "react";

import { studentData } from "../api/data";

const Table = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    const selectedIndex = selectedItems.indexOf(id);
    if (selectedIndex === -1) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
  };

  const handleIdHeaderClick = () => {
    setSelectedItems([]);
  };

  return (
    <div className="headerStyle">
      <h1>Table Testing</h1>

      <div>
        <h2>Selected Data</h2>
        <p>{selectedItems.map((id) => studentData.find((student) => student.id === id).name).join(", ")}</p>
      </div>

      <div>
        <h2>Student Data</h2>
        <table className="student-table">
          <thead>
            <tr>
              <th onClick={handleIdHeaderClick}>
                ID
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>Age</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map((student) => (
              <tr key={student.id}>
                <td>
                  <input type="checkbox" checked={selectedItems.includes(student.id)} onChange={() => handleCheckboxChange(student.id)} />
                </td>
                <td>{student.name}</td>
                <td>{student.age}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
