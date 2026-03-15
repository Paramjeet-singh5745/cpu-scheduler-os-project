import React from "react";
import { useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();

  const path = location.pathname
    .split("/")
    .filter(Boolean)
    .join(" / ");

  return (
    <nav className="bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between">

      <div className="flex items-center gap-3">

        {/* HAMBURGER */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded hover:bg-gray-100"
        >
          <Menu size={22} />
        </button>

        <div className="text-gray-700 font-medium text-sm md:text-base">
          Dashboard {path && ` / ${path}`}
        </div>

      </div>

      <div className="text-sm text-gray-500 hidden sm:block">
        CPU Scheduling Visualizer
      </div>

    </nav>
  );
};

export default Navbar;