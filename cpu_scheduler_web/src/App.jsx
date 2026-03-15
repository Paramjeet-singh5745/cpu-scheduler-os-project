
// import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import RoutesConfig from "./routes";

// import Sidebar from "./components/layout/Sidebar";
// import Navbar from "./components/layout/Navbar";

// import "./styles/global.css";

// const App = () => {
//   return (
//     <Router>
//       <div className="app-container">

//         <Sidebar />

//         <div className="main-section">

//           <Navbar />

//           <div className="page-content">
//             <RoutesConfig />
//           </div>

//         </div>

//       </div>
//     </Router>
//   );
// };

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes";

import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";

import "./styles/global.css";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="flex">

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

        <div className="flex flex-col flex-1 min-h-screen">

          {/* Navbar */}
          <Navbar toggleSidebar={toggleSidebar} />

          {/* Page */}
          <div className="p-6 bg-gray-50 flex-1">
            <RoutesConfig />
          </div>

        </div>

      </div>
    </Router>
  );
};

export default App;