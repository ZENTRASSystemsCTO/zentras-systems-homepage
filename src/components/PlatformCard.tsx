import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  title: string;
  description: string;
  href: string;
  iconPlaceholder: string;
  variant?: "default" | "featured";
  className?: string;
}

export const PlatformCard = ({
  title,
  description,
  href,
  iconPlaceholder,
  variant = "default",
  className,
}: PlatformCardProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group block p-6 rounded-2xl transition-all duration-300 hover-lift",
        variant === "featured"
          ? "bg-primary text-primary-foreground"
          : "bg-card border border-border hover:border-secondary",
        className
      )}
    >
      {/* Icon placeholder */}
      {/* GRAPHIC PLACEHOLDER: platform-specific icon or pictogram for this SKU. */}
      <div
        className={cn(
          "w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-xs font-medium",
          variant === "featured"
            ? "bg-accent/20 text-accent"
            : "gradient-placeholder text-muted-foreground"
        )}
      >
        {iconPlaceholder}
      </div>

      <h3
        className={cn(
          "text-lg font-semibold mb-2",
          variant === "featured" ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "text-sm mb-4",
          variant === "featured"
            ? "text-primary-foreground/70"
            : "text-muted-foreground"
        )}
      >
        {description}
      </p>

      <div
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors",
          variant === "featured"
            ? "text-accent group-hover:text-accent"
            : "text-secondary group-hover:text-brand-cyan"
        )}
      >
        Learn more
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
};
