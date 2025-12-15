"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-[#0B2D44]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-360 mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Ayan Furniture Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-white text-[15px] tracking-wide">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link key={item.name} href={item.href} className="relative group">
                {item.name}

                {/* ACTIVE UNDERLINE */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-[1.5px] bg-white transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </div>

        <div>{/* <Input type="email" placeholder="Email" /> */}</div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden transition-all duration-300 overflow-hidden
          ${open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="bg-[#0B2D44]/95 backdrop-blur-md px-6 py-6 text-white flex flex-col gap-5">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`
                  text-lg border-b border-white/10 pb-2
                  ${isActive ? "font-semibold" : ""}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
