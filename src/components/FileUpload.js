import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      setUploadedFileName(selectedFile.name);
      setFiles([...files, selectedFile]);
      toast.success("File uploaded successfully");
    } else {
      // Show error alert
      toast.error("Please select a file before submitting.");
    }
  };

  return (
    <div className="headerStyle">
      <h1>File Upload Testing</h1>
      <p>Select file to Upload: </p>
      <input name="FileUpload" id="fileupload" type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <p>
          <strong>Current Uploaded File:</strong> {uploadedFileName}
        </p>{" "}
        {/* Display uploaded file name */}
        <p>
          <strong>Uploaded Files:</strong>
        </p>
        <ul>
          {files.map((uploadedFile, index) => (
            <li key={index}>{uploadedFile.name}</li>
          ))}
        </ul>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default FileUpload;
