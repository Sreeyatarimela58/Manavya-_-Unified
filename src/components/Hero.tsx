import { Button } from "@/components/ui/button";
import { Heart, Users, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Restoring{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Human Connection
                </span>{" "}
                Through Care
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Manavya bridges the gap between those who need care and those who want to help, 
                creating meaningful connections that restore dignity to every life we touch.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6" asChild>
                <Link to="/home">Start Helping Today</Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn Our Mission
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-hope" />
                <span className="text-sm text-muted-foreground">Compassionate Care</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-trust" />
                <span className="text-sm text-muted-foreground">100% Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-warmth" />
                <span className="text-sm text-muted-foreground">Verified Homes</span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="absolute inset-0 bg-gradient-warm opacity-20 rounded-2xl transform rotate-3"></div>
            <img
              src={heroImage}
              alt="Caring community helping elderly and children"
              className="relative rounded-2xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;