import React, { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import Login from "../../pages/signup/Login";

export default function MainRouter() {
  const isLogin = true;
  return (
    <Routes>
      {isLogin ? (
        <Route path="/*" element={<AppRouter />} />
      ) : (
        <Fragment>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Fragment>
      )}
    </Routes>
  );
}
