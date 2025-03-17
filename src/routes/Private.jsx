import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Private=()=>{
  const isAuthenticated = localStorage.getItem('accessToken');
  console.log(isAuthenticated)
  return isAuthenticated ? <Outlet /> : <Navigate to="/home" replace />;
}
export default Private