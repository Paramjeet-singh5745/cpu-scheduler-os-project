const colors = [
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500"
];

export default function GanttChart({ data }) {

  if (!data || data.length === 0) return null;

  return (
    <div className="mt-6">

      {/* Title */}
      <h2 className="font-bold mb-2">Gantt Chart</h2>

      {/* Blocks */}
      <div className="flex">
        {data.map((g, i) => {
          const width = (g.end - g.start) * 60;

          return (
            <div
              key={i}
              className={`${colors[i % colors.length]} text-white flex items-center justify-center border border-black`}
              style={{ width: `${width}px`, height: "50px" }}
            >
              {g.id}
            </div>
          );
        })}
      </div>

      {/* Timeline */}
      <div className="flex text-sm">
        
        {/* First start time */}
        <div style={{ width: "0px" }}>
          {data[0].start}
        </div>

        {data.map((g, i) => {
          const width = (g.end - g.start) * 60;

          return (
            <div
              key={i}
              className="text-right"
              style={{ width: `${width}px` }}
            >
              {g.end}
            </div>
          );
        })}

      </div>

    </div>
  );
}