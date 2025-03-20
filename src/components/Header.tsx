
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { name: "Início", href: "/" },
  { 
    name: "Produtos", 
    href: "#",
    children: [
      { name: "Periféricos", description: "Teclados, mouses, fones de ouvido, etc.", href: "/produtos#perifericos" },
      { name: "Hardware", description: "Processadores, placas de vídeo, memória RAM", href: "/produtos#hardware" },
      { name: "Notebooks", description: "Notebooks para trabalho e jogos", href: "/produtos#notebooks" },
      { name: "Equipamentos para Empresas", description: "Impressoras, monitores, nobreaks, etc.", href: "/produtos#empresa" },
      { name: "Games", description: "Jogos digitais para todos os tipos de jogadores", href: "/produtos#games" },
    ]
  },
  { 
    name: "Soluções", 
    href: "#", 
    children: [
      { name: "Para Empresas (B2B)", description: "Soluções tecnológicas para otimizar seu negócio", href: "/#solutions" },
      { name: "Para Consumidores (B2C)", description: "Produtos e serviços para o consumidor final", href: "/#business-segments" },
    ]
  },
  { name: "Sobre Nós", href: "/#mission" },
  { name: "Contato", href: "/contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
          ? "py-2 bg-white/90 backdrop-blur-md shadow-sm" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="troiton-container">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-troiton-blue to-troiton-purple flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-troiton-dark">
              Troiton<span className="text-troiton-purple">Connect+</span>
            </span>
          </Link>

          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navLinks.map((link) => (
                  link.children ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-troiton-gray/50 hover:text-troiton-purple">
                        {link.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-troiton-gray/50 hover:text-troiton-purple"
                                >
                                  <div className="text-sm font-medium leading-none">{child.name}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {child.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={link.name}>
                      <Link 
                        to={link.href}
                        className="relative inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-troiton-gray/50 hover:text-troiton-purple"
                      >
                        {link.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          )}

          <div className="hidden md:flex">
            <Link 
              to="/contato" 
              className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:from-troiton-lightblue hover:to-troiton-lightpurple text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 button-effect"
            >
              Começar Agora
            </Link>
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
        <div className="p-6 space-y-2">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.name} className="py-2">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full text-base font-medium text-troiton-dark hover:text-troiton-purple">
                    {link.name}
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link
                          to={child.href}
                          className="w-full"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="block py-2 text-base font-medium text-troiton-dark hover:text-troiton-purple"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Link
            to="/contato"
            className="block w-full bg-gradient-to-r from-troiton-blue to-troiton-purple text-white font-medium px-6 py-3 rounded-lg text-center mt-6"
            onClick={() => setIsOpen(false)}
          >
            Começar Agora
          </Link>
        </div>
      </div>
    </header>
  );
}
