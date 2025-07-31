import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Search, Users, TrendingUp, Gift, MapPin, Clock, Star } from "lucide-react";
import Header from "@/components/Header";

const Home = () => {
  const quickActions = [
    {
      icon: Search,
      title: "Find Care Homes",
      description: "Discover verified orphanages and old age homes near you",
      action: "Explore",
      color: "primary"
    },
    {
      icon: Gift,
      title: "Make a Donation",
      description: "Support a cause and make an immediate impact",
      action: "Donate Now",
      color: "warmth"
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Offer your time and skills to help directly",
      action: "Join Us",
      color: "hope"
    }
  ];

  const recentActivity = [
    {
      type: "donation",
      title: "Sunshine Old Age Home",
      description: "Your donation of ₹2,500 helped purchase medicines",
      time: "2 hours ago",
      status: "completed"
    },
    {
      type: "visit",
      title: "Little Angels Orphanage",
      description: "You scheduled a visit for this weekend",
      time: "1 day ago",
      status: "upcoming"
    },
    {
      type: "impact",
      title: "Monthly Impact Report",
      description: "Your contributions helped 45 children this month",
      time: "3 days ago",
      status: "viewed"
    }
  ];

  const featuredHomes = [
    {
      name: "Harmony Senior Care",
      location: "Mumbai, Maharashtra",
      needs: ["Medicines", "Wheelchairs", "Volunteers"],
      urgent: true,
      rating: 4.8
    },
    {
      name: "Little Stars Orphanage",
      location: "Pune, Maharashtra", 
      needs: ["Educational Supplies", "Clothing", "Food"],
      urgent: false,
      rating: 4.9
    },
    {
      name: "Golden Years Home",
      location: "Delhi, NCR",
      needs: ["Medical Equipment", "Physiotherapy", "Companionship"],
      urgent: true,
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                Welcome back, Priya! 👋
              </h1>
              <p className="text-muted-foreground text-lg">
                Ready to make a difference today?
              </p>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 bg-gradient-subtle border-0 shadow-gentle">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Total Donated</p>
                  <p className="text-2xl font-bold text-primary">₹25,750</p>
                </div>
                <Gift className="w-8 h-8 text-primary" />
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-subtle border-0 shadow-gentle">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Lives Impacted</p>
                  <p className="text-2xl font-bold text-hope">127</p>
                </div>
                <Users className="w-8 h-8 text-hope" />
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-subtle border-0 shadow-gentle">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Homes Supported</p>
                  <p className="text-2xl font-bold text-warmth">8</p>
                </div>
                <Heart className="w-8 h-8 text-warmth" />
              </div>
            </Card>
            
            <Card className="p-6 bg-gradient-subtle border-0 shadow-gentle">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Impact Score</p>
                  <p className="text-2xl font-bold text-trust">9.2</p>
                </div>
                <TrendingUp className="w-8 h-8 text-trust" />
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <Card key={index} className="p-6 hover:shadow-warm transition-all duration-300 cursor-pointer border-0 bg-background">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-full bg-${action.color}/10 flex items-center justify-center`}>
                    <action.icon className={`w-6 h-6 text-${action.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{action.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{action.description}</p>
                    <Button variant={action.color as any} size="sm">{action.action}</Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Activity</h2>
            <Card className="p-6 border-0 shadow-gentle">
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground">{activity.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      activity.status === 'completed' ? 'bg-hope/10 text-hope' :
                      activity.status === 'upcoming' ? 'bg-warmth/10 text-warmth' :
                      'bg-primary/10 text-primary'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          {/* Featured Homes */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Homes Needing Support</h2>
            <div className="space-y-4">
              {featuredHomes.map((home, index) => (
                <Card key={index} className={`p-6 border-0 shadow-gentle hover:shadow-warm transition-all duration-300 cursor-pointer ${
                  home.urgent ? 'border-l-4 border-l-warmth' : ''
                }`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground flex items-center gap-2">
                        {home.name}
                        {home.urgent && <span className="px-2 py-1 bg-warmth/10 text-warmth text-xs rounded-full">Urgent</span>}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        {home.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warmth fill-current" />
                      <span className="text-sm font-medium">{home.rating}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Current needs:</p>
                    <div className="flex flex-wrap gap-2">
                      {home.needs.map((need, needIndex) => (
                        <span key={needIndex} className="px-2 py-1 bg-muted text-xs rounded-full">
                          {need}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Details
                  </Button>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;