import { useState } from "react";
import { StudentSearch } from "@/components/StudentSearch";
import { AddStudentForm } from "@/components/AddStudentForm";
import { StudentList } from "@/components/StudentList";
import { Student } from "@/types/student";
import { GraduationCap } from "lucide-react";

const Index = () => {
  const [students, setStudents] = useState<Student[]>([
{ name: "ADIB Sami", class: "MPSI 1", group: "G1" },
{ name: "BOULAHMOUZ Mohamed ali", class: "MPSI 1", group: "G1" },
{ name: "BELMAHJOUB Hanae", class: "MPSI 1", group: "G1" },
{ name: "EL ALLAME Karim", class: "MPSI 1", group: "G2" },
{ name: "FARS Rayane", class: "MPSI 1", group: "G2" },
{ name: "EL AZHARI Ilyas", class: "MPSI 1", group: "G2" },
{ name: "AMACHICHOU Hiba", class: "MPSI 1", group: "G3" },
{ name: "BALHA Achraf", class: "MPSI 1", group: "G3" },
{ name: "HACHLAF Mohamed-amine", class: "MPSI 1", group: "G3" },
{ name: "ELAANNOUNI Omar", class: "MPSI 1", group: "G4" },
{ name: "HAMIDI Omar", class: "MPSI 1", group: "G4" },
{ name: "AKHBOUCH Redouane", class: "MPSI 1", group: "G4" },
{ name: "ZAMANI Mohamed", class: "MPSI 1", group: "G5" },
{ name: "TRABELSI Ahmed taha", class: "MPSI 1", group: "G5" },
{ name: "RHANIM Tarik", class: "MPSI 1", group: "G5" },
{ name: "TELHAWI Chahd", class: "MPSI 1", group: "G6" },
{ name: "RAZIKI Chady", class: "MPSI 1", group: "G6" },
{ name: "RARADI Sara", class: "MPSI 1", group: "G6" },
{ name: "KHAYATI Imane", class: "MPSI 1", group: "G7" },
{ name: "OUCHATTI Douae", class: "MPSI 1", group: "G7" },
{ name: "KARIM Ziyad", class: "MPSI 1", group: "G7" },
{ name: "KOUHLANI Ilias", class: "MPSI 1", group: "G8" },
{ name: "SAOUDI Mohammed amine", class: "MPSI 1", group: "G8" },
{ name: "MGOUNI IDRISSI Omar", class: "MPSI 1", group: "G8" },
{ name: "ALAMI Amine", class: "MPSI2", group: "G1" },
{ name: "ABDI Haytham", class: "MPSI2", group: "G1" },
{ name: "ADDADI Rania", class: "MPSI2", group: "G1" },
{ name: "EL BAROUDI Yahya", class: "MPSI2", group: "G2" },
{ name: "FADILI Salah eddine", class: "MPSI2", group: "G2" },
{ name: "ELMAZOUZI Mohammed", class: "MPSI2", group: "G2" },
{ name: "EL MOUNTADAR-ALAOUI Omar", class: "MPSI2", group: "G3" },
{ name: "FLAHY Salmane", class: "MPSI2", group: "G3" },
{ name: "AOUSSAR Amine", class: "MPSI2", group: "G3" },
{ name: "HIKIOUI Chahine", class: "MPSI2", group: "G4" },
{ name: "BENAMAR Mohamed reda", class: "MPSI2", group: "G4" },
{ name: "OUANNANI Hajar", class: "MPSI2", group: "G5" },
{ name: "AZIZ Houda", class: "MPSI2", group: "G5" },
{ name: "KARTIT Chaymae", class: "MPSI2", group: "G5" },
{ name: "LAASRI Mohamed barae", class: "MPSI2", group: "G6" },
{ name: "MOUKHLIS Mohamed yanis", class: "MPSI2", group: "G6" },
{ name: "OUGUZINE Farah", class: "MPSI2", group: "G6" },
{ name: "KHOURACH Ghali", class: "MPSI2", group: "G7" },
{ name: "ZAINOUN Zayd", class: "MPSI2", group: "G7" },
{ name: "ZAOUI Mohammed", class: "MPSI2", group: "G7" },
{ name: "IBN HAQQI Montassir billah", class: "MPSI2", group: "G8" },
{ name: "MOUTAOUKIL Rayan", class: "MPSI2", group: "G8" },
{ name: "KHOMSI Hamza", class: "MPSI3", group: "G1" },
{ name: "BENTAIBI Amir", class: "MPSI3", group: "G1" },
{ name: "EL MAHI Mohyi-eddine", class: "MPSI3", group: "G1" },
{ name: "KHATTABI Abderrahmane", class: "MPSI3", group: "G2" },
{ name: "EL ANSARI Anas", class: "MPSI3", group: "G2" },
{ name: "KHN-NOUS Ahmed", class: "MPSI3", group: "G2" },
{ name: "ABY Aya", class: "MPSI3", group: "G3" },
{ name: "HOSSINI Adam", class: "MPSI3", group: "G3" },
{ name: "EL HOUADI Mohamed youssef", class: "MPSI3", group: "G3" },
{ name: "DOUZI Othmane", class: "MPSI3", group: "G4" },
{ name: "EL QAOUS Yahya", class: "MPSI3", group: "G4" },
{ name: "RAMI Mohamed riad", class: "MPSI3", group: "G5" },
{ name: "SAIDOU Kawtar", class: "MPSI3", group: "G5" },
{ name: "MOUKRIME Hamza", class: "MPSI3", group: "G5" },
{ name: "OUATOUCH Ayoub", class: "MPSI3", group: "G6" },
{ name: "LAZAAR Hatim", class: "MPSI3", group: "G6" },
{ name: "MAHFOUD Ibrahim", class: "MPSI3", group: "G6" },
{ name: "TAOUDI Sara", class: "MPSI3", group: "G7" },
{ name: "TOUIMER Malak", class: "MPSI3", group: "G7" },
{ name: "TOUILILA Ilyas", class: "MPSI3", group: "G7" },
{ name: "NASSIR Ali", class: "MPSI3", group: "G8" },
{ name: "LACHGAR Mohamed amine", class: "MPSI3", group: "G8" },
{ name: "ZAHRI Louaye", class: "MPSI3", group: "G8" },
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
