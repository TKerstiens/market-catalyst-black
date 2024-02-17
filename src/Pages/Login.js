import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext'; // Adjust the path as needed to import useAuth

const Login = () => {
  const { isLoggedIn, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/'); // Redirect to the homepage if already logged in
    }
  }, [isLoggedIn, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication here (e.g., check credentials)
    login(); // Update login state on successful authentication
  };

  return (
    <button type="button" onClick={handleSubmit}>Login</button>
  );
};

export default Login;