import React from "react";
import { Mail, Linkedin, Github, Star } from "lucide-react";
import Reveal from "./Reveal";
import { Link } from "react-router-dom";
import PeacockLogo from "../assets/peacock.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { href: "mailto:saraboji5411@uwlax.edu", icon: Mail, label: "Email" },
    {
      href: "https://www.linkedin.com/in/kaaviyashri-saraboji-6ba1871ba",
      icon: Linkedin,
      label: "LinkedIn",
    },
    { href: "https://github.com/Kaaviyashri", icon: Github, label: "GitHub" },
  ];

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <Reveal className="animate-fade-up">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Brand */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                {/*<Star className="h-6 w-6 text-rose-300" />*/}
                <img src={PeacockLogo} alt="Peacock Logo" className="h-9 w-9" />
                <span className="text-lg font-semibold text-white">
                  Kaaviyashri Saraboji
                </span>
              </div>
              <p className="text-sm text-gray-400">
                Graduate Student - Software Engineer
              </p>
              <div className="flex gap-3">
                {socials.map((s, i) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`rounded-lg bg-gray-900 p-2 text-gray-400 transition hover:scale-105 hover:bg-gray-800 hover:text-rose-300 animate-fade-up delay-${100 + i * 100}`}
                  >
                    <s.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-up delay-200">
              <h3 className="mb-3 font-semibold text-white">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  { label: "Home", to: "/" },
                  { label: "About", to: "/about" },
                  { label: "Research", to: "/research" },
                  { label: "Projects", to: "/projects" },
                  { label: "Experience", to: "/experience" },
                  { label: "Contact", to: "/contact" },
                ].map((item, i) => (
                  <li key={item.to} className={`animate-fade-up delay-[${200 + i * 80}ms]`}>
                    <Link to={item.to} className="transition-colors hover:text-rose-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-sm animate-fade-up delay-300">
              <h3 className="mb-3 font-semibold text-white">Get in touch</h3>
              <a
                href="mailto:saraboji5411@uwlax.edu"
                className="block transition-colors hover:text-rose-300"
              >
                saraboji5411@uwlax.edu
              </a>
              <p className="text-gray-400">La Crosse, WI</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-gray-800 pt-6 text-xs text-gray-500 sm:flex-row animate-fade-in delay-400">
            <span>© {year} Kaaviyashri Saraboji. All rights reserved.</span>
            <span>Built with React + Tailwind</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
