export default function ReadyQueueGantt({ data }) {

  if (!data) return null;

  return (

    <div className="mt-8">

      <h2 className="text-xl font-semibold mb-4">
        Ready Queue State
      </h2>

      <table className="w-full border text-center">

        <thead className="bg-gray-100">
          <tr>
            <th className="border p-3">Time</th>
            <th className="border p-3">Ready Queue</th>
          </tr>
        </thead>

        <tbody>

          {data.map((r, i) => (

            <tr key={i}>
              <td className="border p-3">{r.time}</td>
              <td className="border p-3">
                {r.queue.length ? r.queue.join(" , ") : "Empty"}
              </td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );
}