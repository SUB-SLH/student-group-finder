import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, MapPin } from "lucide-react";
import { Student } from "@/types/student";
import { schedules } from "@/data/schedules";

interface StudentScheduleProps {
  student: Student;
}

const availableWeeks = ["14-oct", "21-oct", "28-oct", "4-nov"];

export const StudentSchedule = ({ student }: StudentScheduleProps) => {
  const [selectedWeek, setSelectedWeek] = useState<string>(availableWeeks[0]);

  const studentSchedule = schedules.filter(
    (session) =>
      session.class === student.class &&
      session.group === student.group &&
      session.week === selectedWeek
  );

  const sortedSchedule = studentSchedule.sort((a, b) => {
    const dayOrder = { Wednesday: 1, Thursday: 2, Friday: 3 };
    const dayDiff = dayOrder[a.day as keyof typeof dayOrder] - dayOrder[b.day as keyof typeof dayOrder];
    if (dayDiff !== 0) return dayDiff;
    return a.time.localeCompare(b.time);
  });

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Schedule for {student.name}
        </CardTitle>
        <CardDescription>
          Class: {student.class} | Group: {student.group}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Select Week:</h3>
          <div className="flex flex-wrap gap-2">
            {availableWeeks.map((week) => (
              <Button
                key={week}
                variant={selectedWeek === week ? "default" : "outline"}
                onClick={() => setSelectedWeek(week)}
                size="sm"
              >
                Week of {week}
              </Button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {sortedSchedule.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">
              No schedule available for this week
            </p>
          ) : (
            sortedSchedule.map((session) => (
              <Card key={session.id} className="border-l-4 border-l-primary">
                <CardContent className="pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary">{session.subject}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span>{session.teacherName}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{session.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{session.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{session.room}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
};
