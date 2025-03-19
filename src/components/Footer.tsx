
import React from "react";
import { cn } from "@/lib/utils";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-troiton-dark text-white pt-16 pb-8">
      <div className="troiton-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="font-bold text-xl tracking-tight text-white">
                Troiton<span className="text-troiton-purple">Connect+</span>
              </span>
            </a>
            <p className="text-gray-400 text-sm mb-6">
              Your bridge to technology, providing complete solutions for businesses and consumers.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200"
                )}
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200"
                )}
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200"
                )}
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className={cn(
                  "h-10 w-10 rounded-full flex items-center justify-center",
                  "bg-white/10 hover:bg-white/20 transition-colors duration-200"
                )}
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Business Solutions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Consumer Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Digital Games
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Custom Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  News & Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={18} className="text-troiton-purple mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  123 Technology Avenue, Innovation District, CA 94103, USA
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="text-troiton-blue mr-3 flex-shrink-0" />
                <a href="mailto:info@troitonconnect.com" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  info@troitonconnect.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="text-troiton-purple mr-3 flex-shrink-0" />
                <a href="tel:+15555555555" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  +1 (555) 555-5555
                </a>
              </div>
              
              <form className="mt-6">
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2.5 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-troiton-purple/50"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple transition-all duration-300 rounded-lg px-4 py-2.5 text-sm font-medium"
                  >
                    Subscribe to Newsletter
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
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
