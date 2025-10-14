import { ScheduleSession } from "@/types/schedule";

// Generate schedules for multiple weeks
const weeks = ["14-oct", "21-oct", "28-oct", "4-nov"];
const classes = ["MPSI 1", "MPSI2", "MPSI3"];
const groups = ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8"];
const rooms = ["Salle A1", "Salle A2", "Salle B1", "Salle B2", "Salle C1", "Salle C2", "Salle D1", "Salle D2"];

const mathTeachers = ["M1", "M2", "M3"];
const physicsTeachers = ["P1", "P2", "P3"];
const frenchTeachers = ["F1", "F2", "F3"];

const teacherNames: { [key: string]: string } = {
  M1: "Prof. BENALI Ahmed",
  M2: "Prof. TAZI Fatima",
  M3: "Prof. ALAOUI Hassan",
  P1: "Prof. IDRISSI Malika",
  P2: "Prof. CHAKIR Youssef",
  P3: "Prof. SENHAJI Amina",
  F1: "Prof. BERRADA Nadia",
  F2: "Prof. MANSOURI Rachid",
  F3: "Prof. LAHLOU Samira",
  E1: "Prof. ELMOUDEN Karim",
  T1: "Prof. FASSI Laila",
};

const subjects: { [key: string]: string } = {
  M1: "Mathematics", M2: "Mathematics", M3: "Mathematics",
  P1: "Physics", P2: "Physics", P3: "Physics",
  F1: "French", F2: "French", F3: "French",
  E1: "English", T1: "Translation",
};

export const schedules: ScheduleSession[] = [];
let sessionId = 1;

// Generate schedules
weeks.forEach((week) => {
  classes.forEach((className) => {
    groups.forEach((group, groupIdx) => {
      // Assign teachers cyclically
      const mathTeacher = mathTeachers[groupIdx % mathTeachers.length];
      const physicsTeacher = physicsTeachers[groupIdx % physicsTeachers.length];
      const frenchTeacher = frenchTeachers[groupIdx % frenchTeachers.length];
      
      // Wednesday sessions
      const wedMathTime = groupIdx % 2 === 0 ? "12:00" : "13:00";
      const wedPhysicsTime = groupIdx % 2 === 0 ? "12:00" : "13:00";
      
      schedules.push({
        id: `S${sessionId++}`,
        teacherId: mathTeacher,
        teacherName: teacherNames[mathTeacher],
        subject: subjects[mathTeacher],
        class: className,
        group: group,
        day: "Wednesday",
        time: wedMathTime,
        room: rooms[groupIdx % rooms.length],
        week: week,
      });
      
      schedules.push({
        id: `S${sessionId++}`,
        teacherId: physicsTeacher,
        teacherName: teacherNames[physicsTeacher],
        subject: subjects[physicsTeacher],
        class: className,
        group: group,
        day: "Wednesday",
        time: wedPhysicsTime === "12:00" ? "13:00" : "12:00",
        room: rooms[(groupIdx + 1) % rooms.length],
        week: week,
      });
      
      // Thursday sessions
      const thuFrenchTime = groupIdx % 2 === 0 ? "12:00" : "13:00";
      
      schedules.push({
        id: `S${sessionId++}`,
        teacherId: frenchTeacher,
        teacherName: teacherNames[frenchTeacher],
        subject: subjects[frenchTeacher],
        class: className,
        group: group,
        day: "Thursday",
        time: thuFrenchTime,
        room: rooms[(groupIdx + 2) % rooms.length],
        week: week,
      });
      
      // Friday sessions - English and Translation
      const friTime = groupIdx % 2 === 0 ? "13:00" : "14:00";
      
      schedules.push({
        id: `S${sessionId++}`,
        teacherId: "E1",
        teacherName: teacherNames.E1,
        subject: subjects.E1,
        class: className,
        group: group,
        day: "Friday",
        time: friTime,
        room: rooms[(groupIdx + 3) % rooms.length],
        week: week,
      });
      
      schedules.push({
        id: `S${sessionId++}`,
        teacherId: "T1",
        teacherName: teacherNames.T1,
        subject: subjects.T1,
        class: className,
        group: group,
        day: "Friday",
        time: friTime === "13:00" ? "14:00" : "13:00",
        room: rooms[(groupIdx + 4) % rooms.length],
        week: week,
      });
    });
  });
});
