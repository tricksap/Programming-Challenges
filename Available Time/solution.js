const availabilities = [
  [
    ["09:00", "10:30"],
    ["12:00", "13:00"],
    ["16:00", "18:00"],
  ], // Participant 1
  [
    ["09:00", "11:30"],
    ["12:30", "14:00"],
    ["14:30", "15:00"],
    ["16:00", "17:00"],
  ], // Participant 2
  [
    ["10:00", "11:00"],
    ["12:30", "14:30"],
    ["14:30", "15:30"],
    ["16:00", "17:30"],
  ], // Participant 3
];

const meeting_duration = 30;

function findMeetingTimes(availabilities, meeting_duration) {
  let commonAvailabilities = availabilities[0];
  const meetingInMinutes = meeting_duration;

  for (let i = 1; i < availabilities.length; i++) {
    const currentParticipants = availabilities[i];
    let tempResult = [];
    for (const slot1 of commonAvailabilities) {
      for (const slot2 of currentParticipants) {
        const overlap = FindOverlap(slot1, slot2);
        if (overlap) {
          const overlapDuration =
            convertTimeToMinutes(overlap[1]) - convertTimeToMinutes(overlap[0]);
          if (overlapDuration >= meetingInMinutes) {
            tempResult.push(overlap);
          }
        }
      }
    }
    commonAvailabilities = tempResult;
  }
  return commonAvailabilities;
}

function convertTimeToMinutes(time) {
  const hours = time.split(":")[0];
  const minutes = time.split(":")[1];
  const hoursInMinutes = 60;
  return Number(hours) * hoursInMinutes + Number(minutes);
}

function convertMinutesToTime(minutes) {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
}

function FindOverlap(Slot1, Slot2) {
  const start = Math.max(
    convertTimeToMinutes(Slot1[0]),
    convertTimeToMinutes(Slot2[0])
  );
  const end = Math.min(
    convertTimeToMinutes(Slot1[1]),
    convertTimeToMinutes(Slot2[1])
  );
  return end > start
    ? [convertMinutesToTime(start), convertMinutesToTime(end)]
    : null;
}

console.log(findMeetingTimes(availabilities, meeting_duration));
