import React from "react";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl space-y-12">
      {/* Header */}
      <section className="pt-4 sm:pt-6">
        <Reveal className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
            Contact
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
            Let’s connect
          </h1>

          <p className="max-w-2xl text-sm sm:text-base text-slate-300">
            Whether you are a recruiter, collaborator, faculty member, or someone
            interested in my work, I’m open to thoughtful conversations about
            software engineering, AI/ML, research, and community-focused technology.
          </p>
        </Reveal>
      </section>

      {/* Contact Information */}
      <section className="grid gap-8 sm:grid-cols-2">
        <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">Contact Details</h2>

          <div className="space-y-3 text-slate-300 text-sm sm:text-base">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-rose-300" />
              <a
                href="mailto:saraboji5411@uwlax.edu"
                className="hover:text-rose-200 duration-200"
              >
                saraboji5411@uwlax.edu
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-blue-300" />
              <a
                href="https://www.linkedin.com/in/kaaviyashri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200 duration-200"
              >
                linkedin.com/in/kaaviyashri
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Github className="h-5 w-5 text-slate-300" />
              <a
                href="https://github.com/Kaaviyashri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-slate-200 duration-200"
              >
                github.com/Kaaviyashri
              </a>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-emerald-300" />
              <span>La Crosse, Wisconsin, USA</span>
            </div>
          </div>
        </Reveal>

        {/* Professional Statement */}
        <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-4">
          <h2 className="text-xl font-semibold text-slate-50">
            Professional Availability
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I welcome opportunities in{" "}
            <span className="text-rose-200 font-medium">
              AI software engineering, machine learning engineering, data science,
              and applied ML, as well as full-stack roles where AI and data are central
            </span>
            . I am open to{" "}
            <span className="text-rose-200 font-medium">
              full-time, part-time, on-site, hybrid, and remote roles
            </span>{" "}
            that value careful engineering, collaboration, and real-world impact.
          </p>


          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I especially enjoy projects that connect technical depth with
            real-world outcomes. Feel free to reach out if you’d like to discuss
            a role, research idea, collaboration, or future opportunity.
          </p>
        </Reveal>
      </section>
    </div>
  );
}
