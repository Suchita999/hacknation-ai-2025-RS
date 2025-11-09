import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { 
  ArrowLeft,
  Target,
  Brain,
  MessageSquare,
  Shield,
  Lightbulb,
  CheckCircle
} from "lucide-react";

const ThesisDefense = () => {
  const navigate = useNavigate();

  const defenseFeatures = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Question Anticipation",
      description: "Practice with likely questions from your committee based on your thesis topic and methodology."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Argument Strengthening",
      description: "Identify weak points in your arguments and get suggestions to make them more robust."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Response Practice",
      description: "Practice articulating your responses clearly and confidently with AI feedback."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Weakness Identification",
      description: "Find potential vulnerabilities in your research before your committee does."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Defense Strategy",
      description: "Get personalized strategies to present your work confidently and handle tough questions."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Mock Sessions",
      description: "Run through full defense simulations to build confidence and reduce anxiety."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <header className="border-b border-white/10 bg-white/5 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 
            className="text-2xl font-cursive text-white cursor-pointer hover:text-accent transition-colors"
            onClick={() => navigate("/")}
          >
            Vani
          </h1>
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

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to Start Practicing?
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-4">
          "Ace Your Defense with Vani by Your Side."
        </p>
        <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
          Upload your thesis, describe your research, and let Vani guide you through comprehensive defense preparation.
        </p>
        <Button 
          onClick={() => navigate("/recording")} 
          size="lg"
          className="bg-teal-500 hover:bg-teal-600 text-white"
        >
          Begin Your Practice Session
        </Button>
      </section>

      {/* What to Expect Section */}
      <section className="container mx-auto px-4 pb-2">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
            What to Expect
          </h3>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {defenseFeatures.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-primary/40 backdrop-blur-md border-white/20 hover:bg-primary/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {feature.description}
              </p>
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

export default ThesisDefense;
