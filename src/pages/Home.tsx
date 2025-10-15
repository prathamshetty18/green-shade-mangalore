import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TreePine, Users, TrendingUp } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroBanner} 
            alt="Mangalore urban greening transformation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-display mb-6 leading-tight">
              Let's Cool Mangalore, One Tree at a Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
              Join our citizen-driven initiative to reduce urban heat islands and create a greener, cooler Mangalore.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="shadow-soft">
                  Join the Mission
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/map">
                <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur">
                  View Live Map
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-primary/5 shadow-soft animate-fade-in">
              <TreePine className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="text-4xl font-display text-primary mb-2">12,547</div>
              <div className="text-muted-foreground">Trees Planted</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-secondary/10 shadow-soft animate-fade-in">
              <Users className="w-12 h-12 text-secondary mx-auto mb-4" />
              <div className="text-4xl font-display text-secondary mb-2">3,842</div>
              <div className="text-muted-foreground">Active Citizens</div>
            </div>
            <div className="text-center p-8 rounded-2xl bg-accent/10 shadow-soft animate-fade-in">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <div className="text-4xl font-display text-accent mb-2">-2.3°C</div>
              <div className="text-muted-foreground">Average Heat Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-display text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Identify Heat Zones</h3>
              <p className="text-muted-foreground">
                Use our live heat map to identify urban hotspots that need greening the most.
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-display text-secondary">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Plant & Register</h3>
              <p className="text-muted-foreground">
                Join tree-planting drives or plant in your area and register your contribution.
              </p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-display text-accent">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Track Impact</h3>
              <p className="text-muted-foreground">
                Monitor real-time environmental impact and see your contribution to a cooler city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-earth text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Every tree counts. Join thousands of citizens working together to cool Mangalore and create a sustainable future.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="shadow-glow">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
