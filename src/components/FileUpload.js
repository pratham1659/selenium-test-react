import React, { useState, useCallback } from "react";
import { Toaster, toast } from "react-hot-toast";

const FileUpload = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    setSelectedFiles(files);
  }, []);

  const handleSubmit = () => {
    if (selectedFiles.length > 0) {
      setUploadedFiles((prev) => [...prev, ...selectedFiles]);
      toast.success(`${selectedFiles.length} file(s) uploaded successfully`);
      setSelectedFiles([]);
    } else {
      toast.error("Please select files before submitting.");
    }
  };

  const clearSelection = () => {
    setSelectedFiles([]);
    toast("File selection cleared", { icon: "❌" });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-md">
      <h1 className="text-2xl font-bold text-center mb-6">File Upload Testing</h1>

      <div className="space-y-4">
        {/* Drag & Drop Zone */}
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors
            ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"}
            relative`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}>
          <input type="file" multiple onChange={handleFileChange} className="hidden" id="fileInput" />
          <label htmlFor="fileInput" className="cursor-pointer block space-y-2">
            <div className="text-gray-600">
              <p className="font-semibold">Drag and drop files here</p>
              <p className="text-sm">or click to browse</p>
            </div>
          </label>
        </div>

        {/* Selected Files Preview */}
        {selectedFiles.length > 0 && (
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-semibold mb-2">Selected Files:</h3>
            <ul className="list-disc list-inside space-y-1">
              {selectedFiles.map((file, index) => (
                <li key={index} className="text-gray-700 text-sm">
                  {file.name}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-center gap-3">
          <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Upload Files
          </button>
          <button onClick={clearSelection} className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors">
            Clear Selection
          </button>
        </div>

        {/* Uploaded Files List */}
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-semibold mb-2">Uploaded Files:</h3>
          {uploadedFiles.length > 0 ? (
            <ul className="list-disc list-inside space-y-1">
              {uploadedFiles.map((file, index) => (
                <li key={index} className="text-gray-700 text-sm">
                  {file.name}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">No files uploaded yet</p>
          )}
        </div>
      </div>

      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FileUpload;
