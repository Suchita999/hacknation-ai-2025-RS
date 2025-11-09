import { useState } from "react";
import { DocumentUpload } from "@/components/DocumentUpload";
import { ChatInterface } from "@/components/ChatInterface";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-cursive text-white cursor-pointer hover:text-accent transition-smooth"
            onClick={() => navigate("/")}
          >
            Vani
          </h1>
          <div className="flex gap-8 items-center">
            <span 
              className="text-lg text-white cursor-pointer hover:text-accent transition-smooth"
              onClick={() => navigate("/thesis-defense")}
            >
              Thesis Defense
            </span>
            <span 
              className="text-lg text-white cursor-pointer hover:text-accent transition-smooth"
              onClick={() => navigate("/about")}
            >
              About Vani
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-180px)]">
          {/* Left Panel - Document Upload */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-4">
              Document
            </h2>
            <DocumentUpload onFileUpload={handleFileUpload} />
          </div>

          {/* Right Panel - Chat Interface */}
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold text-white mb-4">
              Chat
            </h2>
            <Card className="flex-1 flex flex-col bg-primary/40 backdrop-blur-md border-white/20 shadow-medium overflow-hidden">
              <ChatInterface hasDocument={!!uploadedFile} />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
