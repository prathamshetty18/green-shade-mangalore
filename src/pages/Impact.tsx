import { TreePine, Droplets, Wind, TrendingDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Impact = () => {
  const goals = [
    { label: "Trees Planted", current: 12547, target: 25000, unit: "trees" },
    { label: "CO₂ Absorbed", current: 3762, target: 7500, unit: "tons" },
    { label: "Area Covered", current: 42, target: 100, unit: "sq km" },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Impact Dashboard</h1>
          <p className="text-xl text-muted-foreground">
            Real-time environmental impact of our collective greening efforts
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="p-6 rounded-xl bg-card shadow-soft animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <TreePine className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
                <div className="text-3xl font-display text-primary">12,547</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">+234 this week</div>
          </div>

          <div className="p-6 rounded-xl bg-card shadow-soft animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-secondary/10">
                <Wind className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">CO₂ Absorbed</div>
                <div className="text-3xl font-display text-secondary">3,762 t</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Annually</div>
          </div>

          <div className="p-6 rounded-xl bg-card shadow-soft animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-accent/10">
                <TrendingDown className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Heat Reduction</div>
                <div className="text-3xl font-display text-accent">-2.3°C</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Average in green zones</div>
          </div>

          <div className="p-6 rounded-xl bg-card shadow-soft animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-primary/10">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Rainwater Retained</div>
                <div className="text-3xl font-display text-primary">1.2M L</div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Per year</div>
          </div>
        </div>

        {/* Progress Goals */}
        <div className="mb-12 animate-fade-in">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-display">2025 Goals</h2>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
          </div>
          <div className="space-y-6">
            {goals.map((goal, index) => (
              <div key={index} className="p-6 rounded-xl bg-card shadow-soft">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold">{goal.label}</h3>
                  <span className="text-sm text-muted-foreground">
                    {goal.current.toLocaleString()} / {goal.target.toLocaleString()} {goal.unit}
                  </span>
                </div>
                <Progress value={(goal.current / goal.target) * 100} className="h-3" />
                <div className="mt-2 text-sm text-muted-foreground">
                  {Math.round((goal.current / goal.target) * 100)}% Complete
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-in">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 shadow-soft">
            <h3 className="text-2xl font-display mb-6">Environmental Benefits</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Oxygen Production</span>
                <span className="font-semibold">9.4M kg/year</span>
              </div>
              <div className="flex justify-between">
                <span>Air Pollutants Removed</span>
                <span className="font-semibold">125 tons/year</span>
              </div>
              <div className="flex justify-between">
                <span>Soil Erosion Prevented</span>
                <span className="font-semibold">3,200 m³</span>
              </div>
              <div className="flex justify-between">
                <span>Wildlife Habitat Created</span>
                <span className="font-semibold">42 sq km</span>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 shadow-soft">
            <h3 className="text-2xl font-display mb-6">Community Impact</h3>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Active Volunteers</span>
                <span className="font-semibold">3,842</span>
              </div>
              <div className="flex justify-between">
                <span>Planting Events</span>
                <span className="font-semibold">127 events</span>
              </div>
              <div className="flex justify-between">
                <span>Partner Organizations</span>
                <span className="font-semibold">34</span>
              </div>
              <div className="flex justify-between">
                <span>Educational Workshops</span>
                <span className="font-semibold">58</span>
              </div>
            </div>
          </div>
        </div>

        {/* Monthly Trend Placeholder */}
        <div className="p-8 rounded-2xl bg-card shadow-soft animate-fade-in">
          <h3 className="text-2xl font-display mb-6">Monthly Planting Trend</h3>
          <div className="h-64 flex items-end justify-around gap-2">
            {[65, 78, 82, 90, 88, 95, 100, 92, 87, 94, 89, 96].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-primary rounded-t-lg transition-all hover:bg-primary/80 animate-grow"
                  style={{ height: `${height}%` }}
                />
                <span className="text-xs text-muted-foreground">
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
