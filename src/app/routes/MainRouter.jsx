import React, { Fragment, useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import Login from "../../pages/signup/Login";
import { Context } from "../context/store";

export default function MainRouter() {
  const {
    state: { user_data },
  } = useContext(Context);

  const isLogin = user_data.userDetails?.isLogin;

  return (
    <Routes>
      {isLogin ? (
        <Route path="/*" element={<AppRouter />} />
      ) : (
        <Fragment>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Fragment>
      )}
    </Routes>
  );
}
