import { useState } from "react";
import { roundRobinScheduling } from "./roundRobinAlgorithm";
import GanttChart from "../GanttChart";
import ReadyQueueGantt from "./ReadyQueueGantt";

export default function RoundRobin() {

  const [processes, setProcesses] = useState([
    { id: "P1", arrival: 0, burst: 5 }
  ]);

  const [quantum, setQuantum] = useState(2);

  const [result, setResult] = useState(null);

  const addProcess = () => {

    const newProcess = {
      id: `P${processes.length + 1}`,
      arrival: 0,
      burst: 1
    };

    setProcesses([...processes, newProcess]);
  };

  const updateProcess = (index, field, value) => {

    const updated = [...processes];
    updated[index][field] = Number(value);
    setProcesses(updated);

  };

  const runRR = () => {

    const output = roundRobinScheduling(processes, quantum);
    setResult(output);

  };

  return (

    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* HEADER */}

      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow mb-8">

        <h1 className="text-3xl font-bold mb-2">
          Round Robin Scheduling Visualizer
        </h1>

        <p className="text-sm md:text-base">

          <b>Round Robin (RR)</b> scheduling gives each process a fixed time
          quantum. After the quantum expires, the process goes back to the
          ready queue until it finishes execution.

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
                      value={p.arrival}
                      onChange={(e) =>
                        updateProcess(i, "arrival", e.target.value)
                      }
                      className="w-full border rounded p-2"
                    />

                  </td>

                  <td className="border p-3">

                    <input
                      type="number"
                      value={p.burst}
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


        {/* QUANTUM INPUT */}

        <div className="mt-4">

          <label className="font-semibold mr-3">
            Time Quantum
          </label>

          <input
            type="number"
            value={quantum}
            onChange={(e) => setQuantum(Number(e.target.value))}
            className="border rounded p-2 w-24"
          />

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
            onClick={runRR}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
          >
            Run Round Robin
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


          {/* CPU GANTT */}

          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-4">
              CPU Running State
            </h2>

            <GanttChart data={result.gantt} />

          </div>


          {/* READY QUEUE */}

          <div className="mt-10">

            <h2 className="text-xl font-semibold mb-4">
              Ready Queue State
            </h2>

            <ReadyQueueGantt data={result.ready} />

          </div>

        </div>

      )}

    </div>

  );
}