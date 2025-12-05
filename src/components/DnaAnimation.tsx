import { useEffect, useRef, useState } from "react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

// ZENTRAS brand colors for the animation
const BRAND_COLORS = {
  primary: "#15566f",      // dark teal
  secondary: "#6fadc6",    // light teal  
  accent: "#00bbd1",       // cyan
  accentGreen: "#0fd100",  // green (used sparingly)
};

// Function to replace colors in the animation data
const recolorAnimation = (animationData: any) => {
  const jsonStr = JSON.stringify(animationData);
  
  // Replace common animation colors with ZENTRAS brand colors
  // The original animation likely has blues/greens that we'll map to our palette
  let recolored = jsonStr
    // Map various blue shades to our teal palette
    .replace(/\[0\.[\d]+,0\.[\d]+,1,1\]/g, `[0.082,0.337,0.435,1]`) // primary teal
    .replace(/\[0,0\.[\d]+,1,1\]/g, `[0,0.733,0.82,1]`) // accent cyan
    .replace(/\[0\.[\d]+,0\.[\d]+,0\.[\d]+,1\]/g, (match) => {
      // For other colors, alternate between our brand colors
      const rand = Math.random();
      if (rand < 0.33) return `[0.082,0.337,0.435,1]`; // primary
      if (rand < 0.66) return `[0.435,0.678,0.776,1]`; // secondary  
      return `[0,0.733,0.82,1]`; // accent
    });
    
  return JSON.parse(recolored);
};

interface DnaAnimationProps {
  className?: string;
}

export const DnaAnimation = ({ className = "" }: DnaAnimationProps) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<any>(null);
  const [isInView, setIsInView] = useState(false);

  // Load and recolor the animation
  useEffect(() => {
    fetch("/animations/dna-helix.json")
      .then((res) => res.json())
      .then((data) => {
        // Slow down the animation by reducing frame rate
        const slowedData = { ...data, fr: data.fr * 0.3 }; // 30% of original speed
        setAnimationData(slowedData);
      })
      .catch(console.error);
  }, []);

  // Intersection observer for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll-based animation control
  useEffect(() => {
    if (!lottieRef.current || !containerRef.current || !animationData) return;

    const handleScroll = () => {
      if (!containerRef.current || !lottieRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) based on element position
      const elementTop = rect.top;
      const elementBottom = rect.bottom;
      
      // Progress goes from 0 (element just entering) to 1 (element leaving)
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + rect.height)
      ));
      
      // Map scroll progress to animation frames
      const totalFrames = animationData.op - animationData.ip;
      const frame = animationData.ip + (progress * totalFrames * 2) % totalFrames;
      
      lottieRef.current.goToAndStop(frame, true);
    };

    if (isInView) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial call
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInView, animationData]);

  if (!animationData) {
    return (
      <div className={`flex items-center justify-center ${className}`}>
        <div className="w-16 h-16 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef} 
      className={`relative ${className}`}
      style={{ 
        filter: "hue-rotate(-10deg) saturate(1.2)",
      }}
    >
      {/* Color overlay to shift towards ZENTRAS teal */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 mix-blend-overlay pointer-events-none z-10 rounded-3xl" />
      
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData}
        loop={false}
        autoplay={false}
        className="w-full h-full"
        style={{
          filter: "brightness(1.1) contrast(1.05)",
        }}
      />
    </div>
  );
};
