import React from "react";
import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const estasautenticado = !!Cookies.get("access_token");
  const rol = Cookies.get('role') 

  console.log(estasautenticado, rol);


  if (estasautenticado && rol === "admins") {
    return element;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRoute


//PARA "MI-PERFIL"
// PrivateRoutes.jsx
/* import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
const PrivateRoutes = ({ children }) => {
  const token = Cookies.get("access_token");
  const rol = Cookies.get("user_role");
  if (!token) return <Navigate to="/Login" />;
  if (rol === "admins") {
    return children;
  } else if (rol === "empleado") {
    return <Navigate to="/empleados" />;
  } else if (rol === "usuario") {
    return <Navigate to="/" />;
  } else {
    return <Navigate to="/Login" />;
  }
};
export default PrivateRoutes; */