
import React, { useState } from 'react';
import axios from 'axios';
import './EditableForm.css'; // Import the CSS file

const makePredictionRequest = async (formData) => {
  try {
    const response = await axios.post('http://localhost:8080/query', {
      inputs: JSON.stringify(formData + ' give the diagnosis of the person with above blood work in 50 words')
    });
    console.log('Prediction response:', response.data[0]);
    return response.data;
  } catch (error) {
    console.error('Error making prediction:', error);
    throw error;
  }
};

const EditableForm = ({ initialData }) => {
  const [formData, setFormData] = useState(initialData || {});
  const [isEditing, setIsEditing] = useState(false);
  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e, path) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };

    let nested = updatedFormData;
    for (let i = 0; i < path.length - 1; i++) {
      nested = nested[path[i]];
    }
    nested[path[path.length - 1]] = value;

    setFormData(updatedFormData);
  };

  const renderFields = (data, path = []) => {
    return Object.keys(data).map((key) => {
      const value = data[key];
      const currentPath = [...path, key];

      if (typeof value === 'object' && value !== null) {
        return (
          <div key={key}>
            <strong className="section-title">{key}</strong>
            {renderFields(value, currentPath)}
          </div>
        );
      } else {
        return (
          <div key={key} className="form-field">
            <div className="field-key">{key}</div>
            <div className="field-value">
              {isEditing ? (
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={(e) => handleInputChange(e, currentPath)}
                  className="edit-input"
                />
              ) : (
                <span>{value}</span>
              )}
            </div>
          </div>
        );
      }
    });
  };

  const handleSave = async () => {
    try {
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const handlePredict = async () => {
    try {
      setIsLoading(true);
      const prediction = await makePredictionRequest(formData);
      setPredictionResult(prediction[0]);
    } catch (error) {
      console.error('Error making prediction:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="editable-form-container">
      <h1 className="title">
        Report Details
        <span className="title-icon">
          <img width={40} src="https://res.cloudinary.com/duwadnxwf/image/upload/v1716300380/patient_u29wkb.png" alt="patient icon" />
        </span>
      </h1>

      {renderFields(formData)}

      <div className="button-group">
        <button
          type="button"
          className="action-button edit-button"
          onClick={() => setIsEditing(!isEditing)}
        >
          {!isEditing && <img src="https://res.cloudinary.com/duwadnxwf/image/upload/v1716276383/icons8-edit-24_fpgba3.png" className="edit-icon" alt="Edit" />}
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        {isEditing && (
          <button
            type="button"
            className="action-button save-button"
            onClick={handleSave}
          >
            Save
          </button>
        )}

        <button
          type="button"
          className="action-button predict-button"
          onClick={handlePredict}
        >
          Predict
        </button>
      </div>

      {isLoading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        predictionResult && (
          <div className="prediction-result">
            <div className="prediction-box">
              <h2 className="prediction-title">Prediction Result</h2>
              <p>{predictionResult.generated_text.slice(84,-1).replace(/^.*: /, '')}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default EditableForm;

