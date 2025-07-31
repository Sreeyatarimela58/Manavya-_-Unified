import { Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Manavya</span>
            </div>
            <p className="text-background/70 leading-relaxed">
              Connecting hearts, restoring dignity, and creating meaningful change in the lives of those who need it most.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#mission" className="block text-background/70 hover:text-background transition-colors">Our Mission</a>
              <a href="#how-it-works" className="block text-background/70 hover:text-background transition-colors">How It Works</a>
              <a href="#impact" className="block text-background/70 hover:text-background transition-colors">Our Impact</a>
              <a href="#contact" className="block text-background/70 hover:text-background transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">For Organizations</h3>
            <div className="space-y-2">
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Register Your Home</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Resources</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Support</a>
              <a href="#" className="block text-background/70 hover:text-background transition-colors">Guidelines</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-background/70" />
                <span className="text-background/70">hello@manavya.org</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-background/70" />
                <span className="text-background/70">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-background/70" />
                <span className="text-background/70">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <p className="text-background/70">
            © 2024 Manavya. All rights reserved. Made with ❤️ for a better tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;