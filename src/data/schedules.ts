import { ScheduleSession } from "@/types/schedule";

// Generate schedules for multiple weeks
const weeks = ["14-oct", "21-oct", "28-oct", "4-nov"];

const teacherNames: { [key: string]: string } = {
  M1: "Prof. BASSO",
  M2: "Prof. HAMANI",
  M3: "Prof. NAJEMEDDINE",
  P1: "Prof. BERAICH",
  P2: "Prof. OULD HAMMOU SEGHIR",
  P3: "Prof. TIGHOUART",
  F1: "Prof. KHADIRI",
  F2: "Prof. FADIL",
  E1: "Prof. BENKIRANE",
  E2: "Prof. BOUCHENTOUF",
  T1: "Prof. EL HOSAINY",
  T2: "Prof. HRAICH",
};

const subjects: { [key: string]: string } = {
  M1: "Mathematics", M2: "Mathematics", M3: "Mathematics",
  P1: "Physics", P2: "Physics", P3: "Physics",
  F1: "French", F2: "French",
  E1: "English", E2: "English",
  T1: "Translation", T2: "Translation",
};

export const schedules: ScheduleSession[] = [];
let sessionId = 1;

// Helper function to rotate group number based on week
const rotateGroup = (baseGroup: number, weekIndex: number): number => {
  const rotated = baseGroup + weekIndex;
  return rotated > 8 ? rotated - 8 : rotated;
};

// MPSI2 Schedule - Based on provided data
weeks.forEach((week, weekIndex) => {
  const className = "MPSI2";
  
  // M1 - Wednesday 12:00 and 13:00 at "salle MPSI 2" - starts with G1, G5
  const m1Wed1Group = rotateGroup(1, weekIndex);
  const m1Wed2Group = rotateGroup(5, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "M1",
    teacherName: teacherNames.M1,
    subject: subjects.M1,
    class: className,
    group: `G${m1Wed1Group}-MPSI2`,
    day: "Wednesday",
    time: "12:00",
    room: "salle MPSI 2",
    week: week,
  });
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "M1",
    teacherName: teacherNames.M1,
    subject: subjects.M1,
    class: className,
    group: `G${m1Wed2Group}-MPSI2`,
    day: "Wednesday",
    time: "13:00",
    room: "salle MPSI 2",
    week: week,
  });

  // P2 - Wednesday 12:00 and 13:00 at "salle 09" - starts with G8, G4
  const p2Wed1Group = rotateGroup(8, weekIndex);
  const p2Wed2Group = rotateGroup(4, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "P2",
    teacherName: teacherNames.P2,
    subject: subjects.P2,
    class: className,
    group: `G${p2Wed1Group}-MPSI2`,
    day: "Wednesday",
    time: "12:00",
    room: "salle 09",
    week: week,
  });
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "P2",
    teacherName: teacherNames.P2,
    subject: subjects.P2,
    class: className,
    group: `G${p2Wed2Group}-MPSI2`,
    day: "Wednesday",
    time: "13:00",
    room: "salle 09",
    week: week,
  });

  // F2 - Wednesday 12:00 at "salle 13" - starts with G7
  const f2WedGroup = rotateGroup(7, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "F2",
    teacherName: teacherNames.F2,
    subject: subjects.F2,
    class: className,
    group: `G${f2WedGroup}-MPSI2`,
    day: "Wednesday",
    time: "12:00",
    room: "salle 13",
    week: week,
  });

  // M1 - Thursday 12:00 at "salle MPSI 1" - starts with G7
  const m1ThuGroup = rotateGroup(7, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "M1",
    teacherName: teacherNames.M1,
    subject: subjects.M1,
    class: className,
    group: `G${m1ThuGroup}-MPSI2`,
    day: "Thursday",
    time: "12:00",
    room: "salle MPSI 1",
    week: week,
  });

  // P1 - Thursday 12:00 at "salle 08" - starts with G6
  const p1ThuGroup = rotateGroup(6, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "P1",
    teacherName: teacherNames.P1,
    subject: subjects.P1,
    class: className,
    group: `G${p1ThuGroup}-MPSI2`,
    day: "Thursday",
    time: "12:00",
    room: "salle 08",
    week: week,
  });

  // M3 - Thursday 12:00 at "salle MPSI 3" - starts with G3
  const m3ThuGroup = rotateGroup(3, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "M3",
    teacherName: teacherNames.M3,
    subject: subjects.M3,
    class: className,
    group: `G${m3ThuGroup}-MPSI2`,
    day: "Thursday",
    time: "12:00",
    room: "salle MPSI 3",
    week: week,
  });

  // F2 - Thursday 12:00 at "salle 13" - starts with G5
  const f2ThuGroup = rotateGroup(5, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "F2",
    teacherName: teacherNames.F2,
    subject: subjects.F2,
    class: className,
    group: `G${f2ThuGroup}-MPSI2`,
    day: "Thursday",
    time: "12:00",
    room: "salle 13",
    week: week,
  });

  // P3 - Thursday 13:00 at "salle 10" - starts with G2
  const p3ThuGroup = rotateGroup(2, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "P3",
    teacherName: teacherNames.P3,
    subject: subjects.P3,
    class: className,
    group: `G${p3ThuGroup}-MPSI2`,
    day: "Thursday",
    time: "13:00",
    room: "salle 10",
    week: week,
  });

  // F1 - Thursday 13:00 at "salle 11" - starts with G1
  const f1ThuGroup = rotateGroup(1, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "F1",
    teacherName: teacherNames.F1,
    subject: subjects.F1,
    class: className,
    group: `G${f1ThuGroup}-MPSI2`,
    day: "Thursday",
    time: "13:00",
    room: "salle 11",
    week: week,
  });

  // E2 - Friday 13:00 and 14:00 at "salle 3" - starts with G8, G4
  const e2Fri1Group = rotateGroup(8, weekIndex);
  const e2Fri2Group = rotateGroup(4, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "E2",
    teacherName: teacherNames.E2,
    subject: subjects.E2,
    class: className,
    group: `G${e2Fri1Group}-MPSI2`,
    day: "Friday",
    time: "13:00",
    room: "salle 3",
    week: week,
  });
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "E2",
    teacherName: teacherNames.E2,
    subject: subjects.E2,
    class: className,
    group: `G${e2Fri2Group}-MPSI2`,
    day: "Friday",
    time: "14:00",
    room: "salle 3",
    week: week,
  });

  // T2 - Friday 15:00 and 16:00 at "A DEF" - starts with G6, G2
  const t2Fri1Group = rotateGroup(6, weekIndex);
  const t2Fri2Group = rotateGroup(2, weekIndex);
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "T2",
    teacherName: teacherNames.T2,
    subject: subjects.T2,
    class: className,
    group: `G${t2Fri1Group}-MPSI2`,
    day: "Friday",
    time: "15:00",
    room: "A DEF",
    week: week,
  });
  schedules.push({
    id: `S${sessionId++}`,
    teacherId: "T2",
    teacherName: teacherNames.T2,
    subject: subjects.T2,
    class: className,
    group: `G${t2Fri2Group}-MPSI2`,
    day: "Friday",
    time: "16:00",
    room: "A DEF",
    week: week,
  });
});

// Placeholder schedules for MPSI 1 and MPSI3 (to be filled with actual data later)
["MPSI 1", "MPSI3"].forEach((className) => {
  weeks.forEach((week) => {
    for (let groupNum = 1; groupNum <= 8; groupNum++) {
      const groupName = `G${groupNum}-${className.replace(" ", "")}`;
      
      // Sample placeholder sessions
      schedules.push({
        id: `S${sessionId++}`,
        teacherId: "M1",
        teacherName: teacherNames.M1,
        subject: subjects.M1,
        class: className,
        group: groupName,
        day: "Wednesday",
        time: "12:00",
        room: "TBD",
        week: week,
      });
    }
  });
});
