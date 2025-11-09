import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Volume2 } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [showButtons, setShowButtons] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const fullText = "Your AI Research Companion";

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const handleVoiceClick = () => {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    const utterance = new SpeechSynthesisUtterance("Hi I am Vani your AI research companion");
    
    // Get available voices and select a female voice
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(voice => 
      voice.name.includes('Female') || 
      voice.name.includes('Samantha') || 
      voice.name.includes('Victoria') ||
      voice.name.includes('Karen') ||
      voice.name.includes('Zira') ||
      (voice.lang.startsWith('en') && voice.name.includes('Google') && !voice.name.includes('Male'))
    );
    
    if (femaleVoice) {
      utterance.voice = femaleVoice;
    }
    
    utterance.rate = 0.9;
    utterance.pitch = 1.1;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="h-screen w-screen bg-gradient-primary relative flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary to-accent/20 animate-gradient"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent/15 rounded-full animate-pulse-slower"></div>
      </div>

      <div className="relative z-10 text-center px-4 animate-fade-in">
        <h1 className="text-7xl md:text-8xl font-cursive bg-gradient-to-r from-white to-accent bg-clip-text text-transparent mb-4">
          Vani
        </h1>
        <div className="flex items-center justify-center mb-8 h-12">
          {!isSpeaking ? (
            <button
              onClick={handleVoiceClick}
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 hover:border-accent/50 transition-all duration-300"
              aria-label="Hear Vani introduce herself"
            >
              <Volume2 className="w-5 h-5 text-white group-hover:text-accent transition-colors" />
              <span className="text-white/90 group-hover:text-white text-sm font-medium">Hear from Vani</span>
            </button>
          ) : (
            <div className="flex items-center gap-1 animate-fade-in">
              <div className="w-1 bg-accent rounded-full animate-waveform" style={{ height: '12px', animationDelay: '0s' }}></div>
              <div className="w-1 bg-accent rounded-full animate-waveform" style={{ height: '20px', animationDelay: '0.1s' }}></div>
              <div className="w-1 bg-accent rounded-full animate-waveform" style={{ height: '16px', animationDelay: '0.2s' }}></div>
              <div className="w-1 bg-accent rounded-full animate-waveform" style={{ height: '24px', animationDelay: '0.15s' }}></div>
              <div className="w-1 bg-accent rounded-full animate-waveform" style={{ height: '14px', animationDelay: '0.25s' }}></div>
            </div>
          )}
        </div>
        <p className="text-2xl md:text-3xl text-white/90 mb-12 h-10 font-light tracking-wide">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        {showButtons && (
          <div className="flex gap-4 justify-center animate-fade-in">
            <Button 
              onClick={() => navigate("/features")} 
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white font-semibold transition-all duration-300"
            >
              Take Vani for a Spin
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;
