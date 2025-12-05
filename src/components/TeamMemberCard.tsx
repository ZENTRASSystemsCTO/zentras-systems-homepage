import { cn } from "@/lib/utils";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  className?: string;
}

export const TeamMemberCard = ({
  name,
  role,
  bio,
  image,
  className,
}: TeamMemberCardProps) => {
  return (
    <div
      className={cn(
        "group p-6 rounded-2xl bg-card border border-border hover:border-secondary transition-all duration-300 hover-lift",
        className
      )}
    >
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4 bg-muted">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full gradient-placeholder flex items-center justify-center">
            <span className="text-xs text-muted-foreground text-center px-2">
              Photo
            </span>
          </div>
        )}
      </div>

      <h4 className="text-lg font-semibold text-foreground">{name}</h4>
      <p className="text-sm text-secondary font-medium mb-2">{role}</p>
      
      {bio && (
        <p className="text-sm text-muted-foreground line-clamp-3">{bio}</p>
      )}
    </div>
  );
};
