export function aiPredictor(processes) {

  let avgBurst =
    processes.reduce((sum, p) => sum + p.burst, 0) / processes.length;

  let arrivalVariance =
    processes.reduce((sum, p) => sum + Math.pow(p.arrival - processes[0].arrival, 2), 0) /
    processes.length;

  let priorityExists = processes.some(p => p.priority !== undefined);

  let recommendation = "";
  let reason = "";

  if (priorityExists) {

    recommendation = "Priority Scheduling";
    reason = "Processes contain priority values so Priority Scheduling is optimal.";

  }

  else if (avgBurst <= 3) {

    recommendation = "Round Robin";
    reason = "Processes have small burst times, so Round Robin improves responsiveness.";

  }

  else if (arrivalVariance === 0) {

    recommendation = "SJF";
    reason = "All processes arrive together so Shortest Job First minimizes waiting time.";

  }

  else {

    recommendation = "FCFS";
    reason = "Processes arrive at different times and FCFS handles arrival order efficiently.";

  }

  return {
    recommendation,
    reason
  };
}