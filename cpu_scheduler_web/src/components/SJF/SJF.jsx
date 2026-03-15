import { useState } from "react";
import { sjfScheduling } from "./SJFalgorithm";
import GanttChart from "../GanttChart";

export default function SJF() {

  const [processes, setProcesses] = useState([
    { id: "P1", arrival: 0, burst: 5 }
  ]);

  const [result, setResult] = useState(null);

  const addProcess = () => {

    const newProcess = {
      id: `P${processes.length + 1}`,
      arrival: "",
      burst: ""
    };

    setProcesses([...processes, newProcess]);
  };

  const updateProcess = (index, field, value) => {

    const updated = [...processes];

    updated[index][field] = value === "" ? "" : Number(value);

    setProcesses(updated);

  };

  const runSJF = () => {

    const cleanedProcesses = processes.map(p => ({
      ...p,
      arrival: Number(p.arrival) || 0,
      burst: Number(p.burst) || 0
    }));

    const output = sjfScheduling(cleanedProcesses);

    setResult(output);

  };

  return (

    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* HEADER */}

      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow mb-8">

        <h1 className="text-3xl font-bold mb-2">
          SJF Scheduling Visualizer
        </h1>

        <p className="text-sm md:text-base">

          <b>Shortest Job First (SJF)</b> selects the process with the
          smallest burst time from the ready queue. It minimizes the
          average waiting time compared to FCFS.

        </p>

      </div>


      {/* PROCESS INPUT */}

      <div className="bg-white rounded-xl shadow p-6 mb-8 w-full">

        <h2 className="text-xl font-semibold mb-4">
          Process Input
        </h2>

        <div className="overflow-x-auto">

          <table className="w-full border border-gray-200">

            <thead className="bg-gray-100">

              <tr>
                <th className="p-3 border">Process</th>
                <th className="p-3 border">Arrival Time</th>
                <th className="p-3 border">Burst Time</th>
              </tr>

            </thead>

            <tbody>

              {processes.map((p, i) => (

                <tr key={i}>

                  <td className="border p-3 text-center">
                    {p.id}
                  </td>

                  <td className="border p-3">

                    <input
                      type="number"
                      min="0"
                      value={p.arrival ?? ""}
                      onChange={(e) =>
                        updateProcess(i, "arrival", e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />

                  </td>

                  <td className="border p-3">

                    <input
                      type="number"
                      min="1"
                      value={p.burst ?? ""}
                      onChange={(e) =>
                        updateProcess(i, "burst", e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>


        {/* BUTTONS */}

        <div className="flex gap-4 mt-6">

          <button
            onClick={addProcess}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Add Process
          </button>

          <button
            onClick={runSJF}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
          >
            Run SJF
          </button>

        </div>

      </div>


      {/* RESULT */}

      {result && (

        <div className="bg-white shadow rounded-xl p-6 w-full">

          <h2 className="text-xl font-semibold mb-6">
            Result Table
          </h2>


          {/* RESULT TABLE */}

          <div className="overflow-x-auto">

            <table className="w-full border border-gray-200">

              <thead className="bg-gray-100">

                <tr>
                  <th className="border p-3">Process</th>
                  <th className="border p-3">Arrival</th>
                  <th className="border p-3">Burst</th>
                  <th className="border p-3">Completion</th>
                  <th className="border p-3">Turnaround</th>
                  <th className="border p-3">Waiting</th>
                </tr>

              </thead>

              <tbody>

                {result.table.map((p, i) => (

                  <tr key={i}>

                    <td className="border p-3 text-center">{p.id}</td>
                    <td className="border p-3 text-center">{p.arrival}</td>
                    <td className="border p-3 text-center">{p.burst}</td>
                    <td className="border p-3 text-center">{p.completion}</td>
                    <td className="border p-3 text-center">{p.turnaround}</td>
                    <td className="border p-3 text-center">{p.waiting}</td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* AVERAGES */}

          <div className="mt-8 grid md:grid-cols-2 gap-6">

            <div className="bg-indigo-50 p-5 rounded-lg">

              <h3 className="font-semibold text-gray-700">
                Average Waiting Time
              </h3>

              <p className="text-2xl font-bold text-indigo-600 mt-2">
                {result.avgWaiting.toFixed(2)}
              </p>

            </div>


            <div className="bg-green-50 p-5 rounded-lg">

              <h3 className="font-semibold text-gray-700">
                Average Turnaround Time
              </h3>

              <p className="text-2xl font-bold text-green-600 mt-2">
                {result.avgTurnaround.toFixed(2)}
              </p>

            </div>

          </div>


          {/* GANTT CHART */}

          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-4">
              Gantt Chart
            </h2>

            <GanttChart data={result.gantt} />

          </div>

        </div>

      )}

    </div>
  );
}