import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import FileInput from './components/FileInput';
import ComparisonResult from './components/ComparisonResult';

function App() {
  const [file1Content, setFile1Content] = useState('');
  const [file2Content, setFile2Content] = useState('');

  const handleFilesUpload = (content1, content2) => {
    setFile1Content(content1);
    setFile2Content(content2);
  };

  return (
    
    <div className="App">
      <h1>Document Comparison Tool</h1>
      <FileInput onFilesUpload={handleFilesUpload} />
      <ComparisonResult file1={file1Content} file2={file2Content} />
    </div>
  );
}

export default App;

