import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTable,
  FaFileInvoiceDollar,
  FaSignInAlt,
  FaRProject,
  FaBars,
} from "react-icons/fa";
import LogoutButton from "../../pages/logout";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);

  const navItems = [
    { id: "1", title: "Dashboard", icon: <FaTachometerAlt />, route: "/" },
    { id: "2", title: "Orders", icon: <FaTable />, route: "/Teams" },
    { id: "3", title: "Product", icon: <FaRProject />, route: "/Projects" },
    {
      id: "4",
      title: "Billing",
      icon: <FaFileInvoiceDollar />,
      route: "/billing",
    },
  ];

  const accountItem = {
    id: "5",
    title: "Log Out",
    icon: <FaSignInAlt />,
    route: "/logout",
  };

  const renderNavItem = (item) => (
    <div
      key={item.id}
      onClick={() => navigate(item.route)}
      className={`flex items-center gap-3 px-4 py-2 mb-2 rounded-lg cursor-pointer transition-all duration-200 ${
        location.pathname === item.route
          ? "bg-blue-600 text-white"
          : "hover:bg-blue-900 text-gray-300"
      }`}
    >
      <div className="text-lg min-w-[24px]">{item.icon}</div>
      <span
        className={`text-sm transition-all duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        {item.title}
      </span>
    </div>
  );

  return (
    <div
      className={`${
        isOpen ? "w-64" : "w-20"
      } h-screen bg-gradient-to-b from-[#0f172a] to-[#1e293b] p-4 text-white transition-all duration-300 overflow-hidden`}
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
          VL Hypermarket
        </h1>
      )}

      <div className="mb-8">{navItems.map(renderNavItem)}</div>

      {isOpen && (
        <h2 className="text-xs font-semibold text-gray-500 mb-2 ml-4">
          ACCOUNT PAGES
        </h2>
      )}
      {isOpen && (
        <div className="text-xs font-semiboldmb-2 ml-4">
          <LogoutButton />
        </div>
      )}
      {/* <div className="relative mt-10 rounded-2xl overflow-hidden">
        <img src={img} alt="Help" className="w-full h-auto object-cover" />
        <div className="absolute top-4 left-4 text-white">
          {isOpen && (
            <>
              <div className="mb-3">
                <img src={img1} alt="" />
              </div>
              <h2 className="text-lg font-semibold">Need help?</h2>
              <p className="text-sm">Please check our docs</p>
            </>
          )}
        </div>

        {isOpen && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <button className="bg-gradient-to-b from-[#0f172a] to-[#1e293b] text-white font-bold text-xs px-6 py-2 rounded-full shadow-md w-full">
              DOCUMENTATION
            </button>
          </div>
        )}
      </div> */}
    </div>
  );
}
