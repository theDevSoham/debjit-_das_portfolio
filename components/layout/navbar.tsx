"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { Menu, X } from "lucide-react";

import SmoothScrollLink from "@/components/client/smooth-scroll/smooth-scroll-link";

import Container from "./container";

const navItems = [
  {
    label: "About",
    href: "/#about",
    type: "in-page",
  },

  {
    label: "Projects",
    href: "/projects",
  },

  // {
  //   label: "Blog",
  //   href: "/blog",
  // },

  {
    label: "Contact",
    href: "/#contact",
    type: "in-page",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <Container>
        <div
          className={`mt-6 overflow-hidden border backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500 ${
            mobileOpen ? "rounded-4xl" : "rounded-full"
          } ${
            scrolled || mobileOpen
              ? "border-white/40 bg-white/80 shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
              : "border-transparent bg-white/30"
          }`}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4">
            {/* Logo */}
            <Link href="/">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-900">
                Debjit Das
              </p>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => {
                const Comp = item.type === "in-page" ? SmoothScrollLink : Link;

                return (
                  <Comp
                    key={item.label}
                    href={item.href}
                    className="text-sm text-slate-600 transition-colors duration-300 hover:text-slate-900"
                  >
                    {item.label}
                  </Comp>
                );
              })}
            </nav>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 hover:bg-slate-100 md:hidden"
            >
              <div className="relative h-5 w-5">
                <Menu
                  className={`absolute inset-0 h-5 w-5 text-slate-900 transition-all duration-300 ${
                    mobileOpen
                      ? "scale-75 opacity-0 rotate-90"
                      : "scale-100 opacity-100 rotate-0"
                  }`}
                />

                <X
                  className={`absolute inset-0 h-5 w-5 text-slate-900 transition-all duration-300 ${
                    mobileOpen
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-75 opacity-0 -rotate-90"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out md:hidden ${
              mobileOpen
                ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <nav className="flex flex-col gap-6 border-t border-slate-200/60 px-6 pb-6 pt-6">
                {navItems.map((item) => {
                  const Comp =
                    item.type === "in-page" ? SmoothScrollLink : Link;

                  return (
                    <Comp
                      key={item.label}
                      href={item.href}
                      className="text-sm text-slate-700 transition-colors duration-300 hover:text-slate-900"
                    >
                      {item.label}
                    </Comp>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
