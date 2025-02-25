
import { WifiIcon, AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RobotCardProps {
  name: string;
  status: "available" | "in-use" | "maintenance";
  connectivity: "online" | "offline";
  selected?: boolean;
  onClick?: () => void;
}

export function RobotCard({
  name,
  status,
  connectivity,
  selected,
  onClick,
}: RobotCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex h-64 w-full flex-col items-center justify-center rounded-2xl border border-soil-200/20 bg-white/50 p-6 backdrop-blur-lg transition-all",
        "hover:border-soil-500/50 hover:shadow-lg",
        selected && "border-soil-500 ring-2 ring-soil-500/20",
      )}
    >
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <WifiIcon
          className={cn(
            "h-4 w-4",
            connectivity === "online" ? "text-soil-500" : "text-soil-300"
          )}
        />
        {status === "available" && (
          <CheckCircle2 className="h-4 w-4 text-green-500" />
        )}
        {status === "in-use" && <XCircle className="h-4 w-4 text-red-500" />}
        {status === "maintenance" && (
          <AlertTriangle className="h-4 w-4 text-yellow-500" />
        )}
      </div>

      <div className="mb-6 h-32 w-32 rounded-xl bg-soil-100 p-4">
        <div className="h-full w-full rounded-lg bg-soil-200" />
      </div>

      <div className="text-center">
        <p className="font-medium text-soil-800">{name}</p>
        <p className="text-sm text-soil-600 capitalize">{status}</p>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full overflow-hidden rounded-b-2xl">
        <div
          className={cn(
            "h-full w-full",
            status === "available" && "bg-green-500",
            status === "in-use" && "bg-red-500",
            status === "maintenance" && "bg-yellow-500"
          )}
        />
      </div>
    </button>
  );
}
