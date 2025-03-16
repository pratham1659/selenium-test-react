import React, { useState } from "react";
import { studentData } from "../api/data";

const Table = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleSelectAll = () => {
    if (selectedItems.length === studentData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(studentData.map((student) => student.id));
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center">Table Testing</h1>

      {/* Selected Data */}
      <div className="my-4 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold">Selected Data</h2>
        <p className="text-gray-700">
          {selectedItems.length > 0
            ? selectedItems.map((id) => studentData.find((student) => student.id === id)?.name).join(", ")
            : "No student selected"}
        </p>
      </div>

      {/* Student Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">
                <input type="checkbox" checked={selectedItems.length === studentData.length} onChange={handleSelectAll} />
              </th>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {studentData.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-100">
                <td className="p-3 text-center">
                  <input type="checkbox" checked={selectedItems.includes(student.id)} onChange={() => handleCheckboxChange(student.id)} />
                </td>
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.age}</td>
                <td className="p-3">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
