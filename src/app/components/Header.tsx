"use client";

import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Templates", href: "/templates" },
  { name: "Docs", href: "/docs" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className="relative z-50 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl sm:text-2xl font-bold text-white">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            DiagramFlow
          </span>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <div className="flex space-x-8">
            {navItems.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-gray-300 hover:text-white transition-all duration-200 text-base font-medium relative group"
              >
                {name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/login"
            className="text-gray-300 hover:text-white transition-colors duration-200 text-base font-medium px-4 py-2 rounded-lg hover:bg-white/10"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Register
          </Link>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-t border-gray-700 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-1">
          {navItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={closeMobileMenu}
              className="block text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
            >
              {name}
            </Link>
          ))}

          <div className="pt-4 mt-4 border-t border-gray-700 space-y-3">
            <Link
              href="/login"
              onClick={closeMobileMenu}
              className="block text-center text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200 py-3 px-4 rounded-lg font-medium"
            >
              Login
            </Link>
            <Link
              href="/register"
              onClick={closeMobileMenu}
              className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
