import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Star } from "lucide-react";
import PeacockLogo from "../assets/peacock.png";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/research", label: "Research" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  const base =
    "relative text-sm font-medium transition-colors duration-200";
  const inactive = "text-gray-200/90 hover:text-rose-300";
  const active =
    "text-rose-300 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:scale-x-100 after:origin-left after:rounded-full after:bg-rose-300 after:transition-transform after:duration-300";

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 h-16 transition-all animate-slide-down " +
        (scrolled
          ? "bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 shadow-sm"
          : "bg-gray-900/90 backdrop-blur-sm")
      }
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* brand */}
      <Link to="/" className="flex items-center gap-2 group">
          {/*<Star className="h-6 w-6 text-rose-300 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />*/}
          <img
  src={PeacockLogo}
  alt="Peacock Logo"
  className="h-11 w-11 transition-all duration-300 group-hover:rotate-5 group-hover:scale-110
             hover:drop-shadow-[0_0_10px_rgba(0,170,255,0.7)]"
/>
          <span className="text-base font-semibold text-white">
            Kaaviyashri Saraboji
          </span>
        </Link>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `${base} ${isActive ? active : inactive} group`
              }
            >
              <span className="relative">
                {n.label}
                {/* hover underline for inactive links */}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 rounded-full bg-rose-300 transition-transform duration-300 group-hover:scale-x-100" />
              </span>
            </NavLink>
          ))}
        </nav>

        {/* mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-gray-200/90 hover:text-rose-300"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-gray-800 bg-gray-900/95 backdrop-blur-sm animate-fade-in">
          <div className="mx-auto max-w-6xl px-6 py-3">
            <div className="flex flex-col">
              {nav.map((n, i) => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    "px-2 py-2 rounded-md " +
                    (isActive
                      ? "bg-gray-800 text-rose-300"
                      : "text-gray-200/90 hover:text-rose-300 hover:bg-gray-800")
                  }
                >
                  <span className={`animate-fade-up delay-${i * 100}`}>{n.label}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
