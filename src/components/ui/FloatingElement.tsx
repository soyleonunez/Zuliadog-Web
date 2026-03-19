import Image from "next/image";

interface FloatingElementProps {
  /** Path to the image file in /public (e.g. "/assets/images/Cat.png") */
  src: string;
  /** Alt text for accessibility */
  alt: string;
  /** Width in pixels */
  size?: number;
  /** Positioning classes (Tailwind) - e.g. "top-20 -right-4 lg:right-2" */
  position: string;
  /** Animation type */
  animation?: "float" | "float-reverse" | "float-slow";
  /** Animation delay in seconds */
  delay?: number;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Reusable floating element component with staggered animation support.
 */
export function FloatingElement({
  src,
  alt,
  size = 70,
  position,
  animation = "float",
  delay = 0,
  className = "",
}: FloatingElementProps) {
  const animationClass = {
    float: "animate-float",
    "float-reverse": "animate-float-reverse",
    "float-slow": "animate-float-slow",
  }[animation];

  // Extract rounded classes from className to apply to the image
  const hasRounded = className.includes("rounded");

  return (
    <div 
      className={`absolute ${position} ${animationClass} z-10 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="relative group transition-transform duration-500 hover:scale-105">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className={`
            ${hasRounded ? "rounded-[2rem] sm:rounded-[2.5rem]" : ""}
            drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]
            group-hover:drop-shadow-[0_30px_40px_rgba(0,0,0,0.25)]
            transition-all duration-500
          `}
        />
      </div>
    </div>
  );
}
