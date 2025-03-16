import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      setFiles([...files, selectedFile]);
      toast.success("File uploaded successfully");
      setSelectedFile(null); // Reset input field after upload
    } else {
      toast.error("Please select a file before submitting.");
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setFiles([]);
    toast("File upload cleared", { icon: "❌" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center">File Upload Testing</h1>

      <div className="mt-4 space-y-4">
        {/* File Input */}
        <div className="flex flex-col items-center space-y-2">
          <label className="text-lg font-semibold">Select File to Upload:</label>
          <input type="file" onChange={handleFileChange} className="border p-2 rounded-md w-full cursor-pointer" />
        </div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4">
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Upload
          </button>
          <button onClick={clearFile} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition">
            Clear
          </button>
        </div>

        {/* Uploaded Files Display */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Uploaded Files:</h2>
          {files.length > 0 ? (
            <ul className="list-disc list-inside text-gray-700">
              {files.map((file, index) => (
                <li key={index}>{file.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No files uploaded yet.</p>
          )}
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FileUpload;
