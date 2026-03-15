export function roundRobinScheduling(processes, quantum) {

  const proc = processes.map(p => ({
    ...p,
    remaining: p.burst
  }));

  let time = 0;
  const queue = [];
  const gantt = [];
  const readyGantt = [];
  const completed = [];

  const processesSorted = [...proc].sort(
    (a, b) => a.arrival - b.arrival
  );

  let i = 0;

  while (completed.length < processes.length) {

    while (
      i < processesSorted.length &&
      processesSorted[i].arrival <= time
    ) {
      queue.push(processesSorted[i]);
      i++;
    }

    if (queue.length === 0) {
      time++;
      continue;
    }

    const current = queue.shift();

    readyGantt.push({
      time,
      queue: queue.map(p => p.id)
    });

    const exec = Math.min(current.remaining, quantum);

    gantt.push({
      id: current.id,
      start: time,
      end: time + exec
    });

    time += exec;
    current.remaining -= exec;

    while (
      i < processesSorted.length &&
      processesSorted[i].arrival <= time
    ) {
      queue.push(processesSorted[i]);
      i++;
    }

    if (current.remaining > 0) {
      queue.push(current);
    } else {

      const completion = time;
      const turnaround = completion - current.arrival;
      const waiting = turnaround - current.burst;

      completed.push({
        id: current.id,
        arrival: current.arrival,
        burst: current.burst,
        completion,
        turnaround,
        waiting
      });

    }

  }

  const avgWaiting =
    completed.reduce((s, p) => s + p.waiting, 0) /
    completed.length;

  const avgTurnaround =
    completed.reduce((s, p) => s + p.turnaround, 0) /
    completed.length;

  return {
    table: completed,
    gantt,
    ready: readyGantt,
    avgWaiting,
    avgTurnaround
  };
}