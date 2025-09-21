"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/about-us" },
    { name: "Nilai Kami", href: "/our-value" },
    { name: "Program", href: "/#programs" },
    { name: "Fasilitas", href: "/#facilities" },
    { name: "Testimoni", href: "/#review" },
    { name: "Pendaftaran", href: "/admission" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-12 h-12 lg:w-14 lg:h-14 relative">
              <Image
                src="/logo-kalyca-azzahra.png"
                alt="Kalyca Azzahra School Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-primary text-lg lg:text-xl">Kalyca Azzahra</h1>
              <p className="text-xs lg:text-sm text-accent">Everyone Deserves A Good Education</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary hover:text-accent transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/6287775465406?text=Assalamualaikum%20kak,%20aku%20mau%20cari%20info%20tentang%20pendaftaran%20di%20kalyca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2.5 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap ml-4"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Tablet Menu - Simplified */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link
              href="/"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium text-sm"
            >
              Beranda
            </Link>
            <Link
              href="/about-us"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium text-sm"
            >
              Tentang
            </Link>
            <Link
              href="/admission"
              className="text-primary hover:text-accent transition-colors duration-200 font-medium text-sm"
            >
              Pendaftaran
            </Link>
            <a
              href="https://wa.me/6287775465406?text=Assalamualaikum%20kak,%20aku%20mau%20cari%20info%20tentang%20pendaftaran%20di%20kalyca"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-sm"
            >
              Hubungi
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-primary hover:text-accent focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-secondary-200">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/6287775465406?text=Assalamualaikum%20kak,%20aku%20mau%20cari%20info%20tentang%20pendaftaran%20di%20kalyca"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 mx-3 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 
