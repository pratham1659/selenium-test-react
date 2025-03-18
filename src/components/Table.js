import React, { useState } from "react";
import { studentData as initialData } from "../api/data";

const Table = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [students, setStudents] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Handle checkbox selection
  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  // Select All Checkbox
  const handleSelectAll = () => {
    if (selectedItems.length === paginatedData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(paginatedData.map((student) => student.id));
    }
  };

  // Delete Selected Rows
  const handleDelete = () => {
    setStudents((prev) => prev.filter((student) => !selectedItems.includes(student.id)));
    setSelectedItems([]);
  };

  // Pagination logic
  const totalPages = Math.ceil(students.length / itemsPerPage);
  const paginatedData = students.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Page Navigation
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Table Testing</h1>

      {/* Selected Data */}
      <div className="my-4 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold">Selected Data</h2>
        <p className="text-gray-700">
          {selectedItems.length > 0
            ? selectedItems.map((id) => students.find((student) => student.id === id)?.name).join(", ")
            : "No student selected"}
        </p>
      </div>

      {/* Delete Button */}
      <div className="mb-4 flex justify-between">
        <button
          className={`px-4 py-2 bg-red-500 text-white rounded-md shadow ${
            selectedItems.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-red-600"
          }`}
          onClick={handleDelete}
          disabled={selectedItems.length === 0}>
          Delete Selected
        </button>

        {/* Pagination Controls */}
        <div className="flex space-x-2">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md border bg-gray-200 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
            }`}>
            Previous
          </button>
          <span className="px-3 py-2 bg-gray-100 rounded-md border">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md border bg-gray-200 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-300"
            }`}>
            Next
          </button>
        </div>
      </div>

      {/* Student Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3">
                <input
                  type="checkbox"
                  checked={selectedItems.length === paginatedData.length && paginatedData.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="p-3">Name</th>
              <th className="p-3">Age</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {paginatedData.length > 0 ? (
              paginatedData.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-100">
                  <td className="p-3 text-center">
                    <input type="checkbox" checked={selectedItems.includes(student.id)} onChange={() => handleCheckboxChange(student.id)} />
                  </td>
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">{student.age}</td>
                  <td className="p-3">{student.grade}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
