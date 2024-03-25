import React, { useState } from 'react';
import { uploadFile } from './api'; // Import uploadFile function from api.js

function FileUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file to upload');
      return;
    }

    setUploading(true);

    try {
      await uploadFile(selectedFile);
      alert('File uploaded successfully!');
      setSelectedFile(null);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('An error occurred while uploading the file');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h2>Upload File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}

export default FileUploadForm;
