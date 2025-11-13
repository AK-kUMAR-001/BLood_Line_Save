import { Search, Shield, Award, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function BloodPassport() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleSearch = () => {
    if (searchQuery) setShowResult(true);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Blood Passport Verification</h1>
        <p className="text-muted-foreground">Blockchain-verified donor records with unforgeable certificates</p>
      </div>

      {/* Search Section */}
      <div className="glass rounded-xl p-6">
        <div className="flex gap-3">
          <Input
            placeholder="Enter Donor ID or WhatsApp Number..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="flex-1"
          />
          <Button onClick={handleSearch} size="lg" className="gap-2">
            <Search className="w-4 h-4" />
            Search
          </Button>
        </div>
      </div>

      {/* Result Display */}
      {showResult && (
        <div className="glass rounded-xl p-8 space-y-6 animate-in fade-in slide-in-from-bottom-4">
          {/* Certificate Header */}
          <div className="text-center border-b border-border pb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-success/20 rounded-full mb-4">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-sm font-bold text-success">BLOCKCHAIN VERIFIED</span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Digital Blood Passport</h2>
            <p className="text-muted-foreground">Certificate #BP-2024-7823</p>
          </div>

          {/* Donor Information */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Donor Name</label>
                <p className="text-xl font-bold">Rahul Kumar</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Blood Group</label>
                <p className="text-2xl font-bold text-emergency">O+</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Donor ID</label>
                <p className="font-mono text-sm">BD-KA-2024-7823</p>
              </div>
              <div>
                <label className="text-sm text-muted-foreground">Member Since</label>
                <p className="font-medium">January 2024</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center justify-center bg-medical p-6 rounded-lg border-2 border-border">
              <div className="w-48 h-48 bg-foreground/10 rounded-lg flex items-center justify-center mb-3">
                <QrCode className="w-32 h-32 text-foreground/30" />
              </div>
              <p className="text-xs text-muted-foreground text-center">Scan to verify on blockchain</p>
              <p className="text-xs font-mono text-muted-foreground mt-1">0x7a3b...2f9c</p>
            </div>
          </div>

          {/* Donation Statistics */}
          <div className="grid grid-cols-4 gap-4 pt-6 border-t border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-success">12</p>
              <p className="text-sm text-muted-foreground">Total Donations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">2.4L</p>
              <p className="text-sm text-muted-foreground">Units Donated</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-warning">36</p>
              <p className="text-sm text-muted-foreground">Lives Saved</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">⭐</p>
              <p className="text-sm text-muted-foreground">Life Saver</p>
            </div>
          </div>

          {/* Badges */}
          <div className="pt-6 border-t border-border">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-warning" />
              Achievements
            </h3>
            <div className="flex flex-wrap gap-3">
              {["First Donation", "5x Donor", "Life Saver", "Quick Responder", "College Champion"].map((badge) => (
                <div key={badge} className="px-4 py-2 bg-warning/20 border border-warning/30 rounded-full">
                  <span className="text-sm font-medium text-warning">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Blockchain Verification */}
          <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-success" />
              <div className="flex-1">
                <p className="font-bold text-success">Blockchain Verified</p>
                <p className="text-sm text-muted-foreground">
                  Transaction Hash: 0x7a3b4c2d8e9f1a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b2f9c
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Info Box */}
      {!showResult && (
        <div className="glass rounded-xl p-6">
          <h3 className="text-lg font-bold mb-3">How it works</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Every donation is recorded on blockchain - unforgeable and permanent</li>
            <li>• Donors receive a digital certificate with unique QR code</li>
            <li>• Hospitals can instantly verify donor history</li>
            <li>• Complete privacy - only verified details are shared</li>
          </ul>
        </div>
      )}
    </div>
  );
}
