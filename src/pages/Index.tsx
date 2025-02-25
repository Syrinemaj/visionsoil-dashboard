
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { SoilHealthCard } from "@/components/SoilHealthCard";
import { WeatherWidget } from "@/components/WeatherWidget";
import { DashboardCard } from "@/components/DashboardCard";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-soil-100 to-white">
      <DashboardSidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-soil-800">Dashboard</h1>
          <p className="text-soil-600">Welcome back to VisionSoil</p>
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
      </main>
    </div>
  );
};

export default Index;
