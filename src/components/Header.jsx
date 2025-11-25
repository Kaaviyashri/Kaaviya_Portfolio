import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import PeacockLogo from "../assets/peacock.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/research", label: "Research" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  const base =
    "relative px-3 py-1.5 text-sm font-medium transition-colors duration-200";
  const inactive = "text-slate-200/80 hover:text-rose-300";
  const active = "text-rose-300";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        scrolled ? "backdrop-blur-lg bg-slate-950/70 border-b border-slate-900" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700 overflow-hidden">
            <img
              src={PeacockLogo}
              alt="Logo"
              className="h-8 w-8 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-50">
              Kaaviyashri&nbsp;Saraboji
            </span>
            <span className="text-[11px] text-slate-400">
              Portfolio · Software Engineering & AI
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 rounded-full bg-slate-950/70 border border-slate-800 px-2 py-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive}`
              }
            >
              {({ isActive }) => (
                <span className="relative inline-flex items-center">
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-gradient-to-r from-rose-400 to-cyan-400" />
                  )}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950/80 p-2 text-slate-100 md:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="md:hidden border-t border-slate-900 bg-slate-950/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-3 py-2 text-sm ${
                    isActive
                      ? "bg-slate-900 text-rose-300"
                      : "text-slate-200/90 hover:bg-slate-900 hover:text-rose-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
