import { Card } from "@/components/ui/card";
import { Shield, Search, Heart, Users, Eye, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Discover Care Homes",
      description: "Find verified orphanages and old age homes in your area that need support.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Verified & Trusted",
      description: "All care homes undergo thorough verification to ensure your donations reach the right hands.",
      color: "text-trust"
    },
    {
      icon: Heart,
      title: "Direct Impact",
      description: "See exactly how your contributions make a difference in real lives.",
      color: "text-hope"
    },
    {
      icon: Eye,
      title: "Complete Transparency",
      description: "Track every donation and see detailed reports on how funds are utilized.",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a community of caring individuals working together to make a difference.",
      color: "text-warmth"
    },
    {
      icon: Clock,
      title: "Timely Assistance",
      description: "Ensure urgent needs are met quickly with our responsive support system.",
      color: "text-hope"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            How Manavya Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our platform creates meaningful connections between caring individuals and those who need support most.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 h-full hover:shadow-gentle transition-all duration-300 bg-background border-0">
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-subtle flex items-center justify-center`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;