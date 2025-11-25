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
                Research Focus & Experience
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


     {/* SELECTED AWARDS – RICH VERTICAL LAYOUT */}
<section className="space-y-6">
  <Reveal className="space-y-3">
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
      Selected awards, scholarships & academic honors
    </span>

    <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
      A snapshot of recent recognition in research, innovation, engagement, and academics
    </h2>
  </Reveal>

  <div className="mt-4 space-y-8">
    {/* RESEARCH & INNOVATION GROUP */}
    <Reveal className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-rose-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-100">
        Research & innovation
      </div>

      <div className="space-y-4">
        {/* WiSys 1st Place */}
        <article className="relative overflow-hidden rounded-2xl border border-rose-500/40 bg-gradient-to-r from-slate-950/95 via-slate-950/90 to-slate-950/95 p-4 sm:p-5">
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-rose-400 via-amber-300 to-emerald-300" />
          <div className="pl-4 sm:pl-5 space-y-1.5">
            <h3 className="text-base sm:text-lg font-semibold text-slate-50">
              1st Place – WiSys Innovation On-Ramp (2025)
            </h3>
            <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
              Innovation · Applied AI · Healthcare ethics
            </p>
            <p className="text-sm text-slate-200">
              For presenting{" "}
              <span className="text-rose-200 font-medium">
                ARISTOTLE: Ethical Readiness Assessment Tool for Healthcare AI Systems
              </span>
              . Event hosted by{" "}
              <a
                href="https://www.wisys.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-200 underline decoration-slate-500/60 underline-offset-2 hover:text-rose-100"
              >
                WiSys
              </a>
              .
            </p>
          </div>
        </article>

        {/* WiSys Innovative Thinking Badge */}
        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Innovative Thinking Badge – WiSys (2025)
          </h3>
          <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
            Creativity · Problem framing
          </p>
          <p className="text-sm text-slate-200 mt-1.5">
            Awarded at the WiSys Innovation On-Ramp for ideation, problem-framing,
            and applied innovation in AI-driven tools.
          </p>
        </article>

        {/* IEEE Innovators Summit */}
        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            IEEE Innovators Summit – Appreciation Prize (2025)
          </h3>
          <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
            Short talk · AI & safety
          </p>
          <p className="text-sm text-slate-200 mt-1.5">
            Recognition for a 3-minute presentation on an{" "}
            <span className="text-rose-200 font-medium">
              Operationalizing WHO Ethical Priniciples for AI in Healthcare -  A Governance-By-Design Lifecycle Framework
            </span>{" "}
            at the IEEE Innovators Summit hosted at UW–La Crosse.
          </p>
        </article>

        {/* 3-Minute Graduate Project Competition */}
        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            1st Place – 3-Minute Graduate Project Competition (2025)
          </h3>
          <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
            Impact 
          </p>
          <p className="text-sm text-slate-200 mt-1.5">
            University of Wisconsin–La Crosse competition highlighting project titled AI powered Animal-Vehicle Collision Prevention System
          </p>
        </article>

        {/* Featured student */}
        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Featured Student – UWL News & M.S. Software Engineering Program (2025)
          </h3>
          <p className="text-xs text-slate-400 uppercase tracking-[0.18em]">
            Public recognition · Student profile
          </p>
          <p className="text-sm text-slate-200 mt-1.5">
            Profiled in{" "}
            <a
              href="https://www.uwlax.edu/news/posts/nature-inspired-innovation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-200 underline decoration-slate-500/60 underline-offset-2 hover:text-rose-100"
            >
              “Nature-Inspired Innovation”
            </a>{" "}
            and highlighted on the{" "}
            <a
              href="https://www.uwlax.edu/academics/grad/software-engineering/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-200 underline decoration-slate-500/60 underline-offset-2 hover:text-rose-100"
            >
              M.S. Software Engineering program page
            </a>{" "}
            for applied software and AI work.
          </p>
        </article>
      </div>
    </Reveal>

    {/* SCHOLARSHIPS & INSTITUTIONAL RECOGNITION */}
    <Reveal className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/50 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100">
        Scholarships & institutional recognition
      </div>

      <div className="space-y-4">
        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            I-Engage Scholarship – International Education Engagement
          </h3>
          <p className="text-xs text-slate-400">University of Wisconsin–La Crosse · Fall 2025</p>
          <p className="text-sm text-slate-200 mt-1.5">
            Scholarship recognizing meaningful international engagement, leadership,
            and contribution to the global campus community.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Merit-Based Tuition Grant
          </h3>
          <p className="text-xs text-slate-400">University of Wisconsin–La Crosse · 2024–2025</p>
          <p className="text-sm text-slate-200 mt-1.5">
            Awarded in recognition of strong academic performance and sustained progress
            in graduate study.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Chancellor’s Volunteer Service Award — Gold Level
          </h3>
          <p className="text-xs text-slate-400">University of Wisconsin–La Crosse · 2025</p>
          <p className="text-sm text-slate-200 mt-1.5">
            Highest-level institutional recognition for sustained volunteerism,
            community engagement, and service contributions.
          </p>
        </article>
      </div>
    </Reveal>

    {/* ACADEMIC HONORS */}
    <Reveal className="space-y-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/50 bg-sky-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-100">
        Academic honors
      </div>

      <div className="space-y-4">
        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Certificate of Merit – Academic Distinction
          </h3>
          <p className="text-xs text-slate-400">Bharathidasan University · 2019</p>
          <p className="text-sm text-slate-200 mt-1.5">
            Awarded for high academic distinction in computer science.
          </p>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4 sm:p-5">
          <h3 className="text-base sm:text-lg font-semibold text-slate-100">
            Certificate of Proficiency – Academic Performance
          </h3>
          <p className="text-xs text-slate-400">
            A.V.V.M. Sri Pushpam College (Bharathidasan University) · 2018
          </p>
          <p className="text-sm text-slate-200 mt-1.5">
            Recognition for strong academic performance during undergraduate study
            in Computer Science.
          </p>
        </article>
      </div>
    </Reveal>
  </div>
</section>

    </div>
  );
}
