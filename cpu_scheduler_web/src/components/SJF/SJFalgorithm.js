export function sjfScheduling(processes) {

  let time = 0
  let completed = 0
  const n = processes.length

  const visited = new Array(n).fill(false)

  const table = []
  const gantt = []

  while (completed < n) {

    let idx = -1
    let minBurst = Infinity

    for (let i = 0; i < n; i++) {

      if (
        processes[i].arrival <= time &&
        !visited[i] &&
        processes[i].burst < minBurst
      ) {
        minBurst = processes[i].burst
        idx = i
      }

    }

    if (idx === -1) {
      time++
      continue
    }

    const p = processes[idx]

    const start = time
    const completion = start + p.burst
    const turnaround = completion - p.arrival
    const waiting = turnaround - p.burst

    table.push({
      id: p.id,
      arrival: p.arrival,
      burst: p.burst,
      completion,
      turnaround,
      waiting
    })

    gantt.push({
      id: p.id,
      start,
      end: completion
    })

    time = completion
    visited[idx] = true
    completed++

  }

  const avgWaiting =
    table.reduce((sum, p) => sum + p.waiting, 0) / n

  const avgTurnaround =
    table.reduce((sum, p) => sum + p.turnaround, 0) / n

  return {
    table,
    gantt,
    avgWaiting,
    avgTurnaround
  }

}