
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UploadReport.css'; // Import the CSS file

const UploadReport = ({ onReportData }) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [diagnosisReport, setDiagnosisReport] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    console.log('Upload button clicked'); // Check if function is called

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8080/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Server response:', response.data); // Check server response
      onReportData(response.data);
      setDiagnosisReport(response.data); // Ensure this is the correct path
    } catch (error) {
      console.error('Error uploading file:', error);
      setError('Error uploading file');
    }
  };

  useEffect(() => {
    if (diagnosisReport) {
      console.log('Diagnosis Report:', diagnosisReport); // Check state update
    }
  }, [diagnosisReport]);

  return (
    <div className="upload-report-container">
      <div className="upload-report">
        <input type="file" className="upload-input" onChange={handleFileChange} />
        <div>
          <button
            type="button"
            className="upload-button mt-2 text-white font-medium rounded-lg text-s px-3 py-2 text-center me-2 mb-2"
            onClick={handleUpload}
          >
            Upload Report
          </button>
          {error && <p className="error-text">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default UploadReport;


