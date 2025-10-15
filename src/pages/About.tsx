import { BookOpen, Target, Users, Lightbulb, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display mb-4">About GreenShade</h1>
          <p className="text-xl text-muted-foreground">
            A citizen-science initiative inspired by research, powered by community
          </p>
        </div>

        {/* Mission */}
        <div className="mb-16 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="text-3xl font-display">Our Mission</h2>
              </div>
              <p className="text-lg leading-relaxed mb-4">
                GreenShade Mangalore is a grassroots movement to combat urban heat islands through 
                strategic tree planting and community engagement. We believe that every citizen has 
                the power to create environmental change.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By combining scientific data with local knowledge, we're transforming Mangalore into 
                a cooler, greener, and more sustainable city.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-soft">
              <h3 className="text-2xl font-display mb-6">Key Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Reduce urban heat by 3°C in target zones by 2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Plant 25,000 native trees across Mangalore</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Engage 10,000+ citizens in active participation</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <span>Create public heat maps for informed urban planning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Research Foundation */}
        <div className="mb-16 p-8 rounded-2xl bg-card shadow-soft animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-secondary" />
            <h2 className="text-3xl font-display">Research Foundation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">IISc Study Inspiration</h3>
              <p className="text-muted-foreground mb-4">
                Our initiative is inspired by the Indian Institute of Science (IISc) research on 
                urban heat islands in Indian cities. Their findings showed that strategic tree 
                planting can reduce surface temperatures by up to 3-5°C.
              </p>
              <Button variant="outline" size="sm">
                <ExternalLink className="w-4 h-4 mr-2" />
                Read Research Paper
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Citizen Science Approach</h3>
              <p className="text-muted-foreground mb-4">
                We empower citizens to become environmental researchers by collecting heat data, 
                documenting tree health, and tracking local climate patterns. This crowdsourced 
                data helps inform policy and planning decisions.
              </p>
              <div className="flex gap-4 text-sm">
                <div>
                  <div className="text-2xl font-display text-primary">1,200+</div>
                  <div className="text-muted-foreground">Data Points Collected</div>
                </div>
                <div>
                  <div className="text-2xl font-display text-secondary">450+</div>
                  <div className="text-muted-foreground">Citizen Scientists</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Work */}
        <div className="mb-16 animate-fade-in">
          <div className="flex items-center gap-2 mb-8">
            <Lightbulb className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-display">How We Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-primary/5 shadow-soft">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Data Collection</h3>
              <p className="text-muted-foreground text-sm">
                Using thermal imaging and ground sensors, we map urban heat islands and identify 
                priority zones for greening.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-secondary/5 shadow-soft">
              <div className="text-4xl mb-4">🌳</div>
              <h3 className="text-xl font-semibold mb-3">Strategic Planting</h3>
              <p className="text-muted-foreground text-sm">
                We work with local communities to plant native species in high-impact locations, 
                ensuring long-term survival and ecological benefit.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-accent/5 shadow-soft">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Impact Monitoring</h3>
              <p className="text-muted-foreground text-sm">
                Continuous monitoring of temperature changes, tree health, and environmental 
                benefits to demonstrate real-world impact.
              </p>
            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-8">
            <Users className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display">Our Partners</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Mangalore City Corporation", "IISc Bangalore", "Local Schools Network", "NGO Partners"].map((partner, i) => (
              <div 
                key={i}
                className="p-6 rounded-xl bg-card shadow-soft text-center hover:shadow-glow transition-smooth"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 rounded-2xl gradient-sunset text-primary-foreground text-center animate-fade-in">
          <h3 className="text-3xl font-display mb-4">Join Our Research</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Become a citizen scientist and contribute to environmental research that shapes urban planning.
          </p>
          <Button variant="secondary" size="lg">
            Become a Volunteer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
