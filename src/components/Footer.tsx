import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6" />
              <span className="font-display text-xl">GreenShade</span>
            </div>
            <p className="text-sm opacity-90">
              Cooling Mangalore, one tree at a time. Join our citizen-driven urban greening initiative.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/map" className="opacity-90 hover:opacity-100 transition-smooth">Live Map</Link></li>
              <li><Link to="/impact" className="opacity-90 hover:opacity-100 transition-smooth">Impact Dashboard</Link></li>
              <li><Link to="/community" className="opacity-90 hover:opacity-100 transition-smooth">Community</Link></li>
              <li><Link to="/about" className="opacity-90 hover:opacity-100 transition-smooth">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 transition-smooth">Volunteer</Link></li>
              <li><Link to="/contact" className="opacity-90 hover:opacity-100 transition-smooth">Partner With Us</Link></li>
              <li><a href="#" className="opacity-90 hover:opacity-100 transition-smooth">Donate</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Mangalore, Karnataka</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@greenshade.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 824 XXX XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} GreenShade Mangalore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
