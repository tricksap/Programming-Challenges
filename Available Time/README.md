## Problem: Meeting Scheduler

You are tasked with building a simple meeting scheduler to help people find a common time slot for a meeting. Given the availability of each participant in the form of time intervals, your job is to find a time slot where all participants can meet.

### Problem Requirements:

Each participant’s availability is represented as an array of time intervals, where each time interval is represented as a tuple `[start, end]`. Both start and end are given in 24-hour format (e.g., `["09:00", "11:00"]`).

The function should take two parameters:

- **availabilities**: An array of arrays. Each sub-array contains the time intervals of a participant's availability.
- **meeting_duration**: The duration of the meeting in minutes (e.g., 30 for a 30-minute meeting).

The function should return an array with the possible time intervals where all participants are available for the meeting, considering the meeting_duration. If no such time exists, return an empty array.

### Function Signature:

```javascript
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
    // Your code here
}
```



### Constraints:
- Time intervals will not overlap within a single participant's availability.
- The time is given in 24-hour format in "HH:MM".
- The duration of the meeting will always be a positive integer less than or equal to 60.
- You may assume all participants are in the same time zone
