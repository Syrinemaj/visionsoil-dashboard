
import { cn } from "@/lib/utils";

interface DashboardCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

export function DashboardCard({
  title,
  subtitle,
  children,
  className,
  ...props
}: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-soil-200/20 bg-white/50 p-6 backdrop-blur-lg transition-all hover:shadow-lg",
        className
      )}
      {...props}
    >
      {(title || subtitle) && (
        <div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-soil-800">{title}</h3>}
          {subtitle && <p className="text-sm text-soil-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  );
}
