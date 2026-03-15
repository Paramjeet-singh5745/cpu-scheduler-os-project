export function priorityScheduling(processes) {

  // clone array
  let procs = processes.map(p => ({ ...p }));

  // sort by arrival time
  procs.sort((a, b) => a.arrival - b.arrival);

  let currentTime = 0;
  let completed = [];
  let gantt = [];

  let remaining = [...procs];

  while (remaining.length > 0) {

    // processes that arrived
    let available = remaining.filter(p => p.arrival <= currentTime);

    if (available.length === 0) {
      currentTime++;
      continue;
    }

    // highest priority (smaller number = higher priority)
    available.sort((a, b) => a.priority - b.priority);

    let process = available[0];

    let start = currentTime;
    let finish = start + process.burst;

    process.completion = finish;
    process.turnaround = finish - process.arrival;
    process.waiting = process.turnaround - process.burst;

    gantt.push({
      id: process.id,
      start: start,
      end: finish
    });

    currentTime = finish;

    completed.push(process);

    remaining = remaining.filter(p => p.id !== process.id);
  }

  const avgWaiting =
    completed.reduce((sum, p) => sum + p.waiting, 0) / completed.length;

  const avgTurnaround =
    completed.reduce((sum, p) => sum + p.turnaround, 0) / completed.length;

  // return format SAME as FCFS
  return {
    table: completed,
    gantt: gantt,
    avgWaiting: avgWaiting,
    avgTurnaround: avgTurnaround
  };
}