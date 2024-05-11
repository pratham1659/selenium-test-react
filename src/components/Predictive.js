import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { countries } from "../api/data";

const Predictive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [dialogVisible, setDialogVisible] = useState(false);
  const [selectedResult, setSelectedResult] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      const results = countries.filter((country) => country.toLowerCase().includes(event.target.value.toLowerCase()));
      setSearchResults(results);
      setDialogVisible(true);
    } else {
      setSearchResults([]);
      setDialogVisible(false);
    }
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setDialogVisible(false);
    toast.success("Success! Result clicked: " + result);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedResult) {
      toast.success("Success! Result clicked: " + selectedResult);
    } else {
      toast.error("Error: No data found");
    }
  };

  return (
    <div className="headerStyle">
      <h2>Predictive Search</h2>
      <p>Type Country to Search: </p>
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Search countries..." value={searchTerm} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
        {dialogVisible && (
          <div className="predictDialoge">
            {searchResults.length > 0 ? (
              <ul>
                {searchResults.map((result, index) => (
                  <li key={index} onClick={() => handleResultClick(result)}>
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No matching results found.</p>
            )}
            <button onClick={handleCloseDialog}>Close</button>
          </div>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Predictive;
