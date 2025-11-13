import { Play, Square, RotateCcw, Lightbulb, Target, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Simulations() {
  const [isRunning, setIsRunning] = useState(false);
  const [phase, setPhase] = useState(0);
  const [ambulanceDistance, setAmbulanceDistance] = useState(500);
  const [soundLevel, setSoundLevel] = useState(0);
  const [vehiclesMoved, setVehiclesMoved] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setAmbulanceDistance(prev => {
        const newDist = Math.max(0, prev - 50);
        
        setSoundLevel(Math.min(100, ((500 - newDist) / 500) * 100));
        
        if (newDist <= 0) {
          setPhase(4);
          clearInterval(interval);
          setIsRunning(false);
          setTimeout(() => {
            setVehiclesMoved(false);
            setAmbulanceDistance(500);
            setSoundLevel(0);
            setPhase(0);
          }, 3000);
        } else if (newDist <= 100 && !vehiclesMoved) {
          setPhase(3);
          setVehiclesMoved(true);
        } else if (newDist <= 200) {
          setPhase(2);
        } else if (newDist <= 350) {
          setPhase(1);
        }
        
        return newDist;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [isRunning, vehiclesMoved]);

  const startSimulation = () => {
    setIsRunning(true);
    setPhase(0);
    setAmbulanceDistance(500);
    setSoundLevel(0);
    setVehiclesMoved(false);
  };

  const stopSimulation = () => {
    setIsRunning(false);
    setPhase(0);
    setAmbulanceDistance(500);
    setSoundLevel(0);
    setVehiclesMoved(false);
  };

  const phases = [
    { 
      name: "Normal Traffic Flow", 
      desc: "Standard traffic signal cycle at MG Road intersection",
      explanation: "All vehicles moving normally. Traffic signal operating on preset timing."
    },
    { 
      name: "Ambulance Detected - 350m Away", 
      desc: "GPS signal received from emergency vehicle approaching from North",
      explanation: "🚑 System Alert: Ambulance GPS detected. Monitoring distance and route in real-time."
    },
    { 
      name: "Green Corridor Preparing - 200m Away", 
      desc: "All signals turn RED for safety clearance. Siren audible to nearby vehicles.",
      explanation: "⚠️ Safety Phase: Clearing intersection. Sound alert intensifying - vehicles prepare to move aside."
    },
    { 
      name: "Clear Path Activated - 100m Away", 
      desc: "North-South GREEN. Vehicles moved to road sides. Ambulance has clear corridor.",
      explanation: "✅ Green Corridor Active: All vehicles safely moved aside. Ambulance proceeding with priority access."
    },
    { 
      name: "Ambulance Passed - Restoring Normal Flow", 
      desc: "Emergency vehicle crossed safely. Returning to standard traffic cycle.",
      explanation: "✓ Success: Ambulance crossed in 15 seconds. Lives saved. System auto-reset complete."
    },
  ];

  const getSignalState = (direction: 'north' | 'south' | 'east' | 'west') => {
    if (phase === 0) return direction === 'north' || direction === 'south' ? 'green' : 'red';
    if (phase === 1) return direction === 'north' || direction === 'south' ? 'green' : 'red';
    if (phase === 2) return 'red';
    if (phase === 3) return direction === 'north' || direction === 'south' ? 'green' : 'red';
    if (phase === 4) return 'yellow';
    return 'red';
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Green Corridor Live Simulation</h1>
        <p className="text-muted-foreground">Real-time demonstration of IoT traffic preemption system</p>
      </div>

      <div className="glass rounded-xl p-6 border-2 border-primary/30">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Why Bangalore Needs This</h3>
            <p className="text-sm text-muted-foreground mb-3">
              With 400+ traffic signals and severe congestion, ambulances lose <span className="font-bold text-emergency">8-12 minutes</span> at signals. 
              Our IoT system creates automatic <span className="font-bold text-success">green corridors</span> saving critical time.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emergency/10 rounded border border-emergency/30">
                <p className="font-semibold text-emergency mb-1">❌ Current System:</p>
                <p className="text-muted-foreground">Manual calls → Traffic police → 20+ min delays → Lives lost</p>
              </div>
              <div className="p-3 bg-success/10 rounded border border-success/30">
                <p className="font-semibold text-success mb-1">✓ LifeLink Grid:</p>
                <p className="text-muted-foreground">Auto GPS → Instant green → Under 10 min → Lives saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold mb-1">Live Demonstration</h2>
            <p className="text-sm text-muted-foreground">
              {phases[phase]?.explanation}
            </p>
          </div>
          <div className="flex gap-3">
            {!isRunning ? (
              <Button onClick={startSimulation} size="lg" className="gap-2">
                <Play className="w-4 h-4" />
                Start Simulation
              </Button>
            ) : (
              <Button onClick={stopSimulation} size="lg" variant="destructive" className="gap-2">
                <Square className="w-4 h-4" />
                Stop
              </Button>
            )}
            <Button onClick={stopSimulation} size="lg" variant="outline" className="gap-2">
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>

        {isRunning && soundLevel > 0 && (
          <div className="p-4 bg-warning/10 rounded-lg border border-warning/30 mb-4">
            <div className="flex items-center gap-3">
              <Volume2 className={`w-6 h-6 text-warning ${soundLevel > 50 ? 'animate-pulse' : ''}`} />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-semibold">🔊 Emergency Siren Volume</p>
                  <p className="text-xs text-muted-foreground">{Math.round(soundLevel)}% | {ambulanceDistance}m away</p>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-warning rounded-full h-2 transition-all duration-200"
                    style={{ width: `${soundLevel}%` }}
                  />
                </div>
              </div>
            </div>
            {soundLevel > 70 && (
              <p className="text-xs text-warning mt-2 font-medium">⚠️ Loud siren detected! Vehicles moving to road sides...</p>
            )}
          </div>
        )}
      </div>

      <div className="glass rounded-xl p-12">
        <div className="relative w-full aspect-square max-w-2xl mx-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-40 h-full bg-muted/40 border-x-4 border-dashed border-muted-foreground/30">
              <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-warning/50 border-x border-warning/30" style={{ transform: 'translateX(-50%)' }} />
            </div>
            
            <div className="absolute h-40 w-full bg-muted/40 border-y-4 border-dashed border-muted-foreground/30">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-warning/50 border-y border-warning/30" style={{ transform: 'translateY(-50%)' }} />
            </div>
            
            <div className="absolute w-40 h-40 bg-muted/60 border-2 border-dashed border-muted-foreground/40" />

            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <TrafficLight direction="North" state={getSignalState('north')} />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <TrafficLight direction="South" state={getSignalState('south')} />
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2">
              <TrafficLight direction="East" state={getSignalState('east')} />
            </div>
            <div className="absolute -left-4 top-1/2 -translate-y-1/2">
              <TrafficLight direction="West" state={getSignalState('west')} />
            </div>

            {isRunning && (
              <div 
                className="absolute transition-all duration-200 ease-linear"
                style={{
                  top: `${Math.max(10, (ambulanceDistance / 500) * 40)}%`,
                  left: '50%',
                  transform: 'translateX(-50%)'
                }}
              >
                <div className={`w-16 h-20 bg-emergency rounded-lg flex items-center justify-center text-3xl ${soundLevel > 50 ? 'glow-emergency animate-pulse' : ''} shadow-lg relative`}>
                  🚑
                  {soundLevel > 30 && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-warning rounded-full flex items-center justify-center animate-pulse">
                      <Volume2 className="w-3 h-3 text-warning-foreground" />
                    </div>
                  )}
                </div>
              </div>
            )}

            <div 
              className="absolute top-1/2 transition-all duration-500"
              style={{
                right: vehiclesMoved ? '25%' : '35%',
                transform: 'translateY(-150%)'
              }}
            >
              <div className="w-12 h-8 bg-info rounded text-xl flex items-center justify-center shadow">
                🚗
              </div>
            </div>

            <div 
              className="absolute top-1/2 transition-all duration-500"
              style={{
                left: vehiclesMoved ? '25%' : '35%',
                transform: 'translateY(50%)'
              }}
            >
              <div className="w-12 h-8 bg-success rounded text-xl flex items-center justify-center shadow transform rotate-180">
                🚗
              </div>
            </div>

            <div 
              className="absolute top-1/2 transition-all duration-500"
              style={{
                right: vehiclesMoved ? '28%' : '40%',
                transform: 'translateY(80%)'
              }}
            >
              <div className="w-8 h-6 bg-warning/80 rounded text-base flex items-center justify-center shadow">
                🏍️
              </div>
            </div>

            <div 
              className="absolute top-1/2 transition-all duration-500"
              style={{
                left: vehiclesMoved ? '28%' : '40%',
                transform: 'translateY(-220%)'
              }}
            >
              <div className="w-8 h-6 bg-primary/80 rounded text-base flex items-center justify-center shadow transform rotate-180">
                🏍️
              </div>
            </div>
          </div>
        </div>

        {phase > 0 && (
          <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30 text-center">
            <p className="font-bold text-primary mb-1">{phases[phase]?.name}</p>
            <p className="text-sm text-muted-foreground">{phases[phase]?.desc}</p>
          </div>
        )}
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-warning" />
          How The System Works - 5 Automated Steps
        </h3>
        <div className="space-y-2">
          {phases.map((p, i) => (
            <div
              key={i}
              className={`p-4 rounded-lg border transition-all ${
                phase === i ? "bg-primary/10 border-primary/30 scale-[1.02]" : "bg-card border-border opacity-60"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 ${
                  phase === i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4">Technical Implementation</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="font-semibold mb-2 text-primary">📡 IoT Signal Controller:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Raspberry Pi 4 with relay module</li>
              <li>• 4G/5G modem for real-time connectivity</li>
              <li>• MQTT protocol (50ms latency)</li>
              <li>• Battery backup for 24/7 operation</li>
              <li>• Encrypted communication (AES-256)</li>
            </ul>
          </div>
          <div className="p-4 bg-card rounded-lg border border-border">
            <p className="font-semibold mb-2 text-primary">🚑 Ambulance GPS System:</p>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Real-time GPS tracking (1-sec updates)</li>
              <li>• Distance calculation to all signals ahead</li>
              <li>• In-cab tablet shows green corridor status</li>
              <li>• Automatic trigger when within 500m</li>
              <li>• Driver gets confirmation: "Signal GREEN"</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-success/10 rounded-lg border border-success/30">
          <p className="text-sm font-semibold text-success mb-1">🎯 Real-World Impact for Bangalore:</p>
          <p className="text-sm text-muted-foreground">
            By eliminating 8-12 minutes of signal delays across the city's 400+ traffic lights, this system can potentially 
            <span className="font-bold text-success"> save 50+ lives per month</span> in emergency medical situations. 
            Every second saved means a life saved.
          </p>
        </div>
      </div>

      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4">🏆 Why This System Beats Others</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
            <p className="font-bold text-primary mb-2">✓ Fully Automated</p>
            <p className="text-sm text-muted-foreground">No manual calls needed. GPS triggers everything automatically when ambulance is 500m away.</p>
          </div>
          <div className="p-4 bg-success/10 rounded-lg border border-success/30">
            <p className="font-bold text-success mb-2">✓ Driver-Friendly</p>
            <p className="text-sm text-muted-foreground">In-cab display shows which signals are green ahead. Drivers know the path is clear before they reach.</p>
          </div>
          <div className="p-4 bg-warning/10 rounded-lg border border-warning/30">
            <p className="font-bold text-warning mb-2">✓ Public Safety</p>
            <p className="text-sm text-muted-foreground">All signals turn RED first to clear intersection safely. Sound alerts warn nearby vehicles to move aside.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrafficLight({ direction, state }: { direction: string; state: string }) {
  return (
    <div className="glass rounded-lg p-2 shadow-lg">
      <p className="text-[10px] font-bold text-center mb-1">{direction}</p>
      <div className="space-y-1">
        <div className={`w-6 h-6 rounded-full border border-border transition-all ${
          state === "red" ? "bg-emergency shadow-lg shadow-emergency/50" : "bg-muted/50"
        }`} />
        <div className={`w-6 h-6 rounded-full border border-border transition-all ${
          state === "yellow" ? "bg-warning shadow-lg shadow-warning/50" : "bg-muted/50"
        }`} />
        <div className={`w-6 h-6 rounded-full border border-border transition-all ${
          state === "green" ? "bg-success shadow-lg shadow-success/50" : "bg-muted/50"
        }`} />
      </div>
    </div>
  );
}
