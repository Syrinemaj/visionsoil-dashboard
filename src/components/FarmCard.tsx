
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FarmCardProps {
  name: string;
  owner: string;
  location: string;
  coordinates: string;
  selected?: boolean;
  onClick?: () => void;
}

export function FarmCard({
  name,
  owner,
  location,
  coordinates,
  selected,
  onClick,
}: FarmCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex h-64 w-full flex-col rounded-2xl border border-soil-200/20 bg-white/50 p-6 backdrop-blur-lg transition-all",
        "hover:border-soil-500/50 hover:shadow-lg",
        selected && "border-soil-500 ring-2 ring-soil-500/20"
      )}
    >
      <div className="mb-4 h-32 w-full overflow-hidden rounded-xl bg-soil-100">
        <div className="h-full w-full rounded-lg bg-soil-200" />
      </div>

      <div className="text-left">
        <h3 className="mb-1 font-medium text-soil-800">{name}</h3>
        <p className="text-sm text-soil-600">{owner}</p>
      </div>

      <div className="mt-auto flex items-center gap-2 text-sm text-soil-500">
        <MapPin className="h-4 w-4" />
        <span>{location}</span>
      </div>

      <p className="text-xs text-soil-400">{coordinates}</p>
    </button>
  );
}
