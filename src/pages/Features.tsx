import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  FileText, 
  MessageSquare, 
  Brain, 
  Zap, 
  Shield, 
  Search,
  Upload,
  Sparkles,
  ArrowLeft
} from "lucide-react";

const Features = () => {
  const navigate = useNavigate();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        // At the top, always show header
        setShowHeader(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down, hide header
        setShowHeader(false);
      } else {
        // Scrolling up, show header
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const capabilities = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Deep Research",
      subtitle: "Research Meets Smart Synthesis.",
      description: "Vani reads and analyzes complex research papers, extracts key insights, and connects ideas across multiple documents. It helps you understand and summarize large amounts of information quickly and clearly.",
      hasButton: true
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Thesis Defense Agent",
      subtitle: "Ace Your Defense with Vani by Your Side.",
      description: "Vani helps you prepare for your thesis defense by anticipating questions, strengthening arguments, and identifying weak points. Practice your responses and gain confidence with AI-powered guidance, so you're fully ready for the big day.",
      hasButton: true,
      buttonText: "Practice with Vani",
      route: "/thesis-defense"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <header
        className={`border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-50 transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="relative flex flex-col items-center">
            <h1 
              className="text-2xl font-cursive text-white cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate("/")}
            >
              Vani
            </h1>
          </div>
          <span 
            className="text-lg text-white cursor-pointer hover:text-accent transition-colors"
            onClick={() => navigate("/about")}
          >
            About Vani
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          What Vani Can Do
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
          Discover how Vani transforms your research workflow with powerful AI capabilities designed for academics, researchers, and professionals.
        </p>
      </section>

      {/* Capabilities Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {capabilities.map((capability, index) => (
            <Card 
              key={index}
              className="p-8 bg-primary/40 backdrop-blur-md border-white/20 hover:bg-primary/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-16 h-16 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-6">
                {capability.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3">
                {capability.title}
              </h3>
              {capability.subtitle && (
                <p className="text-lg text-white mb-3 font-medium">
                  "{capability.subtitle}"
                </p>
              )}
              <p className="text-white/80 mb-6 leading-relaxed">
                {capability.description}
              </p>
              <Button 
                onClick={() => navigate(capability.route || "/app")} 
                className="w-full border-teal-500 hover:bg-teal-500/10"
                variant="outline-light"
              >
                {capability.buttonText || "Dive In"}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Copyright Footer */}
      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Vani. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Features;
