
import { DashboardCard } from "./DashboardCard";

export function SoilHealthCard() {
  const metrics = [
    { label: "Moisture", value: "45%", color: "bg-blue-500" },
    { label: "pH Level", value: "6.8", color: "bg-green-500" },
    { label: "Temperature", value: "22°C", color: "bg-orange-500" },
    { label: "Nutrients", value: "Good", color: "bg-purple-500" },
  ];

  return (
    <DashboardCard title="Soil Health" className="h-full">
      <div className="grid grid-cols-2 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`h-2 w-2 rounded-full ${metric.color}`} />
            <div>
              <p className="text-sm font-medium">{metric.value}</p>
              <p className="text-xs text-soil-600">{metric.label}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
