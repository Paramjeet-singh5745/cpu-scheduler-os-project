export function fcfsScheduling(processes) {

  let time = 0

  const sorted = [...processes].sort(
    (a, b) => a.arrival - b.arrival
  )

  const table = []
  const gantt = []

  sorted.forEach((p) => {

    if (time < p.arrival) {
      time = p.arrival
    }

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

  })

  const avgWaiting =
    table.reduce((sum, p) => sum + p.waiting, 0) /
    table.length

  const avgTurnaround =
    table.reduce((sum, p) => sum + p.turnaround, 0) /
    table.length

  return {
    table,
    gantt,
    avgWaiting,
    avgTurnaround
  }
}