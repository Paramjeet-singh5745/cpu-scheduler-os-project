import { useState } from "react";
import { aiPredictor } from "./aiPredictor";

export default function AIPredictor() {

  const [processes, setProcesses] = useState([
    { id: "P1", arrival: 0, burst: 5 }
  ]);

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

  const runAI = () => {

    const output = aiPredictor(processes);
    setResult(output);

  };

  return (

    <div className="w-full min-h-screen bg-gray-100 p-6">

      {/* HEADER */}

      <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl shadow mb-8">

        <h1 className="text-3xl font-bold mb-2">
          AI Scheduling Predictor
        </h1>

        <p className="text-sm md:text-base">

          This AI module analyzes the process workload and predicts the
          most efficient CPU scheduling algorithm.

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
                <th className="p-3 border">Arrival</th>
                <th className="p-3 border">Burst</th>
              </tr>

            </thead>

            <tbody>

              {processes.map((p, i) => (

                <tr key={i}>

                  <td className="border p-3 text-center">{p.id}</td>

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


        {/* BUTTONS */}

        <div className="flex gap-4 mt-6">

          <button
            onClick={addProcess}
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
          >
            Add Process
          </button>

          <button
            onClick={runAI}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg"
          >
            Run AI Prediction
          </button>

        </div>

      </div>


      {/* RESULT */}

      {result && (

        <div className="bg-white shadow rounded-xl p-6 w-full">

          <h2 className="text-xl font-semibold mb-6">
            AI Recommendation
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-indigo-50 p-6 rounded-lg">

              <h3 className="font-semibold text-gray-700">
                Suggested Algorithm
              </h3>

              <p className="text-2xl font-bold text-indigo-600 mt-2">
                {result.recommendation}
              </p>

            </div>

            <div className="bg-green-50 p-6 rounded-lg">

              <h3 className="font-semibold text-gray-700">
                Reason
              </h3>

              <p className="text-lg mt-2">
                {result.reason}
              </p>

            </div>

          </div>

        </div>

      )}

    </div>

  );
}