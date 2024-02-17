import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Authentication/AuthContext'; // Adjust the path as needed to import useAuth

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Call the logout function from useAuth to update state
    navigate('/'); // Redirect to the homepage
  }, [logout, navigate]); // Empty dependency array means this effect runs once on mount

  return null; // Component doesn't need to render anything
};

export default Logout;