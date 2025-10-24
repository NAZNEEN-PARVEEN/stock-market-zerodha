// dashboard/src/components/AuthWrapper.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
 
  const token = localStorage.getItem('authToken'); 

  
  if (!token) {

    window.location.href = 'https://stock-market-zerodha.onrender.com/login';
    return null; 
  }

  
  return <>{children}</>;
};

export default AuthWrapper;