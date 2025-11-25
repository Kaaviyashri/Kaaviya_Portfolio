// src/pages/Home.jsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Cpu, Award } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import profile from "../assets/Kaaviyashri.jpg";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl space-y-16">
      {/* HERO */}
      <section className="pt-4 pb-6 sm:pt-8 sm:pb-10">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Text side */}
          <Reveal className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/40 bg-rose-500/10 px-3 py-1 text-[11px] font-medium text-rose-200">
              <Sparkles className="h-3.5 w-3.5" />
              Software Engineering · Machine Learning · Computer Vision · AI Ethics
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-slate-50">
              Hi, I’m{" "}
              <span className="bg-gradient-to-r from-rose-300 via-rose-200 to-cyan-300 bg-clip-text text-transparent">
                Kaaviyashri&nbsp;Saraboji
              </span>
              .
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-slate-200/90">
              I am a graduate student in Software Engineering at the University of
              Wisconsin–La Crosse with a background in Computer Science. My work spans
              applied machine learning, computer vision, and full-stack web development,
              with a strong focus on healthcare, public safety, and nonprofit impact.
            </p>

            <p className="max-w-2xl text-sm sm:text-base text-slate-200/90">
              I enjoy problems where models, systems, and people intersect: designing data
              pipelines and evaluation strategies, thinking about reliability and ethics,
              and translating those ideas into well-structured, maintainable software.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-cyan-400 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.7)] hover:brightness-110 transition"
              >
                View projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>

              <Link
                to="/research"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 hover:border-rose-400 hover:text-rose-200 transition"
              >
                Research & themes
              </Link>
            </div>

            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-400 border border-slate-700/80">
              <Cpu className="h-3 w-3 text-rose-300" />
              MS Software Engineering · University of Wisconsin–La Crosse
            </span>
          </Reveal>

          {/* Photo side */}
          <Reveal className="flex justify-center">
            <div className="relative w-fit">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-rose-500/80 via-cyan-400/70 to-emerald-400/40 blur-xl opacity-60" />
              <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800/80 p-3">
                <img
                  src={profile}
                  alt="Kaaviyashri Saraboji"
                  className="h-64 w-64 sm:h-72 sm:w-72 rounded-2xl object-cover object-top shadow-[0_24px_70px_rgba(0,0,0,0.9)] mx-auto"
                />
                <div className="mt-3 space-y-1 text-xs text-slate-300 text-center">
                  <p className="font-semibold">
                    Graduate student in Software Engineering
                  </p>
                  <p className="text-slate-400">
                    Working across{" "}
                    <span className="text-rose-200">
                      applied AI, software engineering, and data-driven systems
                    </span>{" "}
                    with interest in healthcare and public-impact applications.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>


      {/* ACHIEVEMENTS / HIGHLIGHTS */}
    {/* ACHIEVEMENTS / HIGHLIGHTS */}
<section className="space-y-6 pb-4 sm:pb-6">
  <Reveal className="flex items-center gap-2">
    <Award className="h-5 w-5 text-rose-400" />
    <div>
      <h2 className="text-xl font-semibold text-slate-50">
        Selected awards, scholarships, and academic honors
      </h2>
      <p className="text-xs text-slate-400 mt-1">
        A snapshot of recent recognition for research, innovation, engagement, and academic performance.
      </p>
    </div>
  </Reveal>

  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {/* Research & innovation awards */}
    <Reveal className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.85)] text-sm text-slate-200">
      <div className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400 rounded-t-2xl" />
      <div className="inline-flex items-center gap-2 rounded-full bg-rose-500/10 border border-rose-400/60 px-3 py-1 text-[11px] font-semibold text-rose-50 mb-3">
        Research &amp; innovation
      </div>

      <div className="space-y-2.5">
        <div className="rounded-xl bg-slate-900/80 border border-rose-500/70 px-3 py-2">
          <p className="text-sm font-semibold text-rose-100">
            1st Place – WiSys Innovation On-Ramp (2025)
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            For presenting{" "}
            <em>ARISTOTLE: Ethical Readiness Assessment Tool for Healthcare AI Systems</em>.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-rose-400/50 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            Innovative Thinking Badge – WiSys
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            Awarded at the{" "}
            <a
              href="https://www.wisys.org"
              target="_blank"
              rel="noreferrer"
              className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
            >
              WiSys Innovation On-Ramp
            </a>{" "}
            (Fall 2025).
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-rose-400/40 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            IEEE Innovators Summit – Appreciation Prize
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            For a 3-minute presentation on an AI-powered animal–vehicle collision
            prevention system at the{" "}
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noreferrer"
              className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
            >
              IEEE 2025 Innovators Summit
            </a>{" "}
            (UW–La Crosse).
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-rose-400/40 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            Featured Student – UWL News &amp; Program Page
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            Profiled in{" "}
            <a
              href="https://www.uwlax.edu/news/posts/nature-inspired-innovation/"
              target="_blank"
              rel="noreferrer"
              className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
            >
              “Nature-Inspired Innovation”
            </a>{" "}
            and highlighted on the{" "}
            <a
              href="https://www.uwlax.edu/academics/grad/software-engineering/"
              target="_blank"
              rel="noreferrer"
              className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
            >
              M.S. Software Engineering program page
            </a>{" "}
            (2025).
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-rose-400/40 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            1st Place – 3-Minute Graduate Project Competition
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            University of Wisconsin–La Crosse (2025).
          </p>
        </div>
      </div>
    </Reveal>

    {/* Scholarships & recognition */}
    <Reveal className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.85)] text-sm text-slate-200">
      <div className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-t-2xl" />
      <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 border border-cyan-400/60 px-3 py-1 text-[11px] font-semibold text-cyan-50 mb-3">
        Scholarships &amp; institutional recognition
      </div>

      <div className="space-y-2.5">
        <div className="rounded-xl bg-slate-900/80 border border-cyan-500/70 px-3 py-2">
          <p className="text-sm font-semibold text-cyan-100">
            I-Engage Scholarship – International Education Engagement
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            <a
              href="https://www.uwlax.edu/gel/graduate-education/current-students/"
              target="_blank"
              rel="noreferrer"
              className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
            >
              University of Wisconsin–La Crosse
            </a>
            , Fall 2025.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-cyan-400/50 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            Merit-Based Tuition Grant
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            <a
              href="https://www.uwlax.edu"
              target="_blank"
              rel="noreferrer"
              className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
            >
              University of Wisconsin–La Crosse
            </a>{" "}
            (2024–2025).
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-cyan-400/40 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            Chancellor’s Volunteer Service Award (Gold Level)
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            University of Wisconsin–La Crosse (2025).
          </p>
        </div>
      </div>
    </Reveal>

    {/* Academic honors */}
    <Reveal className="relative rounded-2xl border border-slate-800 bg-slate-950/80 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.85)] text-sm text-slate-200">
      <div className="absolute inset-x-0 -top-px h-0.5 bg-gradient-to-r from-emerald-400 via-lime-300 to-teal-400 rounded-t-2xl" />
      <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-400/60 px-3 py-1 text-[11px] font-semibold text-emerald-50 mb-3">
        Academic honors
      </div>

      <div className="space-y-2.5">
        <div className="rounded-xl bg-slate-900/80 border border-emerald-500/70 px-3 py-2">
          <p className="text-sm font-semibold text-emerald-100">
            Certificate of Merit – Academic Distinction
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            Bharathidasan University, 2019.
          </p>
        </div>

        <div className="rounded-xl bg-slate-900/70 border border-emerald-400/50 px-3 py-2">
          <p className="text-sm font-semibold text-slate-100">
            Certificate of Proficiency – Academic Performance
          </p>
          <p className="text-sm text-slate-300 mt-0.5">
            A.V.V.M. Sri Pushpam College (Bharathidasan University), 2018.
          </p>
        </div>
      </div>
    </Reveal>
  </div>
</section>

    </div>
  );
}
