export function normalizeBookingSlots(slots: TimeSlot[]): NormalizedSchedule {
  if (slots.length === 0) return [];

  // Convert strings to Date and sort by start time
  const sortedSlots = [...slots].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
  );

  const result: TimeSlot[] = [];

  let current = {
    start: sortedSlots[0].start,
    end: sortedSlots[0].end,
  };

  for (let i = 1; i < sortedSlots.length; i++) {
    const next = sortedSlots[i];

    const currentEnd = new Date(current.end).getTime();
    const nextStart = new Date(next.start).getTime();
    const nextEnd = new Date(next.end).getTime();

    // If next.start <= current.end → merge
    if (nextStart <= currentEnd) {
      current.end = new Date(Math.max(currentEnd, nextEnd)).toISOString();
    } else {
      // Push current and move to next
      result.push({ ...current });
      current = { ...next };
    }
  }

  result.push(current);
  return result;
}

const input: TimeSlot[] = [
  { start: "2025-07-09T09:00:00", end: "2025-07-09T10:30:00" },
  { start: "2025-07-09T10:15:00", end: "2025-07-09T11:00:00" },
  { start: "2025-07-09T12:00:00", end: "2025-07-09T13:00:00" },
];

console.log(normalizeBookingSlots(input));
