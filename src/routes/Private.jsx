<<<<<<< HEAD
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export default function Private() {
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
=======
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Private() {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return isLoggedIn ? <Outlet /> : <Navigate to="/home" replace />;
>>>>>>> master
}
