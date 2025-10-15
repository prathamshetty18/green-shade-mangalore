import { Award, Camera, Trophy, Users } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const Community = () => {
  const leaderboard = [
    { name: "Kadri Residents Association", trees: 240, badge: "🏆" },
    { name: "Green Warriors MCC", trees: 185, badge: "🥈" },
    { name: "St. Aloysius College", trees: 156, badge: "🥉" },
    { name: "Mangalore Green Initiative", trees: 143, badge: "" },
    { name: "Bejai Welfare Society", trees: 128, badge: "" },
  ];

  const stories = [
    {
      author: "Rajesh Kumar",
      location: "Kadri Park",
      trees: 12,
      story: "Led a weekend tree planting drive with 30 local volunteers. We planted native species and it was amazing to see the community come together!",
      date: "2 days ago"
    },
    {
      author: "Priya Shetty",
      location: "Bejai Main Road",
      trees: 8,
      story: "Our apartment complex transformed the parking area into a mini urban forest. Kids now have a green space to play!",
      date: "1 week ago"
    },
    {
      author: "Mohammed Farhan",
      location: "Hampankatta",
      trees: 15,
      story: "Partnered with local schools to educate students about urban heat islands. They're now our biggest advocates!",
      date: "2 weeks ago"
    },
  ];

  const badges = [
    { name: "Tree Pioneer", description: "First 10 trees", icon: "🌱" },
    { name: "Green Champion", description: "50+ trees planted", icon: "🏅" },
    { name: "Forest Maker", description: "100+ trees planted", icon: "🌳" },
    { name: "Community Leader", description: "Organized 5+ events", icon: "👥" },
  ];

  return (
    <div className="pt-16 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Community</h1>
          <p className="text-xl text-muted-foreground">
            Stories, achievements, and heroes making Mangalore greener
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Leaderboard */}
          <div className="lg:col-span-1">
            <div className="p-6 rounded-2xl bg-card shadow-soft sticky top-24 animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-display">Top Contributors</h2>
              </div>
              <div className="space-y-4">
                {leaderboard.map((entry, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-smooth"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 font-semibold text-primary">
                      {entry.badge || index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{entry.name}</div>
                      <div className="text-xs text-muted-foreground">{entry.trees} trees</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Stories */}
          <div className="lg:col-span-2 space-y-6">
            {stories.map((story, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-card shadow-soft hover:shadow-glow transition-smooth animate-fade-in"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{story.author}</span>
                      <Badge variant="secondary" className="text-xs">
                        {story.trees} trees
                      </Badge>
                    </div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span>{story.location}</span>
                      <span>•</span>
                      <span>{story.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-foreground/90 leading-relaxed">{story.story}</p>
                <div className="mt-4 flex gap-2">
                  <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    👏 Appreciate
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                    💬 Comment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Award className="w-6 h-6 text-accent" />
            <h2 className="text-3xl font-display">Achievement Badges</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {badges.map((badge, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 shadow-soft text-center hover:scale-105 transition-spring"
              >
                <div className="text-5xl mb-3">{badge.icon}</div>
                <h3 className="font-semibold mb-2">{badge.name}</h3>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl gradient-earth text-primary-foreground text-center animate-fade-in">
          <Camera className="w-12 h-12 mx-auto mb-4" />
          <h3 className="text-2xl font-display mb-4">Share Your Story</h3>
          <p className="mb-6 opacity-90 max-w-2xl mx-auto">
            Have you planted trees or organized a greening event? Share your journey and inspire others!
          </p>
          <button className="px-6 py-3 bg-background text-foreground rounded-lg font-semibold hover:scale-105 transition-spring shadow-soft">
            Submit Your Story
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;
