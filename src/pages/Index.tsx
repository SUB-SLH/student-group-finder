import { useState } from "react";
import { StudentSearch } from "@/components/StudentSearch";
import { AddStudentForm } from "@/components/AddStudentForm";
import { StudentList } from "@/components/StudentList";
import { Student } from "@/types/student";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const [students, setStudents] = useState<Student[]>([
    { name: "Alice Johnson", class: "10A", group: "1" },
    { name: "Bob Smith", class: "10A", group: "2" },
    { name: "Charlie Brown", class: "10B", group: "1" },
    { name: "Diana Prince", class: "10B", group: "3" },
    { name: "Edward Norton", class: "11A", group: "2" },
    { name: "Fiona Apple", class: "11A", group: "1" },
  ]);

  const handleAddStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-primary-foreground rounded-2xl mb-4">
            <GraduationCap className="h-8 w-8" />
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Student Group Finder
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Search for students and discover their assigned groups instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Search Students</h2>
                <StudentSearch students={students} />
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Student Database</h2>
                <StudentList students={students} />
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">Manage</h2>
            <AddStudentForm onAddStudent={handleAddStudent} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
