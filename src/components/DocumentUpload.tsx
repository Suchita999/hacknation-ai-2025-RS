import { useState, useCallback } from "react";
import { Upload, FileText, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface DocumentUploadProps {
  onFileUpload: (file: File) => void;
}

export const DocumentUpload = ({ onFileUpload }: DocumentUploadProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      setUploadedFile(files[0]);
      onFileUpload(files[0]);
    }
  }, [onFileUpload]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
      onFileUpload(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
  };

  if (uploadedFile) {
    return (
      <Card className="p-6 border-white/20 bg-primary/40 backdrop-blur-md shadow-soft">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <FileText className="h-6 w-6 text-accent" />
            </div>
            <div>
              <p className="font-medium text-white">{uploadedFile.name}</p>
              <p className="text-sm text-white/70">
                {(uploadedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={removeFile}
            className="hover:bg-destructive/10 hover:text-destructive"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card
      className={`border-2 border-dashed transition-all duration-300 ${
        isDragging
          ? "border-accent bg-primary/30 shadow-medium backdrop-blur-md"
          : "border-white/20 bg-primary/20 hover:border-accent/50 hover:bg-primary/30 backdrop-blur-md"
      }`}
      onDragEnter={handleDrag}
      onDragOver={handleDrag}
      onDragLeave={handleDrag}
      onDrop={handleDrop}
    >
      <div className="p-12 text-center">
        <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-primary flex items-center justify-center">
          <Upload className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-white">
          Upload your document
        </h3>
        <p className="mb-6 text-sm text-white/70">
          Drag and drop your file here, or click to browse
        </p>
        <label htmlFor="file-upload">
          <Button asChild>
            <span className="cursor-pointer">Choose File</span>
          </Button>
        </label>
        <input
          id="file-upload"
          type="file"
          className="hidden"
          onChange={handleFileInput}
          accept=".pdf,.doc,.docx,.txt"
        />
        <p className="mt-4 text-xs text-white/60">
          Supported formats: PDF, DOC, DOCX, TXT
        </p>
      </div>
    </Card>
  );
};
