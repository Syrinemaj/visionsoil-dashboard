
import { useState } from "react";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SoilHealthCard } from "@/components/SoilHealthCard";
import { WeatherWidget } from "@/components/WeatherWidget";
import { DashboardCard } from "@/components/DashboardCard";
import { RobotCard } from "@/components/RobotCard";
import { FarmCard } from "@/components/FarmCard";
import { Search } from "lucide-react";

const Index = () => {
  const [step, setStep] = useState<"robots" | "farms" | "dashboard">("robots");
  const [selectedRobot, setSelectedRobot] = useState<string | null>(null);
  const [selectedFarm, setSelectedFarm] = useState<string | null>(null);

  // Sample data
  const robots = [
    { name: "AgriBot-1", status: "available", connectivity: "online" },
    { name: "AgriBot-2", status: "in-use", connectivity: "online" },
    { name: "AgriBot-3", status: "maintenance", connectivity: "offline" },
    { name: "AgriBot-4", status: "available", connectivity: "online" },
  ] as const;

  const farms = [
    {
      name: "Green Valley Farm",
      owner: "John Smith",
      location: "California, USA",
      coordinates: "37.7749° N, 122.4194° W",
    },
    {
      name: "Sunset Fields",
      owner: "Emma Johnson",
      location: "Oregon, USA",
      coordinates: "44.0521° N, 123.0868° W",
    },
    {
      name: "Mountain View Ranch",
      owner: "Michael Brown",
      location: "Colorado, USA",
      coordinates: "39.7392° N, 104.9903° W",
    },
  ];

  const handleRobotSelect = (name: string) => {
    setSelectedRobot(name);
    setStep("farms");
  };

  const handleFarmSelect = (name: string) => {
    setSelectedFarm(name);
    setStep("dashboard");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-soil-100 to-white">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        {step === "robots" && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-soil-800">
                Select Robot
              </h1>
              <p className="text-soil-600">Choose a robot to deploy</p>
            </div>

            <div className="mb-8 flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-soil-400" />
                <input
                  type="text"
                  placeholder="Search robots..."
                  className="w-full rounded-lg border border-soil-200/20 bg-white/50 py-2 pl-10 pr-4 text-soil-800 placeholder:text-soil-400 focus:border-soil-500 focus:outline-none focus:ring-2 focus:ring-soil-500/20"
                />
              </div>
              <select className="rounded-lg border border-soil-200/20 bg-white/50 px-4 py-2 text-soil-800 focus:border-soil-500 focus:outline-none focus:ring-2 focus:ring-soil-500/20">
                <option value="all">All Status</option>
                <option value="available">Available</option>
                <option value="in-use">In Use</option>
                <option value="maintenance">Maintenance</option>
              </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {robots.map((robot) => (
                <RobotCard
                  key={robot.name}
                  name={robot.name}
                  status={robot.status}
                  connectivity={robot.connectivity}
                  selected={selectedRobot === robot.name}
                  onClick={() => handleRobotSelect(robot.name)}
                />
              ))}
            </div>
          </div>
        )}

        {step === "farms" && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-soil-800">
                Select Farm
              </h1>
              <p className="text-soil-600">
                Choose a farm for {selectedRobot} to scan
              </p>
            </div>

            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-soil-400" />
                <input
                  type="text"
                  placeholder="Search farms..."
                  className="w-full rounded-lg border border-soil-200/20 bg-white/50 py-2 pl-10 pr-4 text-soil-800 placeholder:text-soil-400 focus:border-soil-500 focus:outline-none focus:ring-2 focus:ring-soil-500/20"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {farms.map((farm) => (
                <FarmCard
                  key={farm.name}
                  {...farm}
                  selected={selectedFarm === farm.name}
                  onClick={() => handleFarmSelect(farm.name)}
                />
              ))}
            </div>
          </div>
        )}

        {step === "dashboard" && (
          <div className="animate-fade-in">
            <div className="mb-8">
              <h1 className="text-3xl font-semibold text-soil-800">Dashboard</h1>
              <p className="text-soil-600">
                Monitoring {selectedFarm} with {selectedRobot}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              <DashboardCard className="lg:col-span-2">
                <div className="aspect-video rounded-lg bg-soil-200/50">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-soil-600">Aerial View Map</p>
                  </div>
                </div>
              </DashboardCard>

              <div className="flex flex-col gap-8">
                <WeatherWidget />
                <SoilHealthCard />
              </div>

              <DashboardCard
                title="Growth Trends"
                subtitle="Last 30 days"
                className="lg:col-span-2"
              >
                <div className="h-64 rounded-lg bg-soil-200/50">
                  <div className="flex h-full items-center justify-center">
                    <p className="text-soil-600">Growth Chart</p>
                  </div>
                </div>
              </DashboardCard>

              <DashboardCard title="AI Insights" className="h-full">
                <div className="space-y-4">
                  <div className="rounded-lg bg-soil-100 p-4">
                    <p className="text-sm font-medium text-soil-800">
                      Optimal irrigation time: 6:00 AM
                    </p>
                    <p className="text-xs text-soil-600">
                      Based on weather forecast and soil moisture levels
                    </p>
                  </div>
                  <div className="rounded-lg bg-soil-100 p-4">
                    <p className="text-sm font-medium text-soil-800">
                      Nutrient deficiency alert
                    </p>
                    <p className="text-xs text-soil-600">
                      Consider adding nitrogen-rich fertilizer
                    </p>
                  </div>
                </div>
              </DashboardCard>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
