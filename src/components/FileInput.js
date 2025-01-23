import React, { useState } from 'react';

const FileInput = ({ onFilesUpload }) => {
  const [file1Content, setFile1Content] = useState('');
  const [file2Content, setFile2Content] = useState('');

  const handleFileChange = (event, setFileContent) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setFileContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleCompare = () => {
    onFilesUpload(file1Content, file2Content);
  };

  return (
    <div>
      <h2>Upload Documents</h2>
      <div>
        <label>
          Document 1:
          <input
            type="file"
            accept=".txt,.json,.csv"
            onChange={(e) => handleFileChange(e, setFile1Content)}
          />
        </label>
      </div>
      <div>
        <label>
          Document 2:
          <input
            type="file"
            accept=".txt,.json,.csv"
            onChange={(e) => handleFileChange(e, setFile2Content)}
          />
        </label>
      </div>
      <button onClick={handleCompare}>Compare</button>
    </div>
  );
};

export default FileInput;
