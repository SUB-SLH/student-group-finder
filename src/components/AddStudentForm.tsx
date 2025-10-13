import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Student } from "@/types/student";
import { toast } from "sonner";

interface AddStudentFormProps {
  onAddStudent: (student: Student) => void;
}

export const AddStudentForm = ({ onAddStudent }: AddStudentFormProps) => {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [group, setGroup] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !studentClass.trim() || !group.trim()) {
      toast.error("Please fill all fields");
      return;
    }

    onAddStudent({
      name: name.trim(),
      class: studentClass.trim(),
      group: group.trim(),
    });

    setName("");
    setStudentClass("");
    setGroup("");
    
    toast.success("Student added successfully");
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5 text-primary" />
          Add Student
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Student Name</label>
            <Input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Class</label>
            <Input
              type="text"
              placeholder="10A"
              value={studentClass}
              onChange={(e) => setStudentClass(e.target.value)}
              className="border-2"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Group</label>
            <Input
              type="text"
              placeholder="1"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="border-2"
            />
          </div>
          
          <Button type="submit" className="w-full">
            Add Student
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
