import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Login } from '../Login';
import { Signup } from '../Signup';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* Redirect to login by default */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      {/* Catch all - redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
