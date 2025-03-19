
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  delay?: number;
  threshold?: number;
  duration?: number;
  once?: boolean;
}

export function FadeIn({ 
  children, 
  direction = "up", 
  className = "", 
  delay = 0,
  threshold = 0.1,
  duration = 700,
  once = true
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const getAnimationClass = () => {
    switch (direction) {
      case "up":
        return "animate-fade-in-up";
      case "down":
        return "animate-fade-in-down";
      case "left":
        return "animate-fade-in-left";
      case "right":
        return "animate-fade-in-right";
      case "none":
        return "animate-fade-in";
      default:
        return "animate-fade-in-up";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        isVisible ? getAnimationClass() : "opacity-0",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`
      }}
    >
      {children}
    </div>
  );
}
