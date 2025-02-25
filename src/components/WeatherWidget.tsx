
import { Cloud, Droplets, Sun, Wind } from "lucide-react";
import { DashboardCard } from "./DashboardCard";

export function WeatherWidget() {
  return (
    <DashboardCard title="Weather Conditions" className="h-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <div>
              <p className="text-2xl font-semibold">24°C</p>
              <p className="text-sm text-soil-600">Sunny</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">High: 27°C</p>
            <p className="text-sm text-soil-600">Low: 18°C</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <Wind className="h-5 w-5 text-soil-500" />
            <div>
              <p className="text-sm font-medium">12 km/h</p>
              <p className="text-xs text-soil-600">Wind</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-soil-500" />
            <div>
              <p className="text-sm font-medium">65%</p>
              <p className="text-xs text-soil-600">Humidity</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="h-5 w-5 text-soil-500" />
            <div>
              <p className="text-sm font-medium">10%</p>
              <p className="text-xs text-soil-600">Rain</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
