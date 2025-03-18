import React, { useState } from "react";
import { studentData as initialData } from "../api/data";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const Table = () => {
  const [studentData, setStudentData] = useState(initialData);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Calculate total pages
  const totalResults = studentData.length;
  const totalPages = Math.ceil(totalResults / rowsPerPage);

  // Get current rows for pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = studentData.slice(indexOfFirstRow, indexOfLastRow);

  const handleCheckboxChange = (id) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const handleSelectAll = () => {
    if (selectedItems.length === currentRows.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(currentRows.map((student) => student.id));
    }
  };

  const handleDelete = () => {
    setStudentData(studentData.filter((student) => !selectedItems.includes(student.id)));
    setSelectedItems([]);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Table Testing</h1>

      {/* Display Total Results and Total Pages */}
      <div className="text-center mb-4 text-gray-700">
        <p className="text-lg font-semibold">Total Results: {totalResults}</p>
        <p className="text-md">Total Pages: {totalPages}</p>
      </div>

      {/* Selected Data */}
      <div className="my-4 p-4 bg-gray-100 rounded-md border border-gray-300">
        <h2 className="text-lg font-semibold">Selected Data</h2>
        <p className="text-gray-700">
          {selectedItems.length > 0
            ? selectedItems.map((id) => studentData.find((student) => student.id === id)?.name).join(", ")
            : "No student selected"}
        </p>
        {selectedItems.length > 0 && (
          <button className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={handleDelete}>
            Delete Selected
          </button>
        )}
      </div>

      {/* Student Data Table */}
      <div className="overflow-x-auto">
        <table id="mytable" className="w-full border-collapse border border-gray-300 rounded-lg shadow-md">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 border border-gray-300">
                <input type="checkbox" checked={selectedItems.length === currentRows.length} onChange={handleSelectAll} />
              </th>
              <th className="p-3 border border-gray-300">Name</th>
              <th className="p-3 border border-gray-300">Age</th>
              <th className="p-3 border border-gray-300">Grade</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {currentRows.map((student) => (
              <tr key={student.id} className="border border-gray-300 hover:bg-gray-100">
                <td className="p-3 border border-gray-300 text-center">
                  <input type="checkbox" checked={selectedItems.includes(student.id)} onChange={() => handleCheckboxChange(student.id)} />
                </td>
                <td className="p-3 border border-gray-300">{student.name}</td>
                <td className="p-3 border border-gray-300">{student.age}</td>
                <td className="p-3 border border-gray-300">{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination with Numbers and Arrows */}
      <div id="pagination" className="flex justify-center items-center mt-4 space-x-2">
        <button
          className={`px-3 py-1 bg-gray-300 rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}>
          <MdOutlineKeyboardArrowLeft className="w-5 h-5" />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded ${currentPage === index + 1 ? "bg-blue-600 text-white" : "bg-gray-300 hover:bg-gray-400"}`}
            onClick={() => setCurrentPage(index + 1)}>
            {index + 1}
          </button>
        ))}

        <button
          className={`px-3 py-1 bg-gray-300 rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-400"}`}
          onClick={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
          disabled={currentPage === totalPages}>
          <MdOutlineKeyboardArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Table;
