
/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';// Import BrowserRouter and Routes
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';
import SignUp from './components/SignUp';
import ChatBot from './components/ChatBot';
import Login from './components/Login';
import Reports from './components/Reports';
import AboutUs from './components/AboutUs';
import Admin from './components/Admin';

const App = () => {
  
  return (
    <Router>
      <div className="app-container">
      
        <Header /> 
        
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login  />} />
          <Route path="/form" element={<Form />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>  
          
      </div>
    </Router>
  );
};

export default App;*/
import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { BrowserRouter as Router, Route, Routes,useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form';
import SignUp from './components/SignUp';
import ChatBot from './components/ChatBot';
import Login from './components/Login';
import Reports from './components/Reports';
import AboutUs from './components/AboutUs';
import Admin from './components/Admin';



const App = () => {
  const navigate=useNavigate();
  const [isLoggedIn,setIsLoggedIn]=useState('false');
  useEffect(() => {
    const loginState = sessionStorage.getItem('isLoggedIn');
    if (loginState) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    // assuming you have a navigate function imported from react-router-dom
    navigate('/login');
};
  return (
   
        <div className="app-container">
          <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/form" element={<Form />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chatbot" element={<ChatBot />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
      
  
  );
};

export default App;

