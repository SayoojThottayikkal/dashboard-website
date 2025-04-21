import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTable,
  FaFileInvoiceDollar,
  FaSignInAlt,
  FaRProject,
  FaBars, // Toggle Icon
} from "react-icons/fa";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { id: "1", title: "Dashboard", icon: <FaTachometerAlt />, route: "/" },
    { id: "2", title: "Tables", icon: <FaTable />, route: "/Teams" },
    { id: "3", title: "Project", icon: <FaRProject />, route: "/Projects" },
    {
      id: "4",
      title: "Billing",
      icon: <FaFileInvoiceDollar />,
      route: "/billing",
    },
  ];

  const accountItem = {
    id: "5",
    title: "Sign In",
    icon: <FaSignInAlt />,
    route: "/login",
  };

  const renderNavItem = (item) => (
    <div
      key={item.id}
      onClick={() => navigate(item.route)}
      className={`flex items-center gap-3 px-4 py-2 mb-2 rounded-lg cursor-pointer transition-all ${
        location.pathname === item.route
          ? "bg-blue-600 text-white"
          : "hover:bg-blue-900 text-gray-300"
      }`}
    >
      <div className="text-lg">{item.icon}</div>
      {isOpen && <span className="text-sm">{item.title}</span>}
    </div>
  );

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-4 text-white transition-all duration-300`}
    >
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-xl"
        >
          <FaBars />
        </button>
      </div>

      {isOpen && (
        <h1 className="text-xs font-bold text-gray-400 mb-6 ml-4">
          VISION UI FREE
        </h1>
      )}

      <div className="mb-8">{navItems.map(renderNavItem)}</div>

      {isOpen && (
        <h2 className="text-xs font-semibold text-gray-500 mb-2 ml-4">
          ACCOUNT PAGES
        </h2>
      )}
      <div>{renderNavItem(accountItem)}</div>
    </div>
  );
}
