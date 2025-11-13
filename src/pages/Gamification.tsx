import { Trophy, Star, Gift, TrendingUp } from "lucide-react";
export default function Gamification() {
  const colleges = [{
    name: "GOPALAN COLLEGE OF ENGINEERING - MANAGEMENT",
    donors: 487,
    donations: 1856,
    points: 27840,
    trend: "+24%",
    award: "🏆 Best Alumni Donors Award",
    impact: "Highest Social Impact - 156 Lives Saved This Month"
  }, {
    name: "RATHINAM TECHNICAL CAMPUS",
    donors: 342,
    donations: 1247,
    points: 18705,
    trend: "+12%"
  }, {
    name: "VIT Vellore",
    donors: 298,
    donations: 1089,
    points: 16335,
    trend: "+8%"
  }, {
    name: "BITS Pilani",
    donors: 276,
    donations: 982,
    points: 14730,
    trend: "+15%"
  }, {
    name: "IIT Bombay",
    donors: 254,
    donations: 891,
    points: 13365,
    trend: "+5%"
  }, {
    name: "NIT Trichy",
    donors: 231,
    donations: 823,
    points: 12345,
    trend: "+10%"
  }];
  const incentives = [{
    title: "Premium Health Insurance",
    desc: "₹5L coverage for top donors",
    icon: "🏥"
  }, {
    title: "Priority Medical Care",
    desc: "Skip queues at partner hospitals",
    icon: "⚡"
  }, {
    title: "Exclusive Events",
    desc: "Meet healthcare leaders",
    icon: "🎫"
  }, {
    title: "Tax Benefits",
    desc: "Section 80G deductions",
    icon: "💰"
  }];
  return <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Gamified Blood Economy</h1>
        <p className="text-muted-foreground">Compete, earn rewards, and save lives</p>
      </div>

      {/* Your Stats */}
      <div className="glass rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Your Profile</h2>
            <p className="text-muted-foreground">Rahul Kumar - IIT Madras</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-warning/20 rounded-full mb-2">
              <Star className="w-5 h-5 text-warning" />
              <span className="text-lg font-bold text-warning">Life Saver</span>
            </div>
            <p className="text-sm text-muted-foreground">Rank #47 nationally</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="text-center p-4 bg-success/10 rounded-lg border border-success/30">
            <p className="text-4xl font-bold text-success">1,200</p>
            <p className="text-sm text-muted-foreground mt-1">Total Points</p>
          </div>
          <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
            <p className="text-4xl font-bold text-primary">6</p>
            <p className="text-sm text-muted-foreground mt-1">Donations</p>
          </div>
          <div className="text-center p-4 bg-warning/10 rounded-lg border border-warning/30">
            <p className="text-4xl font-bold text-warning">2</p>
            <p className="text-sm text-muted-foreground mt-1">Lives Saved</p>
          </div>
          <div className="text-center p-4 bg-info/10 rounded-lg border border-info/30">
            <p className="text-4xl font-bold text-info">3</p>
            <p className="text-sm text-muted-foreground mt-1">Quick Response</p>
          </div>
        </div>
      </div>

      {/* College Leaderboard */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-warning" />
          College Leaderboard
        </h2>
        <div className="space-y-3">
          {colleges.map((college, i) => <div key={i} className={`p-5 rounded-lg border-2 transition-all hover:scale-[1.02] ${i === 0 ? "bg-gradient-to-r from-warning/20 via-warning/10 to-warning/20 border-warning shadow-lg shadow-warning/20" : i === 1 ? "bg-muted/50 border-border" : i === 2 ? "bg-warning/5 border-warning/20" : "bg-card border-border"}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold ${i === 0 ? "bg-warning text-warning-foreground animate-pulse" : i === 1 ? "bg-muted-foreground/20" : i === 2 ? "bg-warning/30" : "bg-muted"}`}>
                    {i === 0 ? "👑" : i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">{college.name}</h3>
                    {i === 0 && 'award' in college && <div className="flex flex-col gap-1 mt-1">
                        <p className="text-sm font-semibold text-warning">{college.award}</p>
                        <p className="text-xs text-success font-medium">{college.impact}</p>
                      </div>}
                    <p className="text-sm text-muted-foreground mt-1">
                      {college.donors} active donors • {college.donations} total donations
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-primary">{college.points.toLocaleString()}</p>
                  <p className="text-sm font-medium text-success flex items-center gap-1 justify-end">
                    <TrendingUp className="w-3 h-3" />
                    {college.trend}
                  </p>
                </div>
              </div>
            </div>)}
        </div>
      </div>

      {/* Incentives */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Gift className="w-6 h-6 text-primary" />
          Exclusive Incentives
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {incentives.map((incentive, i) => <div key={i} className="p-5 bg-primary/5 rounded-lg border border-primary/20 hover:bg-primary/10 transition-colors">
              <div className="flex items-start gap-3">
                <div className="text-4xl">{incentive.icon}</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{incentive.title}</h3>
                  <p className="text-sm text-muted-foreground">{incentive.desc}</p>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
}