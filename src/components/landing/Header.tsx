"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#about', label: 'About Us' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-card shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-primary">
          <Image src="/numera.svg" alt="Numera Logo" width={244} height={70} className="h-20 w-auto" priority />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <a href="https://calendly.com/victordebelu/consultation-with-numera-finance" target="_blank" rel="noopener noreferrer">Request a Consultation</a>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 p-6">
                <Link href="/" className="flex items-center gap-2 text-primary mb-4">
                  <Image src="/numera.svg" alt="Numera Logo" width={244} height={70} className="h-14 w-auto" priority />
                </Link>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary">
                    {link.label}
                  </Link>
                ))}
                <Button asChild variant="default" className="mt-4 bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a href="https://calendly.com/victordebelu/consultation-with-numera-finance" target="_blank" rel="noopener noreferrer">Request a Consultation</a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
