import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import PeacockLogo from "../assets/peacock.png";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    {
      href: "mailto:saraboji5411@uwlax.edu",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://www.linkedin.com/in/kaaviyashri-saraboji-6ba1871ba",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/Kaaviyashri",
      icon: Github,
      label: "GitHub",
    },
  ];

  const navLinks = [
    { to: "/about", label: "About" },
    { to: "/research", label: "Research" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Reveal className="space-y-8">
          {/* Top Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            
            {/* Brand + Socials */}
            <div className="space-y-3">
              <Link
                to="/"
                className="flex items-center gap-2 group"
                aria-label="Go to homepage"
              >
                {/* MATCH header.jsx circular logo container */}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 border border-slate-700 overflow-hidden">
                  <img
                    src={PeacockLogo}
                    alt="Peacock logo"
                    className="h-8 w-8 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  />
                </div>

                <div>
                  <p className="text-sm font-semibold text-slate-50">
                    Kaaviyashri Saraboji
                  </p>
                  <p className="text-xs text-slate-400">
                    Graduate student · Software Engineering · Applied AI
                  </p>
                </div>
              </Link>

              <p className="max-w-xs text-xs text-slate-400">
                Building and studying software systems, machine learning models,
                and data-driven tools with applications in healthcare, public
                safety, and nonprofit work.
              </p>

              <div className="flex gap-2 pt-1">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-300 hover:text-rose-200 hover:border-rose-400 hover:bg-slate-900 transition"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="text-sm">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Navigation
              </h3>
              <ul className="space-y-1.5">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-300 hover:text-rose-200 transition text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="text-sm">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Contact
              </h3>
              <div className="space-y-2 text-xs text-slate-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:saraboji5411@uwlax.edu"
                    className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
                  >
                    saraboji5411@uwlax.edu
                  </a>
                </p>
                <p>
                  LinkedIn:{" "}
                  <a
                    href="https://www.linkedin.com/in/kaaviyashri/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
                  >
                    www.linkedin.com/in/kaaviyashri
                  </a>
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/Kaaviyashri"
                    target="_blank"
                    rel="noreferrer"
                    className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
                  >
                    github.com/Kaaviyashri
                  </a>
                </p>
                <p className="pt-1 text-slate-400">
                  Based in La Crosse, WI, USA.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 pt-4 flex flex-col items-center justify-between gap-2 text-[11px] text-slate-500 sm:flex-row">
            <span>© {year} Kaaviyashri Saraboji. All rights reserved.</span>
            <span>Built with React &amp; Tailwind CSS.</span>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
