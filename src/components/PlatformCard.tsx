import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  title: string;
  description: string;
  href: string;
  iconPlaceholder: string;
  className?: string;
}

export const PlatformCard = ({
  title,
  description,
  href,
  iconPlaceholder,
  className,
}: PlatformCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group block p-6 rounded-2xl transition-all duration-500 ease-out hover-lift h-full flex flex-col",
        "bg-card border border-border hover:bg-primary hover:border-primary",
        className
      )}
    >
      {/* Icon placeholder */}
      {/* GRAPHIC PLACEHOLDER: platform-specific icon or pictogram for this SKU. */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-xs font-medium transition-colors duration-500 ease-out",
          "gradient-placeholder text-muted-foreground group-hover:bg-accent/20 group-hover:text-accent"
        )}
      >
        {iconPlaceholder}
      </div>

      <h3
        className={cn(
          "text-lg font-semibold mb-2 transition-colors duration-500 ease-out",
          "text-foreground group-hover:text-primary-foreground"
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "text-sm mb-4 flex-1 transition-colors duration-500 ease-out",
          "text-muted-foreground group-hover:text-primary-foreground/70"
        )}
      >
        {description}
      </p>

      <div
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors duration-500 ease-out",
          "text-secondary group-hover:text-accent"
        )}
      >
        Mehr erfahren
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};
