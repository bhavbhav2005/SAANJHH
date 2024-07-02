// src/pages/Form.js
/*import React, { useState } from "react";
import EditableForm from "../components/EditableForm";
import UploadReport from "../components/UploadReport";

export default function Form() {
  const [reportData, setReportData] = useState(null);

  return (
    <div>
      <UploadReport onReportData={setReportData} />
      {reportData && <EditableForm initialData={reportData} />}
    </div>
  );
}*/
/*import React, { useState } from "react";
import EditableForm from "./EditableForm";
import UploadReport from "./UploadReport";
import PatientSel from "./PatientSel";

export default function Form() {
  const backgroundStyle = {
    backgroundImage: "url('https://wallpaperaccess.com/full/958470.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
    overflowY: 'auto',
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '400vh',  // Adjust height as needed
    backdropFilter: 'blur(6px)',
    zIndex: 0,
    overflowY: 'auto'
  };

  const contentStyle = {
    zIndex: 1,
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Roboto, sans-serif',
    backgroundColor: 'rgba(220, 220, 220, 0.76)',
    maxHeight: '92%',
    marginTop: '8%',
  };

  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [reportData, setReportData] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId); // Update selectedPatientId in Form.js
    console.log('Selected Patient ID in Form:', patientId); // Verify patientId is received here
  };

  const handleReportData = (data) => {
    setReportData(data);
  };

  return (
    <div style={backgroundStyle}>
      <div style={blurOverlayStyle}></div>
      <div style={contentStyle}>
        {selectedPatientId === '' ? (
          <PatientSel onSelectPatient={handlePatientSelect} />
        ) : reportData ? (
          <EditableForm initialData={reportData} selectedPatientId={selectedPatientId} />
        ) : (
          <UploadReport selectedPatientId={selectedPatientId} onReportData={handleReportData} />
        )}
      </div>
    </div>
  );
}*/
/*import React, { useState } from "react";
 
import EditableForm from "./EditableForm";
import UploadReport from "./UploadReport";
import PatientSel from "./PatientSel";
import './Form.css';
import { Container, Row, Col, Alert } from 'react-bootstrap';

export default function Form() {
  

  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [reportData, setReportData] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId); // Update selectedPatientId in Form.js
    console.log('Selected Patient ID in Form:', patientId); // Verify patientId is received here
  };

  const handleReportData = (data) => {
    setReportData(data);
  };

  return (
    <div className="form-page">
      <div className="background-image"></div>
      <Container className="form-container"/>
        <Row className="justify-content-md-center"/>
          <Col md={6}/>
            <div className="form-card p-4 shadow-sm rounded"/>
              <h2 className="text-center mb-4">Form</h2>
    
      <div>
        {selectedPatientId === '' ? (
          <PatientSel onSelectPatient={handlePatientSelect} />
        ) : reportData ? (
          <EditableForm initialData={reportData} selectedPatientId={selectedPatientId} />
        ) : (
          <UploadReport selectedPatientId={selectedPatientId} onReportData={handleReportData} />
        )}
      </div>
     </div> 
    
  );
}*/
/*import React, { useState } from "react";
import EditableForm from "./EditableForm";
import UploadReport from "./UploadReport";
import PatientSel from "./PatientSel";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Form.css';

export default function Form() {
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [reportData, setReportData] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
    console.log('Selected Patient ID in Form:', patientId);
  };

  const handleReportData = (data) => {
    setReportData(data);
  };

  return (
    <div className="form-page">
      <div className="background-image"></div>
      <Container className="form-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="form-card shadow-sm">
              <Card.Body>
                
                {selectedPatientId === '' ? (
                  <PatientSel onSelectPatient={handlePatientSelect} />
                ) : reportData ? (
                  <EditableForm initialData={reportData} selectedPatientId={selectedPatientId} />
                ) : (
                  <UploadReport selectedPatientId={selectedPatientId} onReportData={handleReportData} />
                )}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}*/
/*import React, { useState } from "react";
import EditableForm from "./EditableForm";
import UploadReport from "./UploadReport";
import PatientSel from "./PatientSel";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Form.css';

export default function Form() {
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [reportData, setReportData] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
    console.log('Selected Patient ID in Form:', patientId);
  };

  const handleReportData = (data) => {
    setReportData(data);
  };

  return (
    <div className="form-page">
      <div className="background-image"></div>
      <Container className="form-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="form-card shadow-sm">
              <Card.Body>
                
                
                {selectedPatientId === '' ? (
                  <PatientSel onSelectPatient={handlePatientSelect} />
                ) : reportData ? (
                  <EditableForm initialData={reportData} selectedPatientId={selectedPatientId} />
                ) : (
                  <div className="upload-form">
                    <UploadReport selectedPatientId={selectedPatientId} onReportData={handleReportData} />
                    <Button variant="dark" className="submit-button" onClick={() => console.log('Submit clicked')}>Submit</Button>
                  </div>
                )}

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}*/
import React, { useState } from "react";
import EditableForm from "./EditableForm";
import UploadReport from "./UploadReport";
import PatientSel from "./PatientSel";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Form.css';

export default function Form() {
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [reportData, setReportData] = useState(null);

  const handlePatientSelect = (patientId) => {
    setSelectedPatientId(patientId);
    console.log('Selected Patient ID in Form:', patientId);
  };

  const handleReportData = (data) => {
    setReportData(data);
  };

  return (
    <div className="form-page">
      <div className="background-image"></div>
      <Container className="form-container">
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="form-card shadow-sm">
              <Card.Body className="card-body">
               
                {selectedPatientId === '' ? (
                  <PatientSel onSelectPatient={handlePatientSelect} className="select-patient" />
                ) : reportData ? (
                  <EditableForm initialData={reportData} selectedPatientId={selectedPatientId} />
                ) : (
                  <div className="upload-form">
                    <UploadReport selectedPatientId={selectedPatientId} onReportData={handleReportData} />
                    <Button variant="dark" className="submit-button button-black" onClick={() => console.log('Submit clicked')}>Submit</Button>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}




