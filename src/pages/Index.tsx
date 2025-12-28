import { useState } from "react";
import { StudentSearch } from "@/components/StudentSearch";
import { StudentList } from "@/components/StudentList";
import { Student } from "@/types/student";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isStudentListOpen, setIsStudentListOpen] = useState(false);
  
  const [students] = useState<Student[]>([
    { name: "ADIB Sami", class: "MPSI 1", group: "G1-MPSI1" },
    { name: "BOULAHMOUZ Mohamed ali", class: "MPSI 1", group: "G1-MPSI1" },
    { name: "BELMAHJOUB Hanae", class: "MPSI 1", group: "G1-MPSI1" },
    { name: "EL ALLAME Karim", class: "MPSI 1", group: "G2-MPSI1" },
    { name: "FARS Rayane", class: "MPSI 1", group: "G2-MPSI1" },
    { name: "EL AZHARI Ilyas", class: "MPSI 1", group: "G2-MPSI1" },
    { name: "AMACHICHOU Hiba", class: "MPSI 1", group: "G3-MPSI1" },
    { name: "BALHA Achraf", class: "MPSI 1", group: "G3-MPSI1" },
    { name: "HACHLAF Mohamed-amine", class: "MPSI 1", group: "G3-MPSI1" },
    { name: "ELAANNOUNI Omar", class: "MPSI 1", group: "G4-MPSI1" },
    { name: "HAMIDI Omar", class: "MPSI 1", group: "G4-MPSI1" },
    { name: "AKHBOUCH Redouane", class: "MPSI 1", group: "G4-MPSI1" },
    { name: "ZAMANI Mohamed", class: "MPSI 1", group: "G5-MPSI1" },
    { name: "TRABELSI Ahmed taha", class: "MPSI 1", group: "G5-MPSI1" },
    { name: "RHANIM Tarik", class: "MPSI 1", group: "G5-MPSI1" },
    { name: "TELHAWI Chahd", class: "MPSI 1", group: "G6-MPSI1" },
    { name: "RAZIKI Chady", class: "MPSI 1", group: "G6-MPSI1" },
    { name: "RARADI Sara", class: "MPSI 1", group: "G6-MPSI1" },
    { name: "KHAYATI Imane", class: "MPSI 1", group: "G7-MPSI1" },
    { name: "OUCHATTI Douae", class: "MPSI 1", group: "G7-MPSI1" },
    { name: "KARIM Ziyad", class: "MPSI 1", group: "G7-MPSI1" },
    { name: "KOUHLANI Ilias", class: "MPSI 1", group: "G8-MPSI1" },
    { name: "SAOUDI Mohammed amine", class: "MPSI 1", group: "G8-MPSI1" },
    { name: "MGOUNI IDRISSI Omar", class: "MPSI 1", group: "G8-MPSI1" },
    { name: "ALAMI Amine", class: "MPSI2", group: "G1-MPSI2" },
    { name: "ABDI Haytham", class: "MPSI2", group: "G1-MPSI2" },
    { name: "ADDADI Rania", class: "MPSI2", group: "G1-MPSI2" },
    { name: "EL BAROUDI Yahya", class: "MPSI2", group: "G2-MPSI2" },
    { name: "FADILI Salah eddine", class: "MPSI2", group: "G2-MPSI2" },
    { name: "ELMAZOUZI Mohammed", class: "MPSI2", group: "G2-MPSI2" },
    { name: "EL MOUNTADAR-ALAOUI Omar", class: "MPSI2", group: "G3-MPSI2" },
    { name: "FLAHY Salmane", class: "MPSI2", group: "G3-MPSI2" },
    { name: "AOUSSAR Amine", class: "MPSI2", group: "G3-MPSI2" },
    { name: "HIKIOUI Chahine", class: "MPSI2", group: "G4-MPSI2" },
    { name: "BENAMAR Mohamed reda", class: "MPSI2", group: "G4-MPSI2" },
    { name: "OUANNANI Hajar", class: "MPSI2", group: "G5-MPSI2" },
    { name: "AZIZ Houda", class: "MPSI2", group: "G5-MPSI2" },
    { name: "KARTIT Chaymae", class: "MPSI2", group: "G5-MPSI2" },
    { name: "LAASRI Mohamed barae", class: "MPSI2", group: "G6-MPSI2" },
    { name: "MOUKHLIS Mohamed yanis", class: "MPSI2", group: "G6-MPSI2" },
    { name: "OUGUZINE Farah", class: "MPSI2", group: "G6-MPSI2" },
    { name: "KHOURACH Ghali", class: "MPSI2", group: "G7-MPSI2" },
    { name: "ZAINOUN Zayd", class: "MPSI2", group: "G7-MPSI2" },
    { name: "ZAOUI Mohammed", class: "MPSI2", group: "G7-MPSI2" },
    { name: "IBN HAQQI Montassir billah", class: "MPSI2", group: "G8-MPSI2" },
    { name: "MOUTAOUKIL Rayan", class: "MPSI2", group: "G8-MPSI2" },
    { name: "KHOMSI Hamza", class: "MPSI3", group: "G1-MPSI3" },
    { name: "BENTAIBI Amir", class: "MPSI3", group: "G1-MPSI3" },
    { name: "EL MAHI Mohyi-eddine", class: "MPSI3", group: "G1-MPSI3" },
    { name: "KHATTABI Abderrahmane", class: "MPSI3", group: "G2-MPSI3" },
    { name: "EL ANSARI Anas", class: "MPSI3", group: "G2-MPSI3" },
    { name: "KHN-NOUS Ahmed", class: "MPSI3", group: "G2-MPSI3" },
    { name: "ABY Aya", class: "MPSI3", group: "G3-MPSI3" },
    { name: "HOSSINI Adam", class: "MPSI3", group: "G3-MPSI3" },
    { name: "EL HOUADI Mohamed youssef", class: "MPSI3", group: "G3-MPSI3" },
    { name: "DOUZI Othmane", class: "MPSI3", group: "G4-MPSI3" },
    { name: "EL QAOUS Yahya", class: "MPSI3", group: "G4-MPSI3" },
    { name: "RAMI Mohamed riad", class: "MPSI3", group: "G5-MPSI3" },
    { name: "SAIDOU Kawtar", class: "MPSI3", group: "G5-MPSI3" },
    { name: "MOUKRIME Hamza", class: "MPSI3", group: "G5-MPSI3" },
    { name: "OUATOUCH Ayoub", class: "MPSI3", group: "G6-MPSI3" },
    { name: "LAZAAR Hatim", class: "MPSI3", group: "G6-MPSI3" },
    { name: "MAHFOUD Ibrahim", class: "MPSI3", group: "G6-MPSI3" },
    { name: "TAOUDI Sara", class: "MPSI3", group: "G7-MPSI3" },
    { name: "TOUIMER Malak", class: "MPSI3", group: "G7-MPSI3" },
    { name: "TOUILILA Ilyas", class: "MPSI3", group: "G7-MPSI3" },
    { name: "NASSIR Ali", class: "MPSI3", group: "G8-MPSI3" },
    { name: "LACHGAR Mohamed amine", class: "MPSI3", group: "G8-MPSI3" },
    { name: "ZAHRI Louaye", class: "MPSI3", group: "G8-MPSI3" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-background flex flex-col">
      <div className="container mx-auto px-4 py-12 flex-1">
        {/* Header with logos and theme toggle */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <img 
              src="/logo-abulcasis.png" 
              alt="Logo Abulcasis" 
              className="h-16 w-auto"
            />
            <img 
              src="/logo-alzahrawi.png" 
              alt="Logo Alzahrawi" 
              className="h-16 w-auto"
            />
          </div>
          <ThemeToggle />
        </div>

        {/* Centered content */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Colloscope d MPSI2
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              9lb 3la smitk ila knti MPSI2 w khtar la semaine w chuf schedule dialk dl colle.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-foreground">StudentSearch</h2>
              <StudentSearch students={students} />
            </div>
            
            <Collapsible open={isStudentListOpen} onOpenChange={setIsStudentListOpen}>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-semibold text-foreground">
                  Student Database ({students.length})
                </h2>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2">
                    {isStudentListOpen ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Collapse
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Expand
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent>
                <StudentList students={students} />
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ by <span className="font-medium text-foreground">Your Name</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
