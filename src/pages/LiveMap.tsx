import { MapPin, AlertCircle, CheckCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LiveMap() {
  const hospitals = [
    { name: "Manipal Hospital", address: "HAL Airport Rd, Bangalore", blood: { "A+": 2, "B+": 5, "O+": 1, "AB+": 3, "A-": 0, "B-": 2, "O-": 0, "AB-": 1 }, lat: 12.9575, lng: 77.6514, status: "critical" },
    { name: "Apollo Hospitals", address: "Bannerghatta Rd, Bangalore", blood: { "A+": 8, "B+": 6, "O+": 10, "AB+": 4, "A-": 3, "B-": 2, "O-": 1, "AB-": 2 }, lat: 12.9116, lng: 77.5946, status: "good" },
    { name: "Fortis Hospital", address: "Cunningham Rd, Bangalore", blood: { "A+": 12, "B+": 9, "O+": 15, "AB+": 6, "A-": 4, "B-": 3, "O-": 2, "AB-": 3 }, lat: 12.9856, lng: 77.5938, status: "good" },
    { name: "Columbia Asia", address: "Kirloskar Business Park, Hebbal", blood: { "A+": 6, "B+": 4, "O+": 7, "AB+": 2, "A-": 2, "B-": 1, "O-": 1, "AB-": 1 }, lat: 13.0358, lng: 77.5919, status: "warning" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Live Blood Availability Map</h1>
          <p className="text-muted-foreground">Real-time inventory across all hospitals in Bangalore</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1 bg-success/20 rounded-full">
            <CheckCircle className="w-4 h-4 text-success" />
            <span className="text-sm font-medium text-success">Good</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-warning/20 rounded-full">
            <AlertTriangle className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium text-warning">Low</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-emergency/20 rounded-full">
            <AlertCircle className="w-4 h-4 text-emergency" />
            <span className="text-sm font-medium text-emergency">Critical</span>
          </div>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="glass rounded-xl p-6 h-[500px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-success/5" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="grid grid-cols-2 gap-8">
            {hospitals.map((hospital, i) => (
              <div
                key={i}
                className={`p-4 rounded-lg border-2 ${
                  hospital.status === "critical"
                    ? "bg-emergency/10 border-emergency animate-pulse"
                    : hospital.status === "warning"
                    ? "bg-warning/10 border-warning"
                    : "bg-success/10 border-success"
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className={`w-5 h-5 mt-1 ${
                    hospital.status === "critical" ? "text-emergency" :
                    hospital.status === "warning" ? "text-warning" : "text-success"
                  }`} />
                  <div>
                    <h3 className="font-bold">{hospital.name}</h3>
                    <p className="text-xs text-muted-foreground">{hospital.address}</p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {Object.entries(hospital.blood).map(([type, units]) => (
                    <div key={type} className={`text-center p-2 rounded ${
                      units === 0 ? "bg-emergency/20" : units < 3 ? "bg-warning/20" : "bg-success/20"
                    }`}>
                      <div className="text-xs font-bold">{type}</div>
                      <div className="text-lg font-bold">{units}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Transfer Suggestions */}
      <div className="glass rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4">🤖 Intelligent Transfer Suggestions</h3>
        <div className="space-y-3">
          <div className="p-4 rounded-lg bg-info/10 border border-info/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">A+ Transfer Recommended</p>
                <p className="text-sm text-muted-foreground">
                  Fortis Hospital (12 units) → Manipal Hospital (2 units) - 4.2 km
                </p>
              </div>
              <Button variant="default">Initiate Transfer</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
