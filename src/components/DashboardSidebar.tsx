
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
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardSidebar({ className }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/" },
    { icon: Sprout, label: "Soil Monitoring", path: "/soil" },
    { icon: Droplet, label: "Irrigation", path: "/irrigation" },
    { icon: Cloud, label: "Weather", path: "/weather" },
    { icon: Brain, label: "AI Insights", path: "/insights" },
    { icon: BarChart3, label: "Analytics", path: "/analytics" },
    { icon: Settings, label: "Settings", path: "/settings" },
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
        {menuItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={cn(
              "group flex h-12 w-12 items-center justify-center rounded-xl bg-white/50 text-soil-600 transition-all hover:bg-soil-500 hover:text-white",
              location.pathname === item.path && "bg-soil-500 text-white"
            )}
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
