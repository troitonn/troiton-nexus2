
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Solutions", href: "#solutions" },
  { name: "Mission", href: "#mission" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "py-3 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="troiton-container">
        <div className="flex items-center justify-between">
          <a 
            href="#home" 
            className="flex items-center gap-2 group"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-troiton-dark">
              Troiton<span className="text-troiton-purple">Connect+</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium text-troiton-dark transition-colors hover:text-troiton-purple group"
              >
                {link.name}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-troiton-purple transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a 
              href="#contact" 
              className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 button-effect"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden rounded-md p-2 text-troiton-dark hover:bg-troiton-gray"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 text-base font-medium text-troiton-dark hover:text-troiton-purple"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block w-full bg-gradient-to-r from-troiton-blue to-troiton-purple text-white font-medium px-6 py-3 rounded-lg text-center mt-6"
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
