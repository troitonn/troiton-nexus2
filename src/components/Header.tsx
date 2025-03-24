
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, Zap, ShoppingBag, Users, Headphones, Star, Cpu, Globe } from "lucide-react";
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
    icon: <ShoppingBag className="h-4 w-4 text-troiton-purple mr-1" />,
    children: [
      { 
        name: "Periféricos", 
        description: "Teclados, mouses, fones de ouvido, etc.", 
        href: "/produtos#perifericos",
        icon: <Headphones className="h-5 w-5 text-troiton-purple mb-1" />
      },
      { 
        name: "Hardware", 
        description: "Processadores, placas de vídeo, memória RAM", 
        href: "/produtos#hardware", 
        icon: <Cpu className="h-5 w-5 text-troiton-blue mb-1" />
      },
      { 
        name: "Notebooks", 
        description: "Notebooks para trabalho e jogos", 
        href: "/produtos#notebooks",
        icon: <Star className="h-5 w-5 text-amber-400 mb-1" />
      },
      { 
        name: "Equipamentos para Empresas", 
        description: "Impressoras, monitores, nobreaks, etc.", 
        href: "/produtos#empresa",
        icon: <Globe className="h-5 w-5 text-green-500 mb-1" />
      },
      { 
        name: "Games", 
        description: "Jogos digitais para todos os tipos de jogadores", 
        href: "/produtos#games",
        icon: <Star className="h-5 w-5 text-red-500 mb-1" />
      },
    ]
  },
  { 
    name: "Soluções", 
    href: "#", 
    icon: <Zap className="h-4 w-4 text-troiton-blue mr-1" />,
    children: [
      { 
        name: "Para Empresas (B2B)", 
        description: "Soluções tecnológicas para otimizar seu negócio", 
        href: "/#solutions",
        icon: <Users className="h-5 w-5 text-troiton-blue mb-1" />
      },
      { 
        name: "Para Consumidores (B2C)", 
        description: "Produtos e serviços para o consumidor final", 
        href: "/#business-segments",
        icon: <ShoppingBag className="h-5 w-5 text-troiton-purple mb-1" />
      },
    ]
  },
  { 
    name: "Sobre Nós", 
    href: "/#about-us", 
    icon: <Users className="h-4 w-4 text-troiton-purple mr-1" />
  },
  { 
    name: "Contato", 
    href: "/contato", 
    icon: <Globe className="h-4 w-4 text-troiton-blue mr-1" />
  },
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
          ? "py-1 bg-white/95 backdrop-blur-lg shadow-md" 
          : "py-2 bg-transparent"
      )}
    >
      <div className="troiton-container">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center group"
          >
            <img 
              src="/troiton-logo.png" 
              alt="Troiton Business+" 
              className="h-8 md:h-10 transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {!isMobile && (
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                {navLinks.map((link) => (
                  link.children ? (
                    <NavigationMenuItem key={link.name}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-gradient-to-r hover:from-troiton-blue/10 hover:to-troiton-purple/10 hover:text-troiton-purple transition-all duration-300 rounded-full">
                        <span className="flex items-center">
                          {link.icon}
                          {link.name}
                        </span>
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {link.children.map((child) => (
                            <li key={child.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  to={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gradient-to-r hover:from-troiton-blue/10 hover:to-troiton-purple/10 hover:text-troiton-purple"
                                >
                                  {child.icon}
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
                        className="relative inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-troiton-blue/10 hover:to-troiton-purple/10 hover:text-troiton-purple"
                      >
                        <span className="flex items-center">
                          {link.icon}
                          {link.name}
                        </span>
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
              className="bg-gradient-to-r from-troiton-blue to-troiton-purple hover:opacity-90 text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
            >
              <Star className="h-4 w-4" />
              Começar Agora
            </Link>
          </div>

          <button
            className="md:hidden rounded-full p-2 text-troiton-dark hover:bg-troiton-gray"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white/95 backdrop-blur-lg shadow-lg transition-transform duration-300 ease-in-out z-40",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-4 space-y-1">
          {navLinks.map((link) => (
            link.children ? (
              <div key={link.name} className="py-1.5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center justify-between w-full text-base font-medium text-troiton-dark hover:text-troiton-purple">
                    <span className="flex items-center gap-2">
                      {link.icon}
                      {link.name}
                    </span>
                    <ChevronDown size={16} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link
                          to={child.href}
                          className="w-full flex items-center gap-2"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.icon}
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
                className="block py-1.5 text-base font-medium text-troiton-dark hover:text-troiton-purple flex items-center gap-2"
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </header>
  );
}
