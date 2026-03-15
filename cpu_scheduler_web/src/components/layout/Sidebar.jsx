import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Cpu,
  Clock,
  Shuffle,
  Layers,
  Activity,
  X
} from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {/* BACKDROP (mobile) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside
        className={`fixed lg:static z-40 top-0 left-0 h-screen w-[260px] bg-white text-gray-700 flex flex-col border-r border-gray-200 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <NavLink to="/" className="flex items-center gap-3">
            <Cpu className="text-indigo-600" size={24} />
            <h1 className="font-bold text-lg text-gray-800">
              CPU Scheduler
            </h1>
          </NavLink>

          {/* CLOSE BUTTON (mobile) */}
          <button onClick={toggleSidebar} className="lg:hidden">
            <X size={20} />
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">

          <p className="text-xs uppercase text-gray-400 px-2">
            Navigation
          </p>

          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                isActive
                  ? "bg-gray-200 font-semibold"
                  : "hover:bg-gray-100"
              }`
            }
          >
            <Home size={18} />
            Dashboard
          </NavLink>

          <p className="text-xs uppercase text-gray-400 px-2 mt-4">
            Scheduling Algorithms
          </p>

          <NavLink
            to="/fcfs"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <Clock size={18} />
            FCFS
          </NavLink>

          <NavLink
            to="/sjf"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <Layers size={18} />
            SJF
          </NavLink>

          <NavLink
            to="/priority"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <Activity size={18} />
            Priority Scheduling
          </NavLink>

          <NavLink
            to="/round-robin"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <Shuffle size={18} />
            Round Robin
          </NavLink>

          <NavLink
            to="/ai-detector"
            className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100"
          >
            <Shuffle size={18} />
            AI Detector
          </NavLink>
        </nav>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-gray-200 text-xs text-gray-400">
          CPU Scheduler Visualizer © 2026
        </div>
      </aside>
    </>
  );
};

export default Sidebar;