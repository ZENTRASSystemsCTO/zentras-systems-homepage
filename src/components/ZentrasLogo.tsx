import { cn } from "@/lib/utils";

interface ZentrasLogoProps {
  variant?: "light" | "dark";
  className?: string;
  showWordmark?: boolean;
}

// GRAPHIC PLACEHOLDER: replace with official zentras SVG wordmark and logomark.
// The logomark should be a grid of rounded squares forming a cross or star shape in teal to green shades.
// The wordmark "zentras" should be in lowercase, clean rounded sans serif.

export const ZentrasLogo = ({ 
  variant = "dark", 
  className,
  showWordmark = true 
}: ZentrasLogoProps) => {
  const isLight = variant === "light";
  
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Logomark placeholder - grid of rounded squares */}
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-0.5">
          {/* Top row */}
          <div className="w-2 h-2 rounded-sm bg-transparent" />
          <div className="w-2 h-2 rounded-sm bg-brand-cyan" />
          <div className="w-2 h-2 rounded-sm bg-transparent" />
          {/* Middle row */}
          <div className="w-2 h-2 rounded-sm bg-brand-light-teal" />
          <div className="w-2 h-2 rounded-sm bg-brand-dark-teal" />
          <div className="w-2 h-2 rounded-sm bg-accent-green" />
          {/* Bottom row */}
          <div className="w-2 h-2 rounded-sm bg-transparent" />
          <div className="w-2 h-2 rounded-sm bg-brand-light-teal" />
          <div className="w-2 h-2 rounded-sm bg-transparent" />
        </div>
      </div>
      
      {/* Wordmark */}
      {showWordmark && (
        <span className={cn(
          "text-xl font-semibold tracking-tight",
          isLight ? "text-primary-foreground" : "text-primary"
        )}>
          zentras
        </span>
      )}
    </div>
  );
};
