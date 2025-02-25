
import {
  BarChart3,
  Cloud,
  Droplet,
  Home,
  Settings,
  Sprout,
  Brain,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSidebar({ className }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: "Dashboard" },
    { icon: Sprout, label: "Soil Monitoring" },
    { icon: Droplet, label: "Irrigation" },
    { icon: Cloud, label: "Weather" },
    { icon: Brain, label: "AI Insights" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div
      className={cn(
        "flex h-screen w-20 flex-col items-center border-r border-soil-200/20 bg-white/10 backdrop-blur-lg",
        className
      )}
    >
      <div className="flex h-20 items-center justify-center">
        <div className="h-10 w-10 rounded-full bg-soil-500" />
      </div>
      <nav className="flex flex-1 flex-col items-center gap-4 p-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="group flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 text-soil-600 transition-all hover:bg-soil-500 hover:text-white"
          >
            <item.icon className="h-5 w-5" />
            <span className="absolute left-20 hidden rounded-md bg-soil-800 px-2 py-1 text-sm text-white opacity-0 transition-all group-hover:opacity-100">
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
