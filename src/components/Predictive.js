import React, { useState, useMemo } from "react";
import { Toaster, toast } from "react-hot-toast";
import { countries } from "../api/data";

const Predictive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState("");

  // Memoized search results for better performance
  const searchResults = useMemo(() => {
    if (!searchTerm) return [];
    return countries.filter((country) => country.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setDialogVisible(!!event.target.value);
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setDialogVisible(false);
    setSearchTerm(result);
    toast.success(`Success! Result clicked: ${result}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedResult) {
      toast.success(`Success! Result selected: ${selectedResult}`);
    } else {
      toast.error("Error: No data found");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">Predictive Search</h2>
      <p className="text-gray-700 mb-2">Type a country name to search:</p>

      <form onSubmit={handleSubmit} className="relative w-72">
        <input
          type="text"
          placeholder="Search countries..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Search countries"
        />

        {dialogVisible && searchTerm && (
          <div
            className="absolute left-0 right-0 mt-2 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto"
            role="listbox">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} onClick={() => handleResultClick(result)} className="p-2 cursor-pointer hover:bg-gray-200 transition">
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-2 text-gray-500">No matching results found.</p>
            )}
          </div>
        )}
      </form>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Predictive;
