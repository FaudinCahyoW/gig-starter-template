"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { label: "Fitur", href: "#features" },
  { label: "Tentang", href: "#about" },
  { label: "Testimoni", href: "#testimonial" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-foreground">Logo</span>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-[#e7dfef] hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button>Daftar</Button>
        </div>

        {/* Menu Mobile */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-6 mt-10">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg text-foreground hover:text-muted-foreground transition-colors"
                >
                
                  {item.label}
                </a>
              ))}
              <Button className="mt-4">Daftar</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}