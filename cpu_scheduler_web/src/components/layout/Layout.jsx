import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col min-h-screen">

        <Navbar toggleSidebar={toggleSidebar} />

        <main className="p-6 bg-gray-50 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
};

export default Layout;