"use client";

import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Code,
  Home,
  User,
  Briefcase,
  Mail,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: User },
    { name: "Projects", href: "/project", icon: Briefcase },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Dashboard", href: "/dashboard", icon: FileText },
  ];

  if (pathname === "/dashboard") return <></>;

  return (
    <nav
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg"
          : "bg-linear-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <Code className="w-8 h-8 text-[#ffc107] transition-transform duration-300 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-[#ffc107] blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <span className="text-xl md:text-2xl font-bold text-white">
              Dev<span className="text-[#ffc107]">Story</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-gray-300 hover:text-[#ffc107] transition-colors duration-300 group"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{link.name}</span>
                  </span>
                  <span className="absolute inset-0 bg-[#ffc107]/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                </Link>
              );
            })}
            <button className="ml-4 px-6 py-2 bg-[#ffc107] text-[#1e1e28] font-semibold rounded-lg hover:bg-[#ffcd38] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ffc107]/50">
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-300 hover:text-[#ffc107] hover:bg-[#ffc107]/10 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-[#ffc107] hover:bg-[#ffc107]/10 rounded-lg transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.name}</span>
                </a>
              );
            })}
            <button className="w-full mt-4 px-6 py-3 bg-[#ffc107] text-[#1e1e28] font-semibold rounded-lg hover:bg-[#ffcd38] transition-all duration-300">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
