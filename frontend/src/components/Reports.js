// Reports.js
import React,{ useState } from 'react';

const Reports = () => {
  // Dummy data for demonstration
  const dummyData = [
    { id: 1, patientName: 'John Doe' },
    { id: 2, patientName: 'Jane Smith' },
    { id: 3, patientName: 'Michael Johnson' },
    { id: 4, patientName: 'Emily Davis' },
    { id: 5, patientName: 'William Brown' },
  ];

  const [searchTerm, setSearchTerm] = useState('');


  // Filtered data based on search term
  const filteredData = dummyData.filter(
    (item) =>
      item.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.id.toString().includes(searchTerm.toLowerCase())
  );

  // Handle input change for search
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="container mt-4">
      <h2>Reports</h2>
      
        <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by name or ID..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
     
      <table className="table table-striped mt-4">
        <thead>
          <tr>
            <th scope="col">Patient Name</th>
            <th scope="col">ID</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((item) => (
            <tr key={item.id}>
              <td>{item.patientName}</td>
              <td>{item.id}</td>
              <td>
                <button className="btn btn-dark">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
