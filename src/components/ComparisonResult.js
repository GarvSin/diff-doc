import React from 'react';
import { createTwoFilesPatch } from 'diff'; // From the 'diff' library
import { parse, html } from 'diff2html';   // Correct imports from 'diff2html'
import 'diff2html/bundles/css/diff2html.min.css'; // Include default styles

const ComparisonResult = ({ file1, file2 }) => {
  if (!file1 || !file2) return null;

  // Generate a diff patch
  const diffPatch = createTwoFilesPatch('Document 1', 'Document 2', file1, file2);

  // Parse the diff into a structured JSON format
  const diffJson = parse(diffPatch);

  // Convert the structured diff into HTML
  const diffHtml = html(diffJson, {
    drawFileList: true,
    matching: 'lines',
    outputFormat: 'side-by-side', // You can use 'line-by-line' as well
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
