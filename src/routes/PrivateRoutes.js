import React from 'react';
import { Navigate } from 'react-router-dom';
// import { isLogin } from '../services/util/auth';

const PrivateRoutes = ({ children }) => {
  // return isLogin() ? children : <Navigate to="/signin" replace />;
  return children;

};

export default PrivateRoutes;