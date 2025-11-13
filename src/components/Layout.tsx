import { Link, useLocation } from "react-router-dom";
import { Activity, Map, CreditCard, Trophy, AlertCircle, Navigation, Truck, Play, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Dashboard", path: "/dashboard", icon: Activity },
  { name: "Live Map", path: "/live-map", icon: Map },
  { name: "Blood Passport", path: "/blood-passport", icon: CreditCard },
  { name: "Gamification", path: "/gamification", icon: Trophy },
  { name: "Emergency", path: "/emergency", icon: AlertCircle },
  { name: "Corridor Map", path: "/corridor-map", icon: Navigation },
  { name: "Donor Responses", path: "/vehicle-status", icon: Truck },
  { name: "Green Corridor Demo", path: "/simulations", icon: Play },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-sidebar border-b border-sidebar-border">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">LifeLink Grid</h1>
              <p className="text-xs text-sidebar-foreground/60">Emergency Response Network</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="px-3 py-1 bg-success/20 rounded-full">
              <span className="text-xs font-medium text-success">● System Active</span>
            </div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center gap-1 px-6 pb-3 overflow-x-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 px-6 pb-6">
        {children}
      </main>
    </div>
  );
}
