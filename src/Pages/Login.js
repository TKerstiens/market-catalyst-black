import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext'; // Adjust the path as needed to import useAuth
import axios from 'axios';

function Login() {
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
  const [errorMessage, setErrorMessage] = useState(''); // State for storing the error message

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action

    try {
      const response = await axios.post(`${platformAPIEndpoint}/user/auth`, {
        username,
        password,
      });

      login(); //response.data
      navigate('/'); // Redirect after successful login
      setErrorMessage(''); // Reset error message state in case of successful login
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Extract and display the error message from the response body
        setErrorMessage(error.response.data.error);
      } else {
        console.error('There was an error with the Axios request:', error);
        setErrorMessage('An unexpected error occurred.'); // Fallback error message
      }
    }
  };

  return (
    <div>
      {errorMessage && <div className="error-box">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
