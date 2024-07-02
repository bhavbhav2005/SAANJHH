
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap'; // Assuming you are using Bootstrap components
import './Login.css';


const Login = ({ setIsLoggedIn }) => {
  const [formObj, setFormObj] = useState({ userId: "", password: "", userType: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formObj);

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      console.log(resp.data);

      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        console.log("Successfully logged in");

        // Redirect after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn("Invalid userId or password");
      }
    } catch (error) {
      console.error("Error while logging in", error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Login</h2>

              {errorLoggingIn && <Alert variant="danger">{errorLoggingIn}</Alert>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label text-dark">
                    UserId
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="userId"
                    name="userId"
                    value={formObj.userId}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label text-dark">
                    User Type
                  </label>
                  <select
                    className="form-control form-control-sm"
                    id="userType"
                    name="userType"
                    value={formObj.userType}
                    onChange={changeHandler}
                    required
                  >
                    <option value="">Select User Type</option>
                    <option value="caregiver">Care Taker</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
                
                {formObj.userType === 'caregiver' && (
                  <div className="mt-3 text-center">
                    <span>New user? </span>
                    <Link className='text-primary' to="/signup">Register here</Link>
                  </div>
                )}
              </form>

              {loggedIn && (
                <div className="alert alert-success mt-3" role="alert">
                  Successfully logged in! Redirecting to home...
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;*/
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [formObj, setFormObj] = useState({ userId: "", password: "", userType: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formObj);

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      console.log(resp.data);

      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        console.log("Successfully logged in");

        // Redirect after 2 seconds
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn(resp.data.message || "Invalid userId or password");
      }
    } catch (error) {
      console.error("Error while logging in", error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Login</h2>

              {errorLoggingIn && <Alert variant="danger">{errorLoggingIn}</Alert>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label text-dark">
                    UserId
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="userId"
                    name="userId"
                    value={formObj.userId}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label text-dark">
                    User Type
                  </label>
                  <select
                    className="form-control form-control-sm"
                    id="userType"
                    name="userType"
                    value={formObj.userType}
                    onChange={changeHandler}
                    required
                  >
                    <option value="">Select User Type</option>
                    <option value="caregiver">Care Taker</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>
                
                {formObj.userType === 'caregiver' && (
                  <div className="mt-3 text-center">
                    <span>New user? </span>
                    <Link className='text-primary' to="/signup">Register here</Link>
                  </div>
                )}
              </form>

              {loggedIn && (
                <div className="alert alert-success mt-3" role="alert">
                  Successfully logged in! Redirecting to home...
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;*/


/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {


  const [formObj, setFormObj] = useState({ userId: "", password: "", userType: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formObj);

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      console.log(resp);
      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
        console.log("Successfully logged in");
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn("Invalid userId or password");
      }
    } catch (error) {
      console.log("Error while logging in");
      console.log(error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  const Error = () => (
    <div className="alert alert-danger" role="alert">
      {errorLoggingIn}
    </div>
  );

  return (
    <div className="login-page">
    <div className="background-image"></div>
    <Container className="login-container"/>
      <Row className="justify-content-md-center"/>
        <Col md={6}/>
          <div className="login-card p-4 shadow-sm rounded">
            <h2 className="text-center mb-4">Login</h2>

   
          <form onSubmit={handleSubmit}>
            {errorLoggingIn && <Error />}
            <div className="mb-3">
              <label htmlFor="userId" className="form-label text-dark">
                UserId
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="userId"
                name="userId"
                value={formObj.userId}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label text-dark">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-sm"
                id="password"
                name="password"
                value={formObj.password}
                onChange={changeHandler}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="userType" className="form-label text-dark">
                User Type
              </label>
              <select
                className="form-control form-control-sm"
                id="userType"
                name="userType"
                value={formObj.userType}
                onChange={changeHandler}
              >
                <option value="">Select User Type</option>
                <option value="caregiver">Care Taker</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button type="submit" className="mt-3 text-light bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg text-s px-4 py-2.5 text-center inline-flex items-center me-2 mb-2">
              Submit
            </button>
            {formObj.userType === 'caregiver' && (
              <div className="mt-3 text-center">
                <span>New user? </span>
                <Link className='text-primary' to="/signup">Register here</Link>
              </div>
            )}
          </form>
          {loggedIn && <div className="alert alert-success mt-3">Successfully logged in! Redirecting to home...</div>}
        </div>
      </div>
   
  
  );
};

export default Login;*/
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [formObj, setFormObj] = useState({ userId: "", password: "", userType: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn(resp.data.message || "Invalid userId or password");
      }
    } catch (error) {
      console.error("Error while logging in", error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };
  Login.propTypes = {
    setIsLoggedIn: PropTypes.func.isRequired,
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Login</h2>

              {errorLoggingIn && <Alert variant="danger">{errorLoggingIn}</Alert>}
              

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label text-dark">
                    UserId
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="userId"
                    name="userId"
                    value={formObj.userId}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label text-dark">
                    User Type
                  </label>
                  <select
                    className="form-control form-control-sm"
                    id="userType"
                    name="userType"
                    value={formObj.userType}
                    onChange={changeHandler}
                  >
                    <option value="">Select User Type</option>
                    <option value="caregiver">Care Taker</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>

                {formObj.userType === 'caregiver' && (
                  <div className="mt-3 text-center">
                    <span>New user? </span>
                    <Link className='text-primary' to="/signup">Register here</Link>
                  </div>
                )}
              </form>

              {loggedIn && (
                <div className="alert alert-success mt-3" role="alert">
                  Successfully logged in! Redirecting to home...
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;*/
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [formObj, setFormObj] = useState({ userId: "", password: "", userType: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [errorLoggingIn, setErrorLoggingIn] = useState('');
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormObj({ ...formObj, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post('http://localhost:8080/api/login', { ...formObj });
      if (resp.data.success) {
        setLoggedIn(true);
        setErrorLoggingIn('');
        sessionStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);

        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setLoggedIn(false);
        setErrorLoggingIn(resp.data.message || "Invalid userId or password");
      }
    } catch (error) {
      console.error("Error while logging in", error);
      setLoggedIn(false);
      setErrorLoggingIn("Error while logging in");
    }
  };

  return (
    <div className="login-page">
      <div className="background-image"></div>
      <Container className="login-container">
        <Row className="justify-content-md-center">
          <Col md={6}>
            <div className="login-card p-4 shadow-sm rounded">
              <h2 className="text-center mb-4">Login</h2>

              {errorLoggingIn && <Alert variant="danger">{errorLoggingIn}</Alert>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="userId" className="form-label text-dark">
                    UserId
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="userId"
                    name="userId"
                    value={formObj.userId}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label text-dark">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control form-control-sm"
                    id="password"
                    name="password"
                    value={formObj.password}
                    onChange={changeHandler}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userType" className="form-label text-dark">
                    User Type
                  </label>
                  <select
                    className="form-control form-control-sm"
                    id="userType"
                    name="userType"
                    value={formObj.userType}
                    onChange={changeHandler}
                  >
                    <option value="">Select User Type</option>
                    <option value="caregiver">Care Taker</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary mt-3">
                  Submit
                </button>

                {formObj.userType === 'caregiver' && (
                  <div className="mt-3 text-center">
                    <span>New user? </span>
                    <Link className='text-primary' to="/signup">Register here</Link>
                  </div>
                )}
              </form>

              {loggedIn && (
                <div className="alert alert-success mt-3" role="alert">
                  Successfully logged in! Redirecting to home...
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;



