import { AlertTriangle, Activity, Clock, Users, TrendingDown, MapPin, Send } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";

export default function Dashboard() {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [hospitalLocation, setHospitalLocation] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [urgencyLevel, setUrgencyLevel] = useState("high");

  const handleAlertDonors = () => {
    if (!hospitalLocation || !bloodType) {
      toast({
        title: "Missing Information",
        description: "Please enter hospital location and select blood type",
        variant: "destructive",
      });
      return;
    }

    // Simulate sending WhatsApp/SMS alerts
    const mockDonors = [
      { name: "Rajesh Kumar", phone: "+91 98765 43210", distance: "1.2 km", area: "Sundarapuram" },
      { name: "Priya Sharma", phone: "+91 98765 43211", distance: "1.8 km", area: "Sundarapuram" },
      { name: "Arun Vijay", phone: "+91 98765 43212", distance: "2.3 km", area: "Podanur" },
      { name: "Lakshmi Devi", phone: "+91 98765 43213", distance: "3.1 km", area: "Ganapathy" },
      { name: "Karthik Raja", phone: "+91 98765 43214", distance: "3.5 km", area: "Sundarapuram" },
    ];

    toast({
      title: "Emergency Alert Sent!",
      description: `${mockDonors.length} consenting ${bloodType} donors within 5km have been notified via WhatsApp & SMS`,
    });

    setAlertDialogOpen(false);
    setHospitalLocation("");
    setBloodType("");
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Alert Donors Dialog */}
      <Dialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Send className="w-5 h-5 text-emergency" />
              Send Emergency Donor Alert
            </DialogTitle>
            <DialogDescription>
              Send WhatsApp/SMS alerts to nearest consenting donors in your area
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="hospital">Hospital Location / Area</Label>
              <Input
                id="hospital"
                placeholder="e.g., FIMS Hospital, Sundarapuram"
                value={hospitalLocation}
                onChange={(e) => setHospitalLocation(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="blood-type">Blood Type Needed</Label>
              <Select value={bloodType} onValueChange={setBloodType}>
                <SelectTrigger id="blood-type">
                  <SelectValue placeholder="Select blood type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency Level</Label>
              <Select value={urgencyLevel} onValueChange={setUrgencyLevel}>
                <SelectTrigger id="urgency">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="critical">Critical (Within 30 min)</SelectItem>
                  <SelectItem value="high">High (Within 2 hours)</SelectItem>
                  <SelectItem value="medium">Medium (Within 6 hours)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="p-4 bg-info/10 rounded-lg border border-info/30">
              <p className="text-sm text-muted-foreground">
                <strong>How it works:</strong> The system will notify all consenting donors with matching blood type within 5km of your location via WhatsApp and SMS. Donors registered their consent during their last checkup.
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" onClick={() => setAlertDialogOpen(false)} className="flex-1">
              Cancel
            </Button>
            <Button onClick={handleAlertDonors} className="flex-1 bg-emergency hover:bg-emergency/90">
              <Send className="w-4 h-4 mr-2" />
              Send Alert
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* Critical Alert Banner */}
      <div className="bg-gradient-emergency rounded-xl p-6 glow-emergency animate-pulse-slow">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/20 rounded-lg">
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white mb-2">
              CRITICAL: A+ Blood Shortage Predicted
            </h2>
            <p className="text-white/90 text-lg mb-4">
              Manipal Hospital, HAL Road, Bangalore - Shortage expected in 4 days (Dec 10, 2025)
            </p>
            <div className="flex items-center gap-3">
              <Button variant="secondary" size="lg" className="bg-white text-emergency hover:bg-white/90">
                <MapPin className="w-4 h-4 mr-2" />
                View on Map
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white/20 text-white hover:bg-white/30"
                onClick={() => setAlertDialogOpen(true)}
              >
                <Send className="w-4 h-4 mr-2" />
                Alert Donors
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Lives Saved (30 days)"
          value="1,247"
          change="+18%"
          icon={Activity}
          variant="success"
        />
        <StatCard
          title="Avg Response Time"
          value="8.3 min"
          change="-42%"
          icon={Clock}
          variant="success"
        />
        <StatCard
          title="Active Donors"
          value="15,432"
          change="+156"
          icon={Users}
          variant="default"
        />
        <StatCard
          title="Critical Shortages"
          value="3"
          icon={TrendingDown}
          variant="emergency"
        />
      </div>

      {/* Shortage Predictions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-emergency" />
            Predicted Shortages (Next 7 Days)
          </h3>
          <div className="space-y-4">
            {[
              { hospital: "Manipal Hospital", type: "A+", days: 4, severity: "high" },
              { hospital: "Apollo Hospitals", type: "O-", days: 6, severity: "medium" },
              { hospital: "Fortis Hospital", type: "B+", days: 7, severity: "low" },
            ].map((shortage, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border ${
                  shortage.severity === "high"
                    ? "bg-emergency/10 border-emergency/30"
                    : shortage.severity === "medium"
                    ? "bg-warning/10 border-warning/30"
                    : "bg-info/10 border-info/30"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{shortage.hospital}</span>
                  <span className="text-2xl font-bold">{shortage.type}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Shortage in {shortage.days} days
                  </span>
                  <Button size="sm" variant="outline">
                    Take Action
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="glass rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              { action: "Emergency alert sent", detail: "15 O+ donors notified", time: "2 min ago", type: "emergency" },
              { action: "Green corridor activated", detail: "Apollo to Victoria Hospital", time: "8 min ago", type: "success" },
              { action: "Donation completed", detail: "Rahul Kumar - B+ at Manipal", time: "15 min ago", type: "success" },
              { action: "Transfer suggested", detail: "A+ from Fortis to Apollo", time: "22 min ago", type: "info" },
            ].map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === "emergency" ? "bg-emergency" :
                  activity.type === "success" ? "bg-success" : "bg-info"
                }`} />
                <div className="flex-1">
                  <p className="font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.detail}</p>
                </div>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
