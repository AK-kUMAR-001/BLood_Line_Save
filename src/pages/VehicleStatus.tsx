import { UserCheck, Clock, AlertCircle, CheckCircle2, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function VehicleStatus() {
  const [filter, setFilter] = useState("all");
  
  const donorResponses = [
    { 
      id: "DNR-1547", 
      name: "Rajesh Kumar", 
      bloodType: "A+", 
      location: "Sundarapuram, 1.2 km", 
      status: "accepted", 
      responseTime: "45 sec",
      screening: "verified",
      lastDonation: "98 days ago",
      eligible: true,
      college: "Gopalan College"
    },
    { 
      id: "DNR-2341", 
      name: "Priya Sharma", 
      bloodType: "A+", 
      location: "Podanur, 2.8 km", 
      status: "accepted", 
      responseTime: "1 min 12 sec",
      screening: "verified",
      lastDonation: "104 days ago",
      eligible: true,
      college: "Rathinam Technical Campus"
    },
    { 
      id: "DNR-3892", 
      name: "Amit Patel", 
      bloodType: "A+", 
      location: "Ganapathy, 3.5 km", 
      status: "pending", 
      responseTime: "sent 30 sec ago",
      screening: "verified",
      lastDonation: "89 days ago",
      eligible: true,
      college: "Gopalan College"
    },
    { 
      id: "DNR-4521", 
      name: "Sunita Reddy", 
      bloodType: "A+", 
      location: "RS Puram, 4.1 km", 
      status: "declined", 
      responseTime: "2 min 5 sec",
      screening: "verified",
      lastDonation: "91 days ago",
      eligible: true,
      college: "VIT Vellore"
    },
    { 
      id: "DNR-5634", 
      name: "Vijay Singh", 
      bloodType: "A+", 
      location: "Peelamedu, 5.2 km", 
      status: "pending", 
      responseTime: "sent 1 min ago",
      screening: "verified",
      lastDonation: "112 days ago",
      eligible: true,
      college: "Rathinam Technical Campus"
    },
    { 
      id: "DNR-6789", 
      name: "Kavya Menon", 
      bloodType: "A+", 
      location: "Singanallur, 2.3 km", 
      status: "accepted", 
      responseTime: "38 sec",
      screening: "verified",
      lastDonation: "95 days ago",
      eligible: true,
      college: "Gopalan College"
    },
    { 
      id: "DNR-7892", 
      name: "Arjun Nair", 
      bloodType: "A+", 
      location: "Saibaba Colony, 6.8 km", 
      status: "ineligible", 
      responseTime: "-",
      screening: "failed",
      lastDonation: "45 days ago",
      eligible: false,
      college: "VIT Vellore"
    }
  ];

  const filteredDonors = donorResponses.filter(d => {
    if (filter === "accepted") return d.status === "accepted";
    if (filter === "pending") return d.status === "pending";
    if (filter === "eligible") return d.eligible;
    return true;
  });

  const acceptedCount = donorResponses.filter(d => d.status === "accepted").length;
  const pendingCount = donorResponses.filter(d => d.status === "pending").length;
  const eligibleCount = donorResponses.filter(d => d.eligible).length;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Donor Response Tracking</h1>
        <p className="text-muted-foreground">Real-time monitoring of emergency donor alerts</p>
      </div>

      {/* Alert Context Banner */}
      <div className="glass rounded-xl p-6 border-2 border-emergency/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold mb-1">Active Emergency Alert</h3>
            <p className="text-sm text-muted-foreground">Blood Type: <span className="font-bold text-emergency">A+</span> | Hospital: <span className="font-bold">FIMS Hospital, Sundarapuram</span> | Urgency: <span className="font-bold text-emergency">HIGH</span></p>
            <p className="text-xs text-muted-foreground mt-2">Sent to 15 verified donors within 10 km radius • 3 mins ago</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-success">{acceptedCount}</p>
            <p className="text-sm text-muted-foreground">Confirmed Donors</p>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="glass rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Total Notified</span>
            <UserCheck className="w-4 h-4 text-primary" />
          </div>
          <p className="text-3xl font-bold text-primary">{donorResponses.length}</p>
        </div>
        <div className="glass rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Accepted</span>
            <CheckCircle2 className="w-4 h-4 text-success" />
          </div>
          <p className="text-3xl font-bold text-success">{acceptedCount}</p>
        </div>
        <div className="glass rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Pending</span>
            <Clock className="w-4 h-4 text-warning" />
          </div>
          <p className="text-3xl font-bold text-warning">{pendingCount}</p>
        </div>
        <div className="glass rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">Verified Eligible</span>
            <Filter className="w-4 h-4 text-info" />
          </div>
          <p className="text-3xl font-bold text-info">{eligibleCount}</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-3">
        <Button 
          variant={filter === "all" ? "default" : "outline"} 
          onClick={() => setFilter("all")}
        >
          All Donors
        </Button>
        <Button 
          variant={filter === "accepted" ? "default" : "outline"} 
          onClick={() => setFilter("accepted")}
        >
          Accepted Only
        </Button>
        <Button 
          variant={filter === "pending" ? "default" : "outline"} 
          onClick={() => setFilter("pending")}
        >
          Pending
        </Button>
        <Button 
          variant={filter === "eligible" ? "default" : "outline"} 
          onClick={() => setFilter("eligible")}
        >
          Verified Eligible
        </Button>
      </div>

      {/* Donor Response List */}
      <div className="space-y-3">
        {filteredDonors.map((donor) => (
          <div
            key={donor.id}
            className={`glass rounded-xl p-6 transition-all hover:scale-[1.01] ${
              donor.status === "accepted" ? "border-2 border-success/30 glow-success" :
              donor.status === "pending" ? "border-2 border-warning/30" :
              donor.status === "ineligible" ? "border-2 border-muted opacity-60" :
              "border border-border"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                {/* Donor Icon */}
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl ${
                  donor.status === "accepted" ? "bg-success/20" :
                  donor.status === "pending" ? "bg-warning/20" :
                  donor.status === "ineligible" ? "bg-muted" :
                  "bg-emergency/20"
                }`}>
                  {donor.status === "accepted" ? "✅" : 
                   donor.status === "pending" ? "⏳" :
                   donor.status === "ineligible" ? "🚫" : "❌"}
                </div>

                {/* Donor Info */}
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-bold">{donor.name}</h3>
                    <div className="px-3 py-1 rounded-full text-xs font-bold bg-primary/20 text-primary">
                      {donor.bloodType}
                    </div>
                    {donor.screening === "verified" && (
                      <div className="px-3 py-1 rounded-full text-xs font-bold bg-success/20 text-success flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Drug-Free Verified
                      </div>
                    )}
                    {donor.screening === "failed" && (
                      <div className="px-3 py-1 rounded-full text-xs font-bold bg-emergency/20 text-emergency flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        Screening Failed
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{donor.id} • {donor.college}</p>
                  <p className="font-medium">{donor.location}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Last donation: {donor.lastDonation} • {donor.eligible ? "Eligible now" : "Not eligible yet"}
                  </p>
                </div>
              </div>

              {/* Status */}
              <div className="text-right">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-2 ${
                  donor.status === "accepted" ? "bg-success/20 border border-success/30" :
                  donor.status === "pending" ? "bg-warning/20 border border-warning/30" :
                  donor.status === "ineligible" ? "bg-muted" :
                  "bg-emergency/20 border border-emergency/30"
                }`}>
                  {donor.status === "accepted" && <CheckCircle2 className="w-5 h-5 text-success" />}
                  {donor.status === "pending" && <Clock className="w-5 h-5 text-warning" />}
                  {donor.status === "declined" && <AlertCircle className="w-5 h-5 text-emergency" />}
                  {donor.status === "ineligible" && <AlertCircle className="w-5 h-5 text-muted-foreground" />}
                  <span className={`font-bold uppercase text-sm ${
                    donor.status === "accepted" ? "text-success" :
                    donor.status === "pending" ? "text-warning" :
                    donor.status === "ineligible" ? "text-muted-foreground" :
                    "text-emergency"
                  }`}>
                    {donor.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Response: {donor.responseTime}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drug Screening System Explanation */}
      <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Shield className="w-5 h-5 text-success" />
          College-Based Drug/Alcohol Screening System
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-success/10 rounded-lg border border-success/30">
            <p className="font-semibold mb-2 text-success">How It Works:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Students undergo drug/alcohol testing during routine health checkups at campus medical centers</li>
              <li>✓ Only students who pass screening are registered as verified donors in the system</li>
              <li>✓ Screening status is stored in database with timestamp and validity period</li>
              <li>✓ Regular re-screening ensures ongoing compliance and safety</li>
            </ul>
          </div>
          <div className="p-4 bg-info/10 rounded-lg border border-info/30">
            <p className="font-semibold mb-2 text-info">Benefits:</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>✓ Ensures blood safety and reduces contamination risk</li>
              <li>✓ Builds trust with hospitals and recipients</li>
              <li>✓ Regulatory compliance with health standards</li>
              <li>✓ Easy implementation at campus health centers</li>
              <li>✓ Real-time filtering: "80 verified, 20 ineligible"</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Shield({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}