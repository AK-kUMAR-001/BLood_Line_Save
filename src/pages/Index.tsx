import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Activity, Shield, Zap, TrendingUp, Users, Heart, MapPin, Bell } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Predictive AI Shortage Alerts",
      desc: "7-day advance warnings prevent critical blood shortages across Bangalore hospitals"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Drug-Free Verified Donors",
      desc: "College-based health screening ensures only safe, eligible donors in database"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Auto-Request System",
      desc: "Instant SMS/WhatsApp alerts sent to nearby donors when inventory drops below threshold"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Monthly Reminder Cycle",
      desc: "Automatic eligibility tracking sends reminders every 3 months to repeat donors"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Gamified College Leaderboard",
      desc: "Gopalan College leads with 487 donors, driving viral campus competition"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Live Hospital Inventory Map",
      desc: "Real-time blood availability across 15+ Bangalore hospitals with transfer suggestions"
    }
  ];

  const stats = [
    { value: "156", label: "Lives Saved This Month", color: "text-success" },
    { value: "< 10 min", label: "Average Response Time", color: "text-primary" },
    { value: "27,840", label: "College Points Earned", color: "text-warning" },
    { value: "100%", label: "Verified Donors", color: "text-info" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emergency/10 border border-emergency/30 rounded-full mb-4">
            <Bell className="w-4 h-4 text-emergency animate-pulse" />
            <span className="text-sm font-bold text-emergency">ACTIVE: 3 Critical Shortages in Bangalore</span>
          </div>
          
          <h1 className="text-6xl font-bold leading-tight">
            India's First <span className="text-transparent bg-clip-text bg-gradient-to-r from-emergency via-warning to-primary">Autonomous</span><br />
            Blood Economy System
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Predictive AI + Verified Donors + Auto-Alerts = Zero Blood Shortages.<br />
            Built for Bangalore. Scaled for India.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Button size="lg" onClick={() => navigate("/dashboard")} className="gap-2">
              <Activity className="w-5 h-5" />
              Launch Dashboard
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate("/gamification")} className="gap-2">
              <TrendingUp className="w-5 h-5" />
              View Leaderboard
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <div key={i} className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <p className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">Why LifeLink Grid Wins</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="glass rounded-xl p-6 hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bangalore Focus Section */}
        <div className="glass rounded-xl p-8 border-2 border-primary/30">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl flex-shrink-0">
              🏙️
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Built for Bangalore's Reality</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2 text-primary">Hospital Network Coverage:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>✓ Manipal Hospital (HAL Airport Road)</li>
                    <li>✓ Apollo Hospital (Bannerghatta Road)</li>
                    <li>✓ Fortis Hospital (Bannerghatta Road)</li>
                    <li>✓ FIMS Hospital (Sundarapuram, Coimbatore)</li>
                    <li>✓ 11+ more partner hospitals</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-primary">College Partnerships:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>🏆 Gopalan College of Engineering - 487 donors</li>
                    <li>✓ Rathinam Technical Campus - 342 donors</li>
                    <li>✓ VIT Vellore - 298 donors</li>
                    <li>✓ Drug/alcohol screening at campus health centers</li>
                    <li>✓ Monthly eligibility tracking for repeat donations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
