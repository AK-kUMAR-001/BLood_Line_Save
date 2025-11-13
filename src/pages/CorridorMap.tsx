import { Navigation, MapPin, Clock, Activity } from "lucide-react";

export default function CorridorMap() {
  const ambulances = [
    { id: "AMB-001", status: "active", currentSignal: "Signal 3", location: "MG Road", destination: "Manipal Hospital", eta: "4 min", speed: "65 km/h" },
    { id: "AMB-002", status: "active", currentSignal: "Signal 7", location: "Whitefield", destination: "Apollo Hospital", eta: "8 min", speed: "72 km/h" },
  ];

  const signals = [
    { id: 1, name: "MG Road Junction", status: "green", ambulance: "AMB-001", distance: "200m" },
    { id: 2, name: "Trinity Circle", status: "preparing", ambulance: "AMB-001", distance: "800m" },
    { id: 3, name: "HAL Junction", status: "normal", ambulance: null, distance: "2.1km" },
    { id: 4, name: "Domlur Signal", status: "normal", ambulance: null, distance: "3.5km" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Green Corridor AI - Control Room</h1>
        <p className="text-muted-foreground">Real-time GPS tracking and traffic signal preemption</p>
      </div>

      {/* Active Ambulances */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Activity className="w-5 h-5 text-success" />
          Active Ambulances
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {ambulances.map((amb) => (
            <div key={amb.id} className="p-5 bg-success/10 rounded-lg border-2 border-success/30 glow-success">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{amb.id}</h3>
                  <p className="text-sm text-muted-foreground">{amb.location}</p>
                </div>
                <div className="px-3 py-1 bg-success/20 rounded-full">
                  <span className="text-xs font-bold text-success uppercase">{amb.status}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-muted-foreground">Current Signal</p>
                  <p className="font-bold">{amb.currentSignal}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Speed</p>
                  <p className="font-bold">{amb.speed}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Destination</p>
                  <p className="font-bold">{amb.destination}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">ETA</p>
                  <p className="font-bold text-success">{amb.eta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map Visualization */}
      <div className="glass rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-primary" />
          Live Route Map
        </h2>
        <div className="relative h-96 bg-gradient-to-br from-primary/5 to-success/5 rounded-lg border-2 border-border overflow-hidden">
          {/* Simulated Map with Route */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full max-w-3xl px-12">
              {/* Route Line */}
              <div className="absolute top-1/2 left-12 right-12 h-2 bg-success/30 rounded-full -translate-y-1/2">
                <div className="h-full w-1/3 bg-gradient-success rounded-full animate-pulse" />
              </div>
              
              {/* Signals */}
              <div className="relative flex justify-between items-center">
                {signals.map((signal) => (
                  <div key={signal.id} className="flex flex-col items-center gap-2">
                    <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                      signal.status === "green" ? "bg-success border-success shadow-lg shadow-success/50" :
                      signal.status === "preparing" ? "bg-warning border-warning shadow-lg shadow-warning/50 animate-pulse" :
                      "bg-muted border-border"
                    }`}>
                      <MapPin className={`w-8 h-8 ${
                        signal.status === "green" ? "text-white" :
                        signal.status === "preparing" ? "text-white" :
                        "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="text-center">
                      <p className="text-xs font-bold">{signal.name}</p>
                      <p className="text-xs text-muted-foreground">{signal.distance}</p>
                      {signal.ambulance && (
                        <div className="mt-1 px-2 py-0.5 bg-success/20 rounded text-xs font-bold text-success">
                          {signal.status === "green" ? "PASSING" : "READY"}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Ambulance Icon */}
              <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2">
                <div className="relative">
                  <div className="w-12 h-12 bg-emergency rounded-lg flex items-center justify-center rotate-90 shadow-lg glow-emergency animate-pulse">
                    <Activity className="w-8 h-8 text-white -rotate-90" />
                  </div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <div className="px-2 py-1 bg-emergency rounded text-xs font-bold text-white">
                      AMB-001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-success" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg. Transit Time</p>
              <p className="text-2xl font-bold text-success">6.8 min</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">↓ 73% vs manual</p>
        </div>
        
        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Navigation className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Signals Controlled</p>
              <p className="text-2xl font-bold">247</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Across Bangalore</p>
        </div>
        
        <div className="glass rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-warning/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-warning" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Active Corridors</p>
              <p className="text-2xl font-bold">2</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground">Real-time</p>
        </div>
      </div>
    </div>
  );
}
