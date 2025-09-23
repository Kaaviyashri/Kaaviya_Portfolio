import React from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Target,
  Users,
  Sparkles,
  Star,
  Download,
  Trophy,
  Briefcase,
  Code,
  GraduationCap,
  CheckCircle2,
  HandHeart,
  ShieldCheck,
  BookOpen,
  User,
} from "lucide-react";

// --- A small, inline Reveal component to use directly in this file ---
function Reveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

// The resume PDF is expected to be in the 'public' folder.
const resumeUrl = "/Kaaviyashri-Resume.pdf";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className = "animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <User className="h-4 w-4 text-rose-400" />
              Background
            </span>
            <h1 className="mt-6 text-4xl font-bold text-gray-900">About Me</h1>
            <p className="mt-4 text-lg text-gray-700">
              I’m Kaaviya, a graduate student in
              software engineering who enjoys building practical AI/ML and{" "}
              full-stack solutions with real-world impact.
            </p>
          </Reveal>

          {/* 2-COLUMN INTRO */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Left: Bio */}
            <Reveal className="animate-fade-up delay-100 md:col-span-2">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100/70 px-3 py-1 text-sm font-medium text-rose-700">
                  <GraduationCap className="h-4 w-4" />
                  MS Software Engineering — University of Wisconsin–La Crosse
                </div>

                <p className="text-gray-700">
                  My background bridges AI/ML, data science, and software engineering.
                  I enjoy turning ideas into dependable systems—clean design, measurable outcomes, and
                  thoughtful user experience. Before graduate school, I spent 4+ years in
                  digital banking technology where I partnered with tech teams and built data dashboards
                  used across large operations.
                </p>

                <p className="mt-4 text-gray-700">
                  I’m actively learning and improving—especially around model evaluation, responsible
                  deployment, and building maintainable web apps. I thrive in teams that value{" "}
                  clarity, empathy, and iteration.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={resumeUrl}
                    download
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-rose-300 hover:text-rose-700"
                  >
                    <Download className="h-4 w-4" />
                    Download CV
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Right: Research Interests */}
            <Reveal className="animate-fade-up delay-150">
              <aside className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <BookOpen className="h-5 w-5 text-rose-600" />
                  Research Interests
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Machine Learning & Deep Learning",
                    "Computer Vision (real-time detection, evaluation)",
                    "AI in healthcare",
                    "Ethics of AI",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="animate-fade-up">
            <h2 className="text-2xl font-semibold text-gray-900">Core Values</h2>
            <p className="mt-2 text-gray-700">Principles that guide how I research, build, and collaborate.</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { icon: Sparkles, title: "Curiosity", text: "Learn constantly, prototype early, ask good questions." },
              { icon: Target, title: "Practical Impact", text: "Ship usable systems with clear metrics and trade-offs." },
              { icon: ShieldCheck, title: "Responsibility", text: "Prioritize safety, privacy, and fair evaluation." },
              { icon: Users, title: "Collaboration", text: "Value diverse expertise to achieve shared goals." },
            ].map((v, i) => (
              <Reveal key={v.title} className={`animate-fade-up delay-${i * 100}`}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="mb-3 flex items-center gap-2">
                    <v.icon className="h-5 w-5 text-rose-600" />
                    <h3 className="text-base font-semibold text-gray-900">{v.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="animate-fade-up">
            <h2 className="text-2xl font-semibold text-gray-900">Education</h2>
            <p className="mt-2 text-gray-700">Learning that shaped my foundations and focus.</p>
          </Reveal>

          {/* Now 3 columns on desktop */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* MS — Software Engineering (UWL) */}
            <Reveal className="animate-fade-up delay-100">
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">MS - Software Engineering</h3>
                    <p className="text-sm text-gray-700">University of Wisconsin–La Crosse</p>
                  </div>
                  <GraduationCap className="h-5 w-5 text-rose-600" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Star className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>Merit-Based Out-of-State Tuition Award (2025–26)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>3-Minute Graduate Project Competition — Winner</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>Coursework: Artificial Intelligence, Software Design, Software Verification & Validation, Software Project Management, Information Security, Programming Language Concepts</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* MSc — Computer Science */}
            <Reveal className="animate-fade-up delay-200">
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">MSc - Computer Science</h3>
                    <p className="text-sm text-gray-700">
                      Bharathidasan University
                    </p>
                  </div>
                  <GraduationCap className="h-5 w-5 text-rose-600" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>Focus: OOAD & UML, Advanced Java Programming, Web Technologies, C#, .NET, Data Mining and Data Warehousing, Network Security, Compiler Design and Open Source Technologies </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>Capstone & advanced coursework in applied computing</span>
                  </li>
                </ul>
              </div>
            </Reveal>

            {/* BSc — Computer Science */}
            <Reveal className="animate-fade-up delay-300">
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">BSc - Computer Science</h3>
                    <p className="text-sm text-gray-700">
                      A.V.V.M. Sri Pushpam College (Bharathidasan University)
                    </p>
                  </div>
                  <GraduationCap className="h-5 w-5 text-rose-600" />
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Trophy className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>Certificate of Merit (2019) — Bharathidasan University</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Trophy className="mt-0.5 h-4 w-4 text-rose-500" />
                    <span>Certificate of Proficiency (2018) — Sri Pushpam College</span>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* SKILLS */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="animate-fade-up">
            <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
            <p className="mt-2 text-gray-700">
              A focused toolkit across AI/ML, data science, full-stack development, and software engineering.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Programming */}
            <Reveal className="animate-fade-up delay-100">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5 text-rose-600" />
                  <h3 className="text-base font-semibold text-gray-900">Programming</h3>
                </div>
                <p className="text-sm text-gray-700">
                  C, C++, Java, Python, JavaScript, R, Haskell, Prolog, Scheme, Lisp
                </p>
              </div>
            </Reveal>

            {/* AI/ML & Data */}
            <Reveal className="animate-fade-up delay-200">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-rose-600" />
                  <h3 className="text-base font-semibold text-gray-900">AI/ML & Data</h3>
                </div>
                <p className="text-sm text-gray-700">
                  scikit-learn, TensorFlow, PyTorch, OpenCV, YOLO, NumPy, Pandas, Matplotlib, Plotly, Statsmodels, Tableau, Power BI<br />
                  <span className="italic text-gray-500">Currently learning: Hugging Face, MLflow</span>
                </p>
              </div>
            </Reveal>

            {/* Web & Tools */}
            <Reveal className="animate-fade-up delay-300">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-rose-600" />
                  <h3 className="text-base font-semibold text-gray-900">Web & Tools</h3>
                </div>
                <p className="text-sm text-gray-700">
                  MERN (MongoDB, Express, React, Node), REST APIs, JWT Auth, RBAC<br />
                  MySQL, MongoDB, Git/GitHub, Figma<br />
                  <span className="italic text-gray-500">Currently learning: Docker, PostgreSQL, CI/CD (GitHub Actions)</span>
                </p>
              </div>
            </Reveal>

            {/* Software Engineering */}
            <Reveal className="animate-fade-up delay-400">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-rose-600" />
                  <h3 className="text-base font-semibold text-gray-900">Software Engineering</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Secure Coding (SQLi, XSS), Cryptography (RSA, Diffie–Hellman, OIDC)<br />
                  Formal Verification (VDM-SL), Testing (JUnit, Selenium, Decision Tables, Petri Nets)<br />
                  <span className="italic text-gray-500">Currently learning: OWASP Top 10, API Security</span>
                </p>
              </div>
            </Reveal>

            {/* Collaboration & Project Tools */}
            <Reveal className="animate-fade-up delay-500">
              <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <Users className="h-5 w-5 text-rose-600" />
                  <h3 className="text-base font-semibold text-gray-900">Collaboration</h3>
                </div>
                <p className="text-sm text-gray-700">
                  Agile & Predictive Project Management (PMI Certified), UML Modeling, Requirements Engineering<br />
                  Team Tools: Jira, Trello, Slack
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>


      {/* CERTIFICATIONS */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="animate-fade-up">
            <h2 className="text-2xl font-semibold text-gray-900">Certifications</h2>
            <p className="mt-2 text-gray-700">Recent learning highlights from 2024–2025.</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Deloitte - Data Analytics Job Simulation (2025)",
              "Google - AI Essentials (2025)",
              "AWS Educate - Generative AI, ML Foundations, Fundamentals of AI (2025)",
              "Prompt Engineering with OpenAI - Columbia+ (2025)",
              "IBM - Introduction to AI (2025)",
              "PMI - Agile & Predictive Project Management (2025)",
              "Java Full Stack Developer - Greens Technology (2024)",
              "Fundamentals of Java Programming - Coursera (2024)",
            ].map((c, i) => (
              <Reveal key={c} className={`animate-fade-up delay-${i * 100}`}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="mt-1.5 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-rose-400" />
                  <div className="text-sm text-gray-800">{c}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS & COMMUNITY */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal className="animate-fade-up">
            <h2 className="text-2xl font-semibold text-gray-900">Campus & Community Involvement</h2>
            <p className="mt-2 text-gray-700">I enjoy contributing to student life and local events.</p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              "Senator - International Student Organization (UWL)",
              "Volunteer Greeter - Election Day Helper (UWL)",
              "Volunteer Guide - Special Olympics, La Crosse",
              "Desk Assistant - The Nature Place, La Crosse",
              "Activity Host - Children’s Museum of La Crosse",
              "Presenter - International Cultural Coffee Hour (UWL)",
              "Life Saver Certificate - Fire Prevention & Fire Fighting",
            ].map((v, i) => (
              <Reveal key={v} className={`animate-fade-up delay-${i * 100}`}>
                <div className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <HandHeart className="mt-0.5 h-5 w-5 text-rose-600" />
                  <div className="text-sm text-gray-800">{v}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
