import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../Pages/login";
import DashboardPage from "../Pages/dashboard";
import TeachersPage from "../Pages/teachers";
import PrivateRoute from "../@core/Guards/PrivateRoute";
import AuthGuard from "../@core/Guards/AuthGuard.jsx";
import NotFound from "../Pages/404";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={
              <AuthGuard>
                <LoginPage />
              </AuthGuard>
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute
                allowedRoles={["SUPER_ADMIN", "STUDENT", "TEACHER"]}
              >
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute
                allowedRoles={["SUPER_ADMIN", "STUDENT", "TEACHER"]}
              >
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/teachers"
            element={
              <PrivateRoute allowedRoles={["SUPER_ADMIN"]}>
                <TeachersPage />
              </PrivateRoute>
            }
          />
          <Route path="/404" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
