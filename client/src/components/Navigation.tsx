import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown, Home, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeHovered, setIsHomeHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/Home", label: "Home" },
    { href: "/expertise", label: "Our Expertise" },
    { href: "/sponsors", label: "Sponsors/Patient" },
  ];

  const homeDropdownItems = [
    { href: "/", label: "Home Overview", icon: <Home className="h-4 w-4 mr-3" /> },
    { href: "/our-team", label: "Our Team", icon: <Users className="h-4 w-4 mr-3" /> },
  ];

  const isActive = (href: string) => {
    if (href === "/Home" && location === "/") return true;
    return location === href;
  };

  // Optimized scroll handler with debounce
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrolled = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 10);
      ticking = false;
    };

    const handleScroll = () => {
      lastScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(updateScrolled);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 ${
      scrolled ? "py-1" : "py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section - Fixed height container */}
          <div className="flex items-center h-20"> {/* Fixed height container */}
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <motion.img 
                  src="/images/CLINCELL_Logos (1) (2) (1).png" 
                  alt="ClinCell Logo"
                  className="object-contain max-w-[320px] mr-6"
                  initial={{ height: "5rem" }}
                  animate={{ height: scrolled ? "3.5rem" : "5rem" }}
                  transition={{ 
                    duration: 0.3, 
                    ease: "easeOut",
                    layout: {
                      duration: 0.3,
                      ease: "easeOut"
                    }
                  }}
                  style={{ 
                    // Remove margin from style and use class instead
                    maxWidth: "320px",
                  }}
                  layout="size"  // Optimize for size changes
                />
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation - Single line */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsHomeHovered(true)}
              onMouseLeave={() => setIsHomeHovered(false)}
            >
              <div className="flex items-center space-x-1 cursor-pointer px-3 py-2 rounded-lg">
                <span className={`font-medium ${
                  isActive("/Home") || isActive("/")
                    ? "text-teal-primary"
                    : "text-gray-text hover:text-teal-primary"
                }`}>
                  Home
                </span>
                <ChevronDown 
                  className={`h-4 w-4 transition-transform ${
                    isHomeHovered ? "rotate-180" : ""
                  } ${
                    isActive("/Home") || isActive("/")
                      ? "text-teal-primary"
                      : "text-gray-text"
                  }`} 
                />
              </div>
              
              <AnimatePresence>
                {isHomeHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50"
                    onMouseEnter={() => setIsHomeHovered(true)}
                    onMouseLeave={() => setIsHomeHovered(false)}
                  >
                    <div className="py-1">
                      {homeDropdownItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div className="flex items-center px-4 py-3 text-gray-700 hover:bg-teal-50 cursor-pointer transition-colors">
                            {item.icon}
                            <span>{item.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            {/* Other navigation items - Single line */}
            {navItems.slice(1).map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`font-medium transition-colors duration-200 cursor-pointer px-3 py-2 rounded-lg ${
                    isActive(item.href)
                      ? "text-teal-primary"
                      : "text-gray-text hover:text-teal-primary"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            
            <Link href="/contact">
              <Button className="bg-teal-primary text-white hover:bg-teal-600 px-5 py-2">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-text hover:text-teal-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <img 
                      src="/images/CLINCELL_Logos (1) (2) (1).png" 
                      alt="ClinCell Logo"
                      className="h-16 object-contain"
                      style={{ maxWidth: "240px" }}
                    />
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setIsOpen(false)}
                    className="text-gray-text hover:text-teal-primary"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <div className="flex flex-col space-y-2">
                  {/* Home dropdown in mobile */}
                  <div className="pb-2">
                    <div className="flex items-center py-2 font-medium text-gray-text">
                      <span className="text-teal-primary">Home</span>
                    </div>
                    <div className="pl-4 space-y-1 mt-1 border-l border-gray-200 ml-3">
                      {homeDropdownItems.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <div 
                            className="flex items-center py-2 text-gray-text hover:text-teal-primary cursor-pointer pl-3"
                            onClick={() => setIsOpen(false)}
                          >
                            {item.icon}
                            <span>{item.label}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  {/* Other navigation items */}
                  {navItems.slice(1).map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span
                        className={`block py-2 font-medium transition-colors duration-200 cursor-pointer ${
                          isActive(item.href)
                            ? "text-teal-primary"
                            : "text-gray-text hover:text-teal-primary"
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                  <Link href="/contact">
                    <Button 
                      className="w-full bg-teal-primary text-white hover:bg-teal-600 mt-4"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;