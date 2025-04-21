import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import SideBar from "../../components/sidebar";
import Projects from "../../pages/projects";
import Teams from "../../pages/teams";
import Billing from "../../pages/billing/index";
import Login from "../../pages/signup/Login";

export default function AppRouter() {
  return (
    <div className="flex">
      <div className="">
        <SideBar />
      </div>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
