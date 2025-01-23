import React from 'react';
import { createTwoFilesPatch } from 'diff';
import { parse, html } from 'diff2html';
import 'diff2html/bundles/css/diff2html.min.css'; // Import the default CSS for diff2html


const ComparisonResult = ({ file1, file2 }) => {
  if (!file1 || !file2) return null;

  // Generate a diff patch
  const diffPatch = createTwoFilesPatch('Document 1', 'Document 2', file1, file2);

  // Convert the diff to HTML
  const diffHtml = diff2Html.getPrettyHtml(diffPatch, {
    inputFormat: 'diff',
    outputFormat: 'side-by-side',
  });

  return (
    <div>
      <h2>Comparison Result</h2>
      <div
        dangerouslySetInnerHTML={{ __html: diffHtml }}
        style={{ border: '1px solid #ccc', padding: '10px' }}
      />
    </div>
  );
};

export default ComparisonResult;
