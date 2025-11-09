import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mic, MicOff, Upload, FileText, X, ChevronRight, Trash2 } from "lucide-react";

const Recording = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => [...prev, file]);
      setIsSidebarOpen(true);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex">
      {/* Side Navigation - Uploaded Files */}
      <div
        className={`h-screen sticky top-0 bg-primary/95 backdrop-blur-md border-r border-white/20 shadow-2xl transition-all duration-300 ease-in-out flex-shrink-0 ${
          isSidebarOpen ? 'w-80' : 'w-0'
        } overflow-hidden`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold text-white">Uploaded Documents</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Files List */}
          <div className="flex-1 overflow-y-auto p-4">
            {uploadedFiles.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-white/60">
                <FileText className="w-12 h-12 mb-4 opacity-40" />
                <p className="text-center">No files uploaded yet</p>
              </div>
            ) : (
              <div className="space-y-3">
                {uploadedFiles.map((file, index) => (
                  <Card 
                    key={index}
                    className="p-4 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 flex-1 min-w-0">
                        <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <div className="flex-1 min-w-0">
                          <p className="text-white font-medium text-sm truncate">{file.name}</p>
                          <p className="text-white/60 text-xs mt-1">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                        className="text-white/70 hover:text-red-400 hover:bg-red-500/10 flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/10">
            <p className="text-white/60 text-sm text-center">
              {uploadedFiles.length} {uploadedFiles.length === 1 ? 'file' : 'files'} uploaded
            </p>
          </div>
        </div>
      </div>


      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <h1 
              className="text-2xl font-cursive text-white cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate("/")}
            >
              Vani
            </h1>
            {!isSidebarOpen && uploadedFiles.length > 0 && (
              <Button
                onClick={() => setIsSidebarOpen(true)}
                size="sm"
                className="bg-accent/20 hover:bg-accent/30 text-accent border border-accent/50 px-3 py-1"
              >
                <FileText className="w-3 h-3 mr-1" />
                {uploadedFiles.length}
              </Button>
            )}
          </div>
          <div className="flex gap-8 items-center">
            <span 
              className="text-lg text-white cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate("/app")}
            >
              Deep Research
            </span>
            <span 
              className="text-lg text-white cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate("/about")}
            >
              About Vani
            </span>
          </div>
          </div>
        </header>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Practice Session
          </h2>
          <p className="text-lg text-white/80 text-center mb-6">
            Get comfortable answering questions under realistic defense conditions.
          </p>
          {/* How it Works - Improved Design */}
          <Card className="mb-12 p-8 bg-white/5 backdrop-blur-sm border-white/20">
            <h3 className="text-2xl font-semibold text-white text-center mb-8">How it works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl font-bold mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Upload your thesis</h4>
                <p className="text-white/70 text-sm">Share your document for analysis</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl font-bold mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Start your practice session</h4>
                <p className="text-white/70 text-sm">Record via voice or type your responses</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent text-2xl font-bold mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Receive feedback</h4>
                <p className="text-white/70 text-sm">Get improvement suggestions instantly</p>
              </div>
            </div>
          </Card>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Upload Section */}
            <Card className="p-8 bg-primary/40 backdrop-blur-md border-white/20 hover:bg-primary/50 hover:border-accent/50 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent">
                  <Upload className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">
                  Upload Your Thesis
                </h3>
              </div>
              <p className="text-white/70 mb-6">
                Upload your thesis document so Vani can analyze it and provide targeted defense preparation.
              </p>
              
              <div className="space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg py-8 shadow-lg hover:shadow-xl transition-all"
                  onClick={() => document.getElementById('file-input')?.click()}
                >
                  <Upload className="w-6 h-6 mr-3" />
                  {uploadedFiles.length > 0 ? 'Upload Another Thesis' : 'Click to Upload Thesis'}
                </Button>
                
                {uploadedFiles.length > 0 && (
                  <Button
                    variant="outline"
                    className="w-full border-teal-500 text-white hover:bg-teal-600/20 hover:border-teal-600 transition-all"
                    onClick={() => setIsSidebarOpen(true)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    View All Files ({uploadedFiles.length})
                  </Button>
                )}
              </div>
              
              <input
                id="file-input"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileUpload}
              />
            </Card>

            {/* Recording Section */}
            <Card className={`p-8 bg-primary/40 backdrop-blur-md border-white/20 hover:bg-primary/50 hover:border-accent/50 transition-all duration-300 ${
              uploadedFiles.length > 0 ? 'bg-white/10' : 'bg-white/5 opacity-60'
            }`}>
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                uploadedFiles.length > 0 ? 'bg-accent/20 text-accent' : 'bg-white/10 text-white/40'
              }`}>
                <Mic className="w-6 h-6" />
              </div>
              <h3 className={`text-2xl font-semibold ${
                uploadedFiles.length > 0 ? 'text-white' : 'text-white/40'
              }`}>
                Record Practice Session
              </h3>
            </div>
            <p className={`mb-6 ${uploadedFiles.length > 0 ? 'text-white/70' : 'text-white/40'}`}>
              {uploadedFiles.length > 0
                ? 'Practice presenting your defense out loud. Vani will listen and provide feedback on your delivery and content.'
                : 'Please upload your thesis first to enable practice recording.'
              }
            </p>
            <div className="flex flex-col items-center gap-6">
              <Button
                size="lg"
                disabled={uploadedFiles.length === 0}
                className={`w-full ${
                  isRecording 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-teal-500 hover:bg-teal-600'
                } text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed`}
                onClick={() => setIsRecording(!isRecording)}
              >
                {isRecording ? (
                  <>
                    <MicOff className="w-5 h-5 mr-2" />
                    Stop Recording
                  </>
                ) : (
                  <>
                    <Mic className="w-5 h-5 mr-2" />
                    Start Recording
                  </>
                )}
              </Button>
              {isRecording && (
                <div className="flex items-center gap-2 animate-pulse">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-breathing"></div>
                  <span className="text-white/80">Recording in progress...</span>
                </div>
              )}
            </div>
          </Card>
          </div>
        </div>
        </section>

        {/* Copyright Footer */}
        <footer className="border-t border-white/10 bg-white/5 backdrop-blur-sm mt-16">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} Vani. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Recording;
