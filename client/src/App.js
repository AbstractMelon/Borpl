import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = await axios.get('/api/files');
      setFiles(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

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
      const formData = new FormData();
      formData.append('file', selectedFile);

      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Clear selected file and fetch updated file list
      setSelectedFile(null);
      fetchFiles();
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Borpl - File Sharing Platform</h1>

      <div>
        <h2>Upload File</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload'}
        </button>
      </div>

      <div>
        <h2>Files</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {files.map((file) => (
              <li key={file._id}>
                <a href={`/api/files/${file.filename}`} download={file.originalname}>
                  {file.originalname}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
