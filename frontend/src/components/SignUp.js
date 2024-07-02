import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SignUp.css'; // Make sure to adjust the path if needed

const SignUp = () => {
  const [formObj, setFormObj] = useState({ userId: '', password: '' });
  const [signedUp, setSignedUp] = useState(false);
  const [errorSigningUp, setErrorSigningUp] = useState('');
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formObj);

    try {
      const resp = await axios.post('http://localhost:8080/api/signup', { ...formObj });
      console.log(resp.data);

      if (resp.data) {
        setUserId(resp.data.userId);
        setSignedUp(true);
        setErrorSigningUp('');
        console.log('Successfully signed up');

        // Redirect after 5 seconds
        setTimeout(() => {
          navigate('/login');
        }, 5000);
      } else {
        setSignedUp(false);
        setErrorSigningUp('Error while signing up');
      }
    } catch (error) {
      console.error('Error while signing up', error);
      setSignedUp(false);
      setErrorSigningUp('Error while signing up');
    }
  };

  const Error = () => (
    <div className="alert alert-danger" role="alert">
      {errorSigningUp}
    </div>
  );

  return (
    <div className="sign-up-page">
      <div className="background-image"></div>
      <Container className="sign-up-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="sign-up-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form onSubmit={handleSubmit}>
                {errorSigningUp && <Error />}
                <Form.Group className="mb-3" controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={formObj.username}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100">
                  Sign Up
                </Button>
              </Form>
              {signedUp && (
                <div className="alert alert-success mt-3" role="alert">
                  Successfully signed up! Your user ID is {userId}. Redirecting to login...
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
