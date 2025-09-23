import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import Reveal from "../components/Reveal";
import profile from "../assets/Kaaviyashri.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-10 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="animate-fade-up">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
                <Star className="h-3.5 w-3.5 text-rose-400" />
                Graduate Student - Software Engineer
              </span>

              <h1 className="text-4xl font-bold text-gray-900">
                Kaaviyashri Saraboji
              </h1>

              <p className="text-lg text-gray-700">
                 Graduate student in Software Engineering and an AI enthusiast,
                  exploring machine learning, deep learning, and{" "}
                  computer vision. Focused on building skills and projects that
                  strengthen my research foundation and technical expertise.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/research"
                  className="inline-flex items-center justify-center rounded-md bg-rose-400 px-5 py-2.5 text-white hover:bg-rose-300 transition animate-scale-in"
                >
                  View Research
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md border border-rose-300 px-5 py-2.5 text-rose-500 hover:bg-rose-50 transition animate-scale-in delay-100"
                >
                  Contact
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Profile Photo */}
          <Reveal className="animate-fade-up delay-100">
            <div className="flex justify-center lg:justify-end">
              <div className="p-1 rounded-2xl bg-gradient-to-r from-rose-200 via-rose-100 to-gray-100">
                <img
                  src={profile}
                  alt="Kaaviyashri Saraboji"
                  className="h-72 w-72 rounded-xl object-cover object-top border-4 border-white shadow-lg animate-float"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Callouts */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {[
            { k: "4+ Years", v: "Professional Experience" },
            { k: "50k+", v: "Customer interactions analyzed (Power BI)" },
            { k: "20+", v: "Technical projects" },
          ].map((item, i) => (
            <Reveal key={item.k} className={`animate-fade-up delay-${i * 150}`}>
              <div className="border-gradient bg-gray-50 p-6 text-center hover:shadow-md transition">
                <p className="text-2xl font-bold text-gray-900">{item.k}</p>
                <p className="text-sm text-gray-600">{item.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-6xl">
          <Reveal className="animate-fade-up">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">Awards & Honors</h2>
              <p className="max-w-2xl text-lg text-gray-600">
                Recognition for research impact, community service, and academic merit.
              </p>
            </div>
          </Reveal> 

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                badge: "Winner",
                title: "1st Place - 3-Minute Graduate Project Competition",
                sub: "University of Wisconsin–La Crosse (2025)",
              },
              {
                badge: "Scholarship",
                title: "I-Engage Scholarship – International Education Engagement",
                sub: "University of Wisconsin–La Crosse (Fall 2025)",
              },
              {
                badge: "Service",
                title: "Chancellor’s Volunteer Service Award – Gold Level",
                sub: "University of Wisconsin–La Crosse (2024-2025)",
              },
              {
                badge: "Merit",
                title: "Out-of-State Tuition Award (Merit-based)",
                sub: "University of Wisconsin–La Crosse (2024–2026)",
              },
              {
                badge: "Merit",
                title: "Certificate of Merit - Bharathidasan University",
                sub: "Academic recognition (2019)",
              },
              {
                badge: "Academic",
                title: "Certificate of Proficiency - A.V.V.M. Sri Pushpam College",
                sub: "Academic recognition (2018)",
              },
            ].map((a, i) => (
              <Reveal key={a.title} className={`animate-fade-up delay-${i * 120}`}>
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-rose-50 to-gray-50 p-6 shadow-sm transition hover:shadow-md hover:border-rose-300">
                  <div className="mb-3 inline-flex items-center rounded-full bg-rose-100/70 px-3 py-1 text-sm font-medium text-rose-700">
                    {a.badge}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{a.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{a.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
