import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes.js';
import PublicRoutes from './PublicRoutes.js';
import SignIn from '../components/signIn/index.js';
import AdminPanel from '../components/adminPanel/index.js';
import NotFound from '../components/notFound/index.js';

const DirectRoutes = () => {
  return (
    <div>
      <BrowserRouter basename={'app'}>
        <Routes>
          <Route path="/signin" element={<PublicRoutes><SignIn /></PublicRoutes>} />
          
          {/* Company Internal Routes */}
          <Route path="/company/*" element={<PrivateRoutes><AdminPanel /></PrivateRoutes>} >
          </Route>

          {/* 404 error page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default DirectRoutes;