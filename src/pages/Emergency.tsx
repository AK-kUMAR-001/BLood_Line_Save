import { Mic, AlertCircle, Phone, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Emergency() {
  const [activated, setActivated] = useState(false);

  const handleEmergencyActivation = () => {
    setActivated(true);
    // Simulate TTS response
    setTimeout(() => {
      const utterance = new SpeechSynthesisUtterance(
        "Emergency alert confirmed. 15 B negative donors have been notified. Green Corridor AI activated for Apollo Hospital."
      );
      window.speechSynthesis.speak(utterance);
    }, 500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Emergency Mode</h1>
        <p className="text-muted-foreground">Voice-activated crisis response system</p>
      </div>

      {/* Emergency Button */}
      <div className="glass rounded-xl p-12">
        <div className="text-center space-y-6">
          {!activated ? (
            <>
              <div className="flex justify-center">
                <button
                  onClick={handleEmergencyActivation}
                  className="w-64 h-64 bg-gradient-emergency rounded-full flex items-center justify-center glow-emergency hover:scale-105 transition-all active:scale-95 animate-pulse-slow"
                >
                  <Mic className="w-32 h-32 text-white" />
                </button>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Press for Emergency</h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Say: "I need B- blood at Apollo Hospital NOW"
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Voice Recognition Active</span>
                </div>
              </div>
            </>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
              <div className="flex justify-center">
                <div className="w-32 h-32 bg-success rounded-full flex items-center justify-center glow-success">
                  <AlertCircle className="w-20 h-20 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-success mb-4">Emergency Alert Activated</h2>
                <div className="space-y-4 text-left max-w-lg mx-auto">
                  <div className="p-4 bg-success/10 rounded-lg border border-success/30">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-success mt-1" />
                      <div>
                        <p className="font-bold text-success">Donor Alert Sent</p>
                        <p className="text-sm text-muted-foreground">15 B- donors within 5km notified via WhatsApp</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-success/10 rounded-lg border border-success/30">
                    <div className="flex items-start gap-3">
                      <Navigation className="w-5 h-5 text-success mt-1" />
                      <div>
                        <p className="font-bold text-success">GCAI Activated</p>
                        <p className="text-sm text-muted-foreground">Green Corridor established to Apollo Hospital, HAL Road</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Button size="lg" onClick={() => setActivated(false)} variant="outline">
                Reset
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <div className="glass rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4">How Emergency Mode Works</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div>
                <p className="font-medium">Voice Activation</p>
                <p className="text-sm text-muted-foreground">Press the red button and speak your emergency</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <div>
                <p className="font-medium">AI Processing</p>
                <p className="text-sm text-muted-foreground">System extracts blood type and location</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div>
                <p className="font-medium">Instant Alerts</p>
                <p className="text-sm text-muted-foreground">Nearby donors notified via WhatsApp</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary">4</span>
              </div>
              <div>
                <p className="font-medium">GCAI Activation</p>
                <p className="text-sm text-muted-foreground">Green corridor created automatically</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
