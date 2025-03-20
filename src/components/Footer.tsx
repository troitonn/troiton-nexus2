
import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Cpu, Zap, Star, ShieldCheck, Users, Server } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contact" className="bg-troiton-dark text-white pt-16 pb-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle, #5D5FEF 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}>
        </div>
      </div>
      
      {/* Animated tech elements */}
      <div className="absolute top-20 right-20 opacity-10 animate-float">
        <Cpu size={80} className="text-troiton-purple" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-10 animate-float" style={{ animationDelay: "2s" }}>
        <Server size={80} className="text-troiton-blue" />
      </div>
      
      <div className="troiton-container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Troiton<span className="text-troiton-purple">Connect+</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Your bridge to technology, providing complete solutions for businesses and consumers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110"
                )}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110"
                )}
              >
                <Twitter size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110"
                )}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200 hover:scale-110"
                )}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Zap size={18} className="text-troiton-purple" />
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/produtos#business" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Business Solutions
                </Link>
              </li>
              <li>
                <Link to="/produtos#consumer" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Consumer Products
                </Link>
              </li>
              <li>
                <Link to="/produtos#games" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Digital Games
                </Link>
              </li>
              <li>
                <Link to="/produtos#services" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Custom Services
                </Link>
              </li>
              <li>
                <Link to="/produtos#consulting" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Users size={18} className="text-troiton-blue" />
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about-us" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contato#careers" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contato#partners" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Partners
                </Link>
              </li>
              <li>
                <Link to="/contato#blog" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  News & Blog
                </Link>
              </li>
              <li>
                <Link to="/contato#privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 hover:translate-x-1 hover:translate-y-0 transform transition-transform">
                  <span className="text-xs">→</span> 
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Mail size={18} className="text-troiton-purple" />
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start group hover:scale-105 transition-transform duration-200">
                <MapPin size={18} className="text-troiton-purple mt-0.5 mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  123 Technology Avenue, Innovation District, CA 94103, USA
                </a>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                <Mail size={18} className="text-troiton-blue mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a 
                  href="mailto:info@troitonconnect.com" 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  info@troitonconnect.com
                </a>
              </div>
              <div className="flex items-center group hover:scale-105 transition-transform duration-200">
                <Phone size={18} className="text-troiton-purple mr-3 flex-shrink-0 group-hover:animate-bounce" />
                <a 
                  href="tel:+15555555555" 
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  +1 (555) 555-5555
                </a>
              </div>
              
              <form className="mt-6 group">
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-troiton-purple/50 transition-all"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple transition-all duration-300 rounded-lg px-4 py-2.5 text-sm font-medium flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-purple-500/20"
                  >
                    <Star size={16} className="text-white" />
                    Subscribe to Newsletter
                    <Star size={16} className="text-white" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Troiton Connect+. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/contato#terms" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </Link>
            <Link to="/contato#privacy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/contato#cookies" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
