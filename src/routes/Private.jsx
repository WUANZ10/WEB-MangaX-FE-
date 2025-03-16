import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Private=()=>{
  const isAuthenticated = localStorage.getItem('accessToken');

  return isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
}
export default Private