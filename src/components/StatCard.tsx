import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: LucideIcon;
  variant?: "default" | "emergency" | "success" | "warning";
}

export default function StatCard({ title, value, change, icon: Icon, variant = "default" }: StatCardProps) {
  const variants = {
    default: "bg-card border-border",
    emergency: "bg-emergency/10 border-emergency/20 glow-emergency",
    success: "bg-success/10 border-success/20 glow-success",
    warning: "bg-warning/10 border-warning/20",
  };

  const iconVariants = {
    default: "bg-primary/10 text-primary",
    emergency: "bg-emergency/20 text-emergency",
    success: "bg-success/20 text-success",
    warning: "bg-warning/20 text-warning",
  };

  return (
    <div className={cn("rounded-xl border p-6 transition-all hover:scale-105", variants[variant])}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <div className={cn("p-2 rounded-lg", iconVariants[variant])}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold">{value}</h3>
        {change && (
          <span className={cn(
            "text-sm font-medium",
            change.startsWith("+") ? "text-success" : "text-emergency"
          )}>
            {change}
          </span>
        )}
      </div>
    </div>
  );
}
