import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { 
  Linkedin,
  Mail
} from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";

const Team = () => {
  const navigate = useNavigate();

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
          <div className="flex gap-6 items-center">
            <span 
              className="text-lg text-white cursor-pointer hover:text-accent transition-smooth"
              onClick={() => navigate("/app")}
            >
              Deep Research
            </span>
            <span 
              className="text-lg text-white cursor-pointer hover:text-accent transition-smooth"
              onClick={() => navigate("/thesis-defense")}
            >
              Thesis Defense
            </span>
          </div>
        </div>
      </header>

      {/* Hero Section with Group Photo */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center animate-fade-in">
          Meet the Chief Vision Blenders
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12 text-center">
          A data science duo turning academic anxiety into academic victory dances.
        </p>

        {/* Group Photo Card with Contact Info */}
        <Card className="p-8 max-w-4xl mx-auto bg-primary/40 backdrop-blur-md border-white/20 hover:border-accent/50 transition-all duration-300">
          <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
            <img 
              src={teamPhoto}
              alt="The Vision Blenders Team - Ritika and Suchita"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Section */}
          <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-white/20">
            {/* Ritika - Left */}
            <div className="text-center space-y-4">
              <h4 className="text-xl font-semibold text-white mb-3">
                Reach out to Ritika
              </h4>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/ritika-kumar-98a393191/?skipRedirect=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-primary hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Ritika's LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a 
                  href="mailto:kumar.riti@northeastern.edu"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-primary hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Email Ritika"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>

            {/* Suchita - Right */}
            <div className="text-center space-y-4">
              <h4 className="text-xl font-semibold text-white mb-3">
                Reach out to Suchita
              </h4>
              <div className="flex gap-4 justify-center">
                <a 
                  href="https://www.linkedin.com/in/suchitasharma99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-primary hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Suchita's LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="text-sm font-medium">LinkedIn</span>
                </a>
                <a 
                  href="mailto:sharma.such@northeastern.edu"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 text-primary hover:bg-white hover:text-primary transition-all duration-300"
                  aria-label="Email Suchita"
                >
                  <Mail className="w-5 h-5" />
                  <span className="text-sm font-medium">Email</span>
                </a>
              </div>
            </div>
          </div>
        </Card>
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

export default Team;
