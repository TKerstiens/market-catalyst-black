import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext'; // Adjust the path as needed to import useAuth
import axios from 'axios';

function Register() {
  const platformAPIEndpoint = process.env.REACT_APP_PLATFORM_API_URL;
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to the homepage if already logged in
    }
  }, [isLoggedIn, navigate]);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmP, setConfirmP] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for storing the error message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action

    try {
      const response = await axios.post(`${platformAPIEndpoint}/user`, {
        username,
        password,
        confirmP
      });

      navigate('/login'); // Redirect after successful login
      setErrorMessage(''); // Reset error message state in case of successful login
    } catch (error) {
      if (error.response && error.response.status === 400) {
        // Extract and display the error message from the response body
        setErrorMessage(error.response.data.error);
      } else {
        console.error('There was an error with the Axios request:', error);
        setErrorMessage('An unexpected error occurred.'); // Fallback error message
      }
    }
  };

  return (
    <div className="container mt-3">
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      
      <form onSubmit={handleSubmit} className="needs-validation" noValidate>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username:</label>
          <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <div className="invalid-feedback">
            Please choose a username.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <div className="invalid-feedback">
            Please enter your password.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="confirmP" className="form-label">Confirm Password:</label>
          <input type="password" className="form-control" id="confirmP" name="confirmP" value={confirmP} onChange={(e) => setConfirmP(e.target.value)} required />
          <div className="invalid-feedback">
            Please confirm your password.
          </div>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
