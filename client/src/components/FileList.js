import React, { useState, useEffect } from 'react';
import { fetchFiles } from './api'; // Import fetchFiles function from api.js

function FileList() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFilesFromServer();
  }, []);

  const fetchFilesFromServer = async () => {
    try {
      const filesData = await fetchFiles();
      setFiles(filesData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

  return (
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
  );
}

export default FileList;
    