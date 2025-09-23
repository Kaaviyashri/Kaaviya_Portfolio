import React from "react";
import { Briefcase } from "lucide-react";

// A reusable component to apply the `animate-fade-up` effect
const Reveal = ({ children, className }) => <div className={className}>{children}</div>;

const EXPERIENCES = [
  {
    role: "Resident Assistant",
    company: "University of Wisconsin–La Crosse",
    location: "La Crosse, WI",
    period: "Aug 2025 – Present",
    bullets: [
      "Provided peer support, mentorship, and conflict resolution in residence halls.",
      "Organized community events and facilitated student engagement.",
      "Troubleshot student technology issues (Wi-Fi, laptops, accounts).",
      "Improved communication and collaboration between staff and residents.",
    ],
  },
  {
    role: "Lab Assistant — Wings Lab",
    company: "University of Wisconsin–La Crosse",
    location: "La Crosse, WI",
    period: "Sep 2024 – May 2025",
    bullets: [
      "Assisted students with programming tasks in C, Java, Python, and React.",
      "Supported AI/ML coursework by configuring tools and debugging errors.",
      "Maintained and updated lab software environments for reliability.",
      "Resolved hardware/software issues and documented troubleshooting steps.",
      "Guided peers in project-based learning, improving coding confidence.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "7Angle",
    location: "Chennai, India",
    period: "Apr 2024 – Jul 2024",
    bullets: [
      "Built React applications with responsive UIs and REST API integrations.",
      "Optimized frontend performance and improved cross-browser compatibility.",
      "Collaborated in Agile sprints using Git, Jira, and daily stand-ups.",
      "Designed reusable React components and modular UI layouts.",
      "Documented frontend workflows to streamline onboarding for future interns.",
    ],
  },
  {
    role: "Deputy Manager — Digital Banking Technology",
    company: "ICICI Bank",
    location: "India",
    period: "Jul 2020 – Jan 2024",
    bullets: [
      "Led task allocation and workflow tracking using CRM dashboards.",
      "Collaborated with tech teams to improve digital banking processes.",
      "Built Power BI dashboards to analyze 50k+ customer interactions.",
      "Identified trends and recommended automation opportunities.",
      "Mentored junior staff on technology adoption and best practices.",
      "Coordinated between business and IT teams to deliver solutions on time.",
    ],
  },
];

export default function Experience() {
  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Hero */}
      <section className="border-b border-gray-200 py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl">
          <Reveal className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <Briefcase className="h-4 w-4 text-rose-400" />
              Professional Journey
            </span>
          </Reveal>
          <Reveal className="animate-fade-up delay-100">
            <h1 className="mt-6 text-4xl font-extrabold text-gray-900">Experience</h1>
          </Reveal>
          <Reveal className="animate-fade-up delay-150">
            <p className="mt-4 text-lg text-gray-700">
              Roles where I contributed to technology, leadership, and growth.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white px-6">
        <div className="mx-auto max-w-5xl py-16">
          <div className="relative border-l border-gray-200">
            {EXPERIENCES.map((exp, i) => (
              <Reveal key={i} className={`animate-fade-up delay-${i * 150 + 200}`}>
                <div className="mb-12 ml-6">
                  {/* Dot */}
                  <span className="absolute -left-2 mt-2 h-4 w-4 rounded-full bg-rose-400 border-2 border-white shadow" />

                  {/* Card */}
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                      <span className="text-sm text-gray-500">{exp.period}</span>
                    </div>
                    <p className="text-sm font-medium text-rose-700">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>

                    {/* Bullets */}
                    <ul className="mt-4 space-y-2 text-sm text-gray-700">
                      {exp.bullets.map((line, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scoped keyframes */}
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-up { animation-name: fade-up; animation-duration: 500ms; animation-fill-mode: both; animation-timing-function: ease; }
        
        /* Utility for animation delays */
        .delay-100 { animation-delay: 100ms; }
        .delay-150 { animation-delay: 150ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-250 { animation-delay: 250ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-350 { animation-delay: 350ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-450 { animation-delay: 450ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-550 { animation-delay: 550ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-650 { animation-delay: 650ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-750 { animation-delay: 750ms; }
        .delay-800 { animation-delay: 800ms; }
      `}</style>
    </div>
  );
}
