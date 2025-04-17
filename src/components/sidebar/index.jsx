import React from "react";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();
  const navBars = [
    {
      id: "1",
      title: "Dasboards",
      route: "/",
    },
    {
      id: "1",
      title: "Projects",
      route: "/projects",
    },
    {
      id: "1",
      title: "Teams",
      route: "/teams",
    },
  ];
  return (
    <div className="w-[100px] bg-red-950 h-[100vh] text-white p-3">
      {navBars.map((item, index) => (
        <div
          className="mb-6 cursor-pointer"
          key={index}
          onClick={() => navigate(item.route)}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
}
