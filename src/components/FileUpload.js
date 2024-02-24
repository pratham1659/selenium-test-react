import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (file) {
      // Create a FormData object
      const formData = new FormData();
      formData.append("file", file);

      // Make a POST request to save the file
      fetch("/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            toast.success("File uploaded successfully");
            setFiles([...files, file]);
            setFile(null); // Clear selected file
            // Handle successful upload
          } else {
            toast.error("Error uploading file");
            // Handle upload error
          }
        })
        .catch((error) => {
          toast.error("Error uploading file:", error);
          // Handle upload error
        });
    } else {
      toast.error("No file selected");
      // Handle case where no file is selected
    }
  };

  return (
    <div className="headerStyle">
      <h2>File Upload</h2>
      <p>Select file to Upload: </p>
      <input name="FileUpload" id="fileupload" type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <h3>Uploaded Files:</h3>
        <ul>
          {files.map((uploadedFile, index) => (
            <li key={index}>{uploadedFile.name}</li>
          ))}
        </ul>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default FileUpload;
