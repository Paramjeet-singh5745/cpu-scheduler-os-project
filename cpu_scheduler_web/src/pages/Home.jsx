import React from "react";
import { Link } from "react-router-dom"; // <-- Import Link
import {
  Cpu,
  Clock,
  Layers,
  Repeat,
  Zap,
  Brain
} from "lucide-react";

// CPU Scheduling + AI Detector
const schedulingAlgorithms = [
  {
    name: "First Come First Serve",
    short: "FCFS",
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
    path: "/fcfs", // <-- add route path
  },
  {
    name: "Shortest Job First",
    short: "SJF",
    icon: Zap,
    color: "from-green-500 to-emerald-500",
    path: "/sjf",
  },
  {
    name: "Priority Scheduling",
    short: "Priority",
    icon: Layers,
    color: "from-orange-500 to-amber-500",
    path: "/priority",
  },
  {
    name: "Round Robin",
    short: "RR",
    icon: Repeat,
    color: "from-indigo-500 to-violet-500",
    path: "/round-robin",
  },
  {
    name: "AI Detector",
    short: "AI",
    icon: Brain,
    color: "from-red-500 to-pink-500",
    path: "/ai-detector",
  },
];

const features = [
  "📊 Visual Gantt Chart",
  "⚡ Real-time Scheduling Simulation",
  "🎮 Interactive Process Input",
  "📈 Waiting & Turnaround Time Calculation",
  "🎯 Step-by-step execution",
  "💻 Built using React + Tailwind",
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* HERO */}
        <section className="mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 flex items-center gap-3">
            <Cpu size={42}/> CPU Scheduling & AI Detector
          </h1>
          <p className="text-gray-600 max-w-3xl text-base sm:text-lg leading-relaxed">
            Explore how operating systems schedule CPU processes and use the AI Detector to analyze content. Interactive visualizations and step-by-step simulations make learning easy.
          </p>
        </section>

        {/* SCHEDULING ALGORITHMS + AI */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            ⚙️ CPU Scheduling Algorithms & AI Tool
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {schedulingAlgorithms.map((algo, index) => {
              const Icon = algo.icon;

              return (
                <Link key={index} to={algo.path}>
                  <div className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${algo.color} opacity-90`}
                    />
                    <div className="relative p-6 text-white">
                      <Icon size={34} className="mb-4 opacity-90"/>
                      <h3 className="text-lg sm:text-xl font-semibold">{algo.name}</h3>
                      <p className="text-sm mt-1 opacity-90">{algo.short}</p>
                      <p className="text-sm mt-2 opacity-90">Visualize or analyze</p>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FEATURES */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6">
            ✨ Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-gray-700"
              >
                {feature}
              </div>
            ))}
          </div>
        </section>

        {/* HOW TO USE */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-sm mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            🚀 How to Use
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            Click any CPU scheduling algorithm to simulate process execution, or select AI Detector to analyze content. Enter required data, then view animated execution, Gantt charts, and results for each operation.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-gray-500 text-sm">
          CPU Scheduling & AI Detector © 2026
        </footer>
      </div>
    </div>
  );
};

export default Home;