import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import { isLogin, logout } from '../services/util/auth';

const PublicRoutes = ({ children, restricted }) => {
  const location = useLocation(); // Use the useLocation hook to get the current location

  // if (location.pathname === '/cost-calculator') {
  //   return children;
  // } else if (isLogin()) {
  //   logout();
  //   return <Navigate to="/signin" replace />;
  // }
  // else{
    return children;
  // }
};

export default PublicRoutes;