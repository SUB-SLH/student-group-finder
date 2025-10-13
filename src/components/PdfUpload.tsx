import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Loader2 } from "lucide-react";
import { Student } from "@/types/student";
import { toast } from "sonner";

interface PdfUploadProps {
  onStudentsImported: (students: Student[]) => void;
}

export const PdfUpload = ({ onStudentsImported }: PdfUploadProps) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const parseTableData = (text: string): Student[] => {
    const students: Student[] = [];
    const lines = text.split('\n').filter(line => line.trim());
    
    console.log('Parsing PDF text:', text);
    
    // Look for table patterns with French headers
    let dataStarted = false;
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Skip header rows
      if (trimmedLine.toLowerCase().includes('nom') && 
          trimmedLine.toLowerCase().includes('prenom')) {
        dataStarted = true;
        continue;
      }
      
      if (!dataStarted) continue;
      
      // Split by multiple spaces or tabs to separate columns
      const parts = trimmedLine.split(/\s{2,}|\t/).filter(p => p.trim());
      
      if (parts.length >= 4) {
        // Skip the first column (student code) and extract the relevant data
        // Format: [Code] Nom Prenom Classe Groupe [other columns...]
        let startIndex = 0;
        
        // Find where actual data starts (skip code column if it looks like a code)
        if (parts[0].match(/^[A-Z0-9-]+$/)) {
          startIndex = 1;
        }
        
        const nom = parts[startIndex] || '';
        const prenom = parts[startIndex + 1] || '';
        const classe = parts[startIndex + 2] || '';
        const groupe = parts[startIndex + 3] || '';
        
        // Validate that we have actual data
        if (nom && prenom && classe && groupe) {
          students.push({
            name: `${prenom} ${nom}`.trim(),
            class: classe.trim(),
            group: groupe.replace(/[^0-9]/g, '').trim() || groupe.trim(),
          });
        }
      }
    }
    
    return students;
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file');
      return;
    }

    setIsProcessing(true);
    setFileName(file.name);

    try {
      // Create FormData to send the file
      const formData = new FormData();
      formData.append('file', file);

      toast.info('Processing PDF file...');

      // Since we can't use the document parsing tool directly in the browser,
      // we'll need to handle this manually or instruct the user to use the chat
      toast.warning('PDF parsing: Please drag and drop your PDF file into the chat, and I will extract the student data for you.');
      
    } catch (error) {
      console.error('Error processing PDF:', error);
      toast.error('Failed to process PDF file');
    } finally {
      setIsProcessing(false);
      event.target.value = '';
    }
  };

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          Import from PDF
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Upload a PDF with a table containing:
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom (Last name)</li>
              <li>Prénom (First name)</li>
              <li>Classe (Class)</li>
              <li>Groupe de colles (Group)</li>
            </ul>
          </div>
          
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="pdf-upload"
              disabled={isProcessing}
            />
            <label
              htmlFor="pdf-upload"
              className="cursor-pointer flex flex-col items-center gap-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-8 w-8 text-primary animate-spin" />
                  <span className="text-sm font-medium">Processing...</span>
                </>
              ) : (
                <>
                  <Upload className="h-8 w-8 text-muted-foreground" />
                  <span className="text-sm font-medium">
                    Click to upload PDF or drag into chat
                  </span>
                </>
              )}
              {fileName && (
                <span className="text-xs text-muted-foreground mt-2">
                  {fileName}
                </span>
              )}
            </label>
          </div>

          <div className="bg-accent/50 p-4 rounded-lg text-sm">
            <p className="font-medium mb-2">💡 Tip:</p>
            <p className="text-muted-foreground">
              For best results, drag and drop your PDF directly into the chat. 
              I'll extract the student data automatically!
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
