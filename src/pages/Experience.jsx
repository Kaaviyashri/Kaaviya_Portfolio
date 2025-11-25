// src/pages/Experience.jsx
import React from "react";
import {
  GraduationCap,
  Users,
  Briefcase,
  Award,
} from "lucide-react";
import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Header */}
      <section className="pt-4 sm:pt-6">
        <Reveal className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
            Experience
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
            Professional, teaching & leadership experience
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            My experience spans{" "}
            <span className="text-rose-200">
              software engineering, full-stack development, AI/ML projects,
              digital banking technology, teaching, and student leadership
            </span>
            . I enjoy working where technical depth, collaboration, and
            community impact come together.
          </p>
        </Reveal>
      </section>

      {/* TEACHING & MENTORING */}
      <section className="space-y-6">
        <Reveal className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-rose-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Teaching & mentoring experience
          </h2>
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-1">
          <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-full border border-blue-400/50 bg-blue-500/10 px-3 py-1 text-blue-100 font-medium">
                Teaching & Lab Support
              </span>
            </div>

            <h3 className="text-lg font-semibold text-slate-50">
              Lab Assistant — Wings Technology Lab, University of Wisconsin–La Crosse
            </h3>
            <p className="text-xs text-slate-400">September 2024 – May 2025</p>

            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>
                • Assisted undergraduate and graduate students with programming questions
                in Python, C, and React, emphasizing problem-solving and debugging strategies.
              </li>
              <li>
                • Clarified concepts in data structures, algorithms, and software engineering,
                helping students translate theory into working code.
              </li>
              <li>
                • Diagnosed build, environment, and dependency issues on lab machines to keep
                course projects running smoothly.
              </li>
              <li>
                • Encouraged good practices such as version control, readable code, and
                incremental testing.
              </li>
            </ul>
          </article>
        </Reveal>
      </section>

      {/* PROFESSIONAL EXPERIENCE */}
      <section className="space-y-6">
        <Reveal className="flex items-center gap-2">
          <Briefcase className="h-5 w-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Professional experience
          </h2>
        </Reveal>

        <div className="space-y-6">
          {/* Habitat — Web Developer */}
          <Reveal>
            <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-emerald-100 font-medium">
                  Full-Stack Development · Nonprofit
                </span>
                <span className="rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1 text-slate-300">
                  Volunteer Role
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-50">
                Web Developer (Volunteer) — Habitat for Humanity, La Crosse Region
              </h3>
              <p className="text-xs text-slate-400">September 2025 – Present</p>

              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>
                  • Leading development of a MERN-based portal that streamlines housing
                  applications and volunteer management for a regional Habitat affiliate.
                </li>
                <li>
                  • Implementing secure authentication (JWT, OTP/reset), role-based access
                  control, and protected admin workflows for application review.
                </li>
                <li>
                  • Designing multi-step application flows with autosave, document uploads,
                  and clear status visibility for applicants and staff.
                </li>
                <li>
                  • Collaborating with nonprofit stakeholders to refine requirements,
                  prioritize features, and align the system with real operational constraints.
                </li>
              </ul>
            </article>
          </Reveal>

          {/* 7Angle */}
          <Reveal>
            <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full border border-rose-400/50 bg-rose-500/10 px-3 py-1 text-rose-100 font-medium">
                  Frontend Development · React
                </span>
              </div>

            <h3 className="text-lg font-semibold text-slate-50">
                Frontend Developer Intern — 7Angle, Chennai, India
              </h3>
              <p className="text-xs text-slate-400">April 2024 – July 2024</p>

              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>
                  • Developed responsive React.js interfaces using modern UI patterns,
                  improving page load and interaction performance (~25% faster in lab tests).
                </li>
                <li>
                  • Integrated REST APIs for data retrieval and state management, ensuring
                  smooth frontend–backend communication and robust error handling.
                </li>
                <li>
                  • Participated in Agile sprint planning, daily stand-ups, and code reviews,
                  practicing collaborative Git-based workflows.
                </li>
                <li>
                  • Contributed to reusable components and layout patterns to keep
                  codebases maintainable and consistent.
                </li>
              </ul>
            </article>
          </Reveal>

          {/* ICICI Bank */}
          <Reveal>
            <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs">
                <span className="rounded-full border border-yellow-400/50 bg-yellow-500/10 px-3 py-1 text-yellow-100 font-medium">
                  Data Analytics · Digital Banking Technology
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-50">
                Deputy Manager — Digital Banking Technology, ICICI Bank, India
              </h3>
              <p className="text-xs text-slate-400">July 2020 – January 2024</p>

              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li>
                  • Analyzed 50,000+ daily transactions using SQL and Power BI to identify
                  usage patterns, performance issues, and automation opportunities.
                </li>
                <li>
                  • Designed and maintained dashboards that reduced manual reporting
                  workload by ~40% and provided real-time visibility into key digital channels.
                </li>
                <li>
                  • Supported implementation and testing of digital banking features,
                  including mobile banking and biometric authentication services.
                </li>
                <li>
                  • Collaborated with cross-functional teams (IT, operations, business)
                  to translate domain requirements into testable, data-informed solutions.
                </li>
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      {/* LEADERSHIP & COMMUNITY INVOLVEMENT */}
      <section className="space-y-6">
        <Reveal className="flex items-center gap-2">
          <Users className="h-5 w-5 text-purple-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Leadership & community involvement
          </h2>
        </Reveal>

        <Reveal className="grid gap-6 md:grid-cols-2">
          {/* Resident Assistant */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-slate-100">
              Resident Assistant — University of Wisconsin–La Crosse
            </h3>
            <p className="text-xs text-slate-400">August 2025 – Present</p>
            <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-slate-300">
              <li>
                • Responsible for a community of approximately{" "}
                <span className="text-slate-100 font-semibold">40 residents</span>,
                supporting their academic, social, and personal transition to university life.
              </li>
              <li>
                • Facilitating floor meetings, community-building events, and educational
                programs focused on wellbeing, inclusion, and academic success.
              </li>
              <li>
                • Assisting with conflict mediation, crisis response, and referral
                to campus resources in collaboration with Residence Life staff.
              </li>
            </ul>
          </article>

          {/* ISO Senator */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-slate-100">
              Senator — International Student Organization (ISO)
            </h3>
            <p className="text-xs text-slate-400">September 2025 – Present</p>
            <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-slate-300">
              <li>
                • Representing international student perspectives in senate meetings and
                initiatives, helping shape programming and advocacy priorities.
              </li>
              <li>
                • Supporting cultural events, outreach, and community-building activities
                for global student populations on campus.
              </li>
              <li>
                • Collaborating with international education staff and student leaders to
                improve the experience of international students at UWL.
              </li>
            </ul>
          </article>

          {/* Legislative Affairs & Environmental Sustainability */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-slate-100">
              Committee Member — Legislative Affairs & Environmental Sustainability
            </h3>
            <p className="text-xs text-slate-400">September 2025 – Present</p>
            <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-slate-300">
              <li>
                • Contributing to student government discussions on policy, advocacy, and
                campus sustainability initiatives.
              </li>
              <li>
                • Reviewing proposals, gathering student feedback, and helping communicate
                committee priorities to the wider student body.
              </li>
              <li>
                • Engaging with peers and campus partners to promote environmentally
                responsible practices and student voice in governance.
              </li>
            </ul>
          </article>

          {/* Summer Conference Assistant */}
          <article className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-semibold text-slate-100">
              Summer Conference Assistant — University of Wisconsin–La Crosse
            </h3>
            <p className="text-xs text-slate-400">Summer 2025</p>
            <ul className="mt-1.5 space-y-1 text-xs sm:text-sm text-slate-300">
              <li>
                • Oversaw front-desk operations for summer conference housing, supporting
                visiting groups and program participants.
              </li>
              <li>
                • Coordinated check-in/check-out, room allocations, and guest services in
                collaboration with Residence Life and event management teams.
              </li>
              <li>
                • Helped ensure a smooth on-site experience by responding to questions,
                troubleshooting issues, and maintaining clear communication with guests.
              </li>
            </ul>
          </article>
        </Reveal>
      </section>
    </div>
  );
}
