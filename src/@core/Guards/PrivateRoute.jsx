import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext.jsx";

const PrivateRoute = ({ allowedRoles, children }) => {
  const roles = JSON.parse(localStorage.getItem("roles"));
  const { user } = useContext(AuthContext);
  if (user === null || user === undefined || user === "") {
    return <Navigate to={"/login"} />;
  } else if (allowedRoles.includes(roles)) {
    return children;
  } else {
    return <Navigate to={"/404"} replace={true} />;
  }
};

export default PrivateRoute;
