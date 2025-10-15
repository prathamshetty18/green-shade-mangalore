import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll get back to you within 48 hours.",
    });
  };

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Get Involved</h1>
          <p className="text-xl text-muted-foreground">
            Join us in making Mangalore greener, one tree at a time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="p-8 rounded-2xl bg-card shadow-soft">
              <h2 className="text-2xl font-display mb-6">Volunteer Signup</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter your name" 
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="interest">Area of Interest</Label>
                  <select 
                    id="interest"
                    className="w-full mt-2 px-3 py-2 rounded-md border border-input bg-background"
                  >
                    <option>Tree Planting</option>
                    <option>Data Collection</option>
                    <option>Community Outreach</option>
                    <option>Event Organization</option>
                    <option>Education & Awareness</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us why you want to join..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Submit Application
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info & Partners */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-soft animate-fade-in">
              <h2 className="text-2xl font-display mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-background">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      GreenShade Office<br />
                      Mangalore, Karnataka 575001
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-background">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hello@greenshade.org</p>
                    <p className="text-muted-foreground">volunteer@greenshade.org</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-background">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+91 824 XXX XXXX</p>
                    <p className="text-muted-foreground text-sm">(Mon-Sat, 9 AM - 6 PM)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partner Organizations */}
            <div className="p-8 rounded-2xl bg-card shadow-soft animate-fade-in">
              <h2 className="text-2xl font-display mb-6">Partner Organizations</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Mangalore City Corporation",
                  "IISc Bangalore",
                  "Karnataka Forest Dept",
                  "Local Schools Network",
                  "Environmental NGOs",
                  "Community Groups"
                ].map((partner, i) => (
                  <div 
                    key={i}
                    className="p-4 rounded-lg bg-muted/50 text-center text-sm font-medium hover:bg-muted transition-smooth"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="p-8 rounded-2xl gradient-forest text-primary-foreground animate-fade-in">
              <h3 className="text-xl font-display mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full p-3 bg-background/20 hover:bg-background/30 rounded-lg text-left transition-smooth backdrop-blur">
                  📧 Subscribe to Newsletter
                </button>
                <button className="w-full p-3 bg-background/20 hover:bg-background/30 rounded-lg text-left transition-smooth backdrop-blur">
                  📅 View Upcoming Events
                </button>
                <button className="w-full p-3 bg-background/20 hover:bg-background/30 rounded-lg text-left transition-smooth backdrop-blur">
                  💰 Donate to the Cause
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
