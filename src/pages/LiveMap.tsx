import { Search, Filter, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const LiveMap = () => {
  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Live Heat Map</h1>
          <p className="text-xl text-muted-foreground">
            Explore urban heat zones and greening efforts across Mangalore
          </p>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Search by ward, location..." 
              className="pl-10"
            />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by ward" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Wards</SelectItem>
              <SelectItem value="ward1">Ward 1 - Hampankatta</SelectItem>
              <SelectItem value="ward2">Ward 2 - Kadri</SelectItem>
              <SelectItem value="ward3">Ward 3 - Bejai</SelectItem>
              <SelectItem value="ward4">Ward 4 - Kankanady</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Tree species" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Species</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
              <SelectItem value="neem">Neem</SelectItem>
              <SelectItem value="banyan">Banyan</SelectItem>
              <SelectItem value="coconut">Coconut</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Map Container */}
        <div className="relative rounded-2xl overflow-hidden shadow-soft animate-fade-in">
          <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Filter className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-display mb-2">Interactive Map Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Real-time heat mapping and tree location visualization
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-destructive" />
                  <span className="text-sm">High Heat Zone</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500" />
                  <span className="text-sm">Medium Heat</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-primary" />
                  <span className="text-sm">Green Zone</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Add Tree Button */}
          <Button 
            className="absolute bottom-6 right-6 shadow-glow"
            size="lg"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Tree Location
          </Button>
        </div>

        {/* Legend and Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-card shadow-soft">
            <h3 className="font-semibold mb-3">Recent Plantings</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Kadri Park</span>
                <span className="text-primary">+15 trees</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Bejai Main Road</span>
                <span className="text-primary">+8 trees</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Hampankatta</span>
                <span className="text-primary">+12 trees</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card shadow-soft">
            <h3 className="font-semibold mb-3">Priority Zones</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <span>Balmatta Junction - 38°C avg</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span>PVS Circle - 36°C avg</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <span>KS Rao Road - 35°C avg</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl bg-card shadow-soft">
            <h3 className="font-semibold mb-3">Top Contributors</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Kadri Residents Assoc.</span>
                <span className="text-secondary">240 trees</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Green Warriors MCC</span>
                <span className="text-secondary">185 trees</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>St. Aloysius College</span>
                <span className="text-secondary">156 trees</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;
