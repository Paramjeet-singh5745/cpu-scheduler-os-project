import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SJF from "./components/SJF/SJF";
import Priority from "./components/priority/priority";
import RoundRobin from "./components/round_robin/RoundRobin";
import AIPredictorPage from "./components/ai/AIPredictorPage";
import FCFS from "./components/FCFS/FCFS";

const RoutesConfig = () => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
    
      <Route path="/fcfs" element={<FCFS />} />
            <Route path="/sjf" element={<SJF />} />
            <Route path="/priority" element={<Priority />} />
            <Route path="/round-robin" element={<RoundRobin />} />
            <Route path="/ai-detector" element={<AIPredictorPage />} />
    </Routes>
  );
};

export default RoutesConfig;