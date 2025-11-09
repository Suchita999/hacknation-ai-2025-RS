import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Brain,
  Target,
  Zap,
  Shield,
  Users,
  TrendingUp
} from "lucide-react";

const AboutVani = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Intelligence",
      description: "Advanced AI technology that understands your thesis and provides contextual feedback tailored to your research."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Feedback",
      description: "Get instant analysis of your responses with actionable suggestions for improvement."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Confidence Building",
      description: "Practice in a safe environment that reduces anxiety and builds your confidence for the real defense."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Continuous Improvement",
      description: "Track your progress over multiple practice sessions and see measurable improvement."
    }
  ];

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
          <span 
            className="text-lg text-white cursor-pointer hover:text-accent transition-smooth border-2 border-accent px-4 py-2 rounded-lg hover:bg-accent/10"
            onClick={() => navigate("/team")}
          >
            Meet the Chief Vision Blenders
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          About Vani
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-16">
          Your thesis defense is a major milestone. Vani uses AI to anticipate questions, strengthen weak points, and help you practice with confidence, tailored to your field and research.
        </p>

        {/* Explore Vani Section */}
        <Card className="p-10 max-w-3xl mx-auto bg-primary/40 backdrop-blur-md border-white/20 shadow-medium hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] transition-all duration-300">
          <h3 className="text-3xl font-bold text-white mb-4">
            Explore Vani
          </h3>
          <p className="text-white/80 text-lg mb-8">
            Choose the tool that best fits your research needs.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              onClick={() => navigate("/app")} 
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg shadow-soft hover:shadow-medium transition-all"
            >
              Deep Research
            </Button>
            <Button 
              onClick={() => navigate("/recording")} 
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg shadow-soft hover:shadow-medium transition-all"
            >
              Thesis Defense
            </Button>
          </div>
        </Card>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 pb-20">
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Why Choose Vani?
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-8 bg-primary/40 backdrop-blur-md border-white/20 hover:bg-primary/50 hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-medium group"
            >
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/30 group-hover:scale-110 transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
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

export default AboutVani;
