import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Student } from "@/types/student";

interface StudentSearchProps {
  students: Student[];
}

export const StudentSearch = ({ students }: StudentSearchProps) => {
  const [searchName, setSearchName] = useState("");
  const [searchClass, setSearchClass] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filteredSuggestions = useMemo(() => {
    if (!searchName.trim()) return [];
    
    return students.filter(student => 
      student.name.toLowerCase().includes(searchName.toLowerCase()) &&
      (!searchClass || student.class.toLowerCase().includes(searchClass.toLowerCase()))
    );
  }, [searchName, searchClass, students]);

  const exactMatch = useMemo(() => {
    return students.find(student => 
      student.name.toLowerCase() === searchName.toLowerCase() &&
      (!searchClass || student.class.toLowerCase() === searchClass.toLowerCase())
    );
  }, [searchName, searchClass, students]);

  const handleSelectStudent = (student: Student) => {
    setSearchName(student.name);
    setSearchClass(student.class);
    setShowSuggestions(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <div className="relative space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Enter student name..."
            value={searchName}
            onChange={(e) => {
              setSearchName(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            className="pl-10 h-12 text-base bg-card border-2 transition-all duration-200 focus:border-primary"
          />
        </div>
        
        <Input
          type="text"
          placeholder="Enter class (optional)..."
          value={searchClass}
          onChange={(e) => setSearchClass(e.target.value)}
          className="h-12 text-base bg-card border-2 transition-all duration-200 focus:border-primary"
        />

        {showSuggestions && searchName && filteredSuggestions.length > 0 && (
          <Card className="absolute z-50 w-full mt-1 shadow-lg border-2 max-h-64 overflow-auto">
            <CardContent className="p-0">
              {filteredSuggestions.map((student, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectStudent(student)}
                  className="w-full text-left px-4 py-3 hover:bg-accent transition-colors border-b last:border-b-0 flex justify-between items-center"
                >
                  <div>
                    <div className="font-medium text-foreground">{student.name}</div>
                    <div className="text-sm text-muted-foreground">Class: {student.class}</div>
                  </div>
                  <div className="text-sm font-medium text-primary">Group {student.group}</div>
                </button>
              ))}
            </CardContent>
          </Card>
        )}
      </div>

      {exactMatch && (
        <Card className="bg-gradient-to-br from-primary/5 to-accent border-2 border-primary/20">
          <CardContent className="p-6">
            <div className="text-center space-y-2">
              <div className="text-sm font-medium text-muted-foreground">Student Found</div>
              <div className="text-2xl font-bold text-foreground">{exactMatch.name}</div>
              <div className="text-sm text-muted-foreground">Class: {exactMatch.class}</div>
              <div className="mt-4 inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold text-lg">
                Group {exactMatch.group}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {searchName && !exactMatch && !showSuggestions && (
        <Card className="bg-muted/50 border-2 border-dashed">
          <CardContent className="p-6 text-center text-muted-foreground">
            No exact match found. Try selecting from suggestions above.
          </CardContent>
        </Card>
      )}
    </div>
  );
};
