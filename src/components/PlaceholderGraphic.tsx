import { cn } from "@/lib/utils";

interface PlaceholderGraphicProps {
  label: string;
  description?: string;
  className?: string;
  variant?: "default" | "dark" | "gradient" | "outline";
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  icon?: React.ReactNode;
}

/**
 * Reusable placeholder component for future graphics/assets.
 * Each placeholder includes visible labels and code comments for asset replacement.
 */
export const PlaceholderGraphic = ({
  label,
  description,
  className,
  variant = "default",
  aspectRatio = "video",
  icon,
}: PlaceholderGraphicProps) => {
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[21/9]",
  };

  const variantClasses = {
    default: "gradient-placeholder border border-border",
    dark: "bg-primary/10 border border-primary/20",
    gradient: "gradient-card text-primary-foreground",
    outline: "border-2 border-dashed border-secondary bg-muted/30",
  };

  return (
    <div
      className={cn(
        "rounded-2xl flex flex-col items-center justify-center p-6 transition-all duration-300",
        aspectClasses[aspectRatio],
        variantClasses[variant],
        className
      )}
    >
      {icon && (
        <div className={cn(
          "mb-3",
          variant === "gradient" ? "text-primary-foreground/80" : "text-secondary"
        )}>
          {icon}
        </div>
      )}
      <p className={cn(
        "text-sm font-medium text-center",
        variant === "gradient" ? "text-primary-foreground" : "text-muted-foreground"
      )}>
        {label}
      </p>
      {description && (
        <p className={cn(
          "text-xs text-center mt-1 max-w-[200px]",
          variant === "gradient" ? "text-primary-foreground/70" : "text-muted-foreground/70"
        )}>
          {description}
        </p>
      )}
    </div>
  );
};
