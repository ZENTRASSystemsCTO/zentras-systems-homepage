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
        "group block p-8 rounded-3xl transition-all duration-500 ease-out h-full flex flex-col",
        "bg-brand-surface hover:scale-[1.02] hover:shadow-brand",
        className
      )}
    >
      {/* Icon placeholder */}
      {/* GRAPHIC PLACEHOLDER: platform-specific icon or pictogram for this SKU. */}
      <div
        className={cn(
          "w-14 h-14 rounded-2xl mb-6 flex items-center justify-center text-sm font-medium transition-colors duration-500 ease-out bg-background text-foreground shadow-sm group-hover:text-primary"
        )}
      >
        {iconPlaceholder}
      </div>

      <h3
        className={cn(
          "text-xl font-semibold mb-3 transition-colors duration-300",
          "text-foreground"
        )}
      >
        {title}
      </h3>

      <p
        className={cn(
          "text-base mb-6 flex-1 transition-colors duration-300",
          "text-muted-foreground"
        )}
      >
        {description}
      </p>

      <div
        className={cn(
          "flex items-center gap-2 text-sm font-medium transition-colors duration-300",
          "text-primary group-hover:underline"
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
