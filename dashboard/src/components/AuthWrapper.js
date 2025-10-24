// dashboard/src/components/AuthWrapper.js

import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthWrapper = ({ children }) => {
  // 1. लोकल स्टोरेज से टोकन प्राप्त करें
  const token = localStorage.getItem('authToken'); 

  // 2. यदि टोकन नहीं है, तो लॉगिन पेज पर भेजें
  if (!token) {

    window.location.href = 'http://localhost:3000/login';
    return null; // रीडायरेक्ट होने तक कुछ भी न दिखाएँ
  }

  // 3. यदि टोकन है, तो डैशबोर्ड दिखाएँ
  return <>{children}</>;
};

export default AuthWrapper;