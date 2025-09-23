import React from "react";
import {
  Sparkles,
  Target,
  Heart,
  ShieldCheck,
  FlaskConical,
  Map,
  Camera,
  BarChart3,
  BookOpen,
  FileText,
  ExternalLink,
  CheckCircle2,
  Clock,
} from "lucide-react";

// The Reveal component is now included directly in this file
function Reveal({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

export default function Research() {
  return (
    <div className="min-h-screen">
      {/* ===== Hero ===== */}
      <section className="px-6 py-16 bg-gradient-to-br from-gray-50 via-rose-50/30 to-white">
        <div className="mx-auto max-w-6xl space-y-6">
          <Reveal className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <Sparkles className="h-4 w-4 text-rose-400" />
              Research & Innovation
            </span>
          </Reveal>

          <Reveal className="animate-fade-up delay-100">
            <h1 className="text-4xl font-bold text-gray-900">
              Building AI with Real-World Impact
            </h1>
          </Reveal>

          <Reveal className="animate-fade-up delay-200">
            <p className="max-w-3xl text-lg text-gray-700">
              I explore artificial intelligence across{" "}
              machine learning,{" "}
              deep learning,{" "}
              computer vision, and{" "}
              AI applications in healthcare and ethics of AI - with a focus
              on systems that move beyond labs and create measurable benefit for
              people, wildlife, and communities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== Featured Project (In Progress) ===== */}
      <section className="px-6 py-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <Reveal className="animate-fade-up">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Featured Project
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Ongoing, applied research with a clear path to real-world
                deployment.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            {/* Left: Details */}
            <Reveal className="lg:col-span-3 bg-white p-8 space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/70 px-3 py-1 text-sm font-medium text-rose-700">
                <Clock className="h-4 w-4" />
                In Progress
              </div>

              <h3 className="text-2xl font-semibold text-gray-900">
                AI-Driven Wildlife Collision Prevention
              </h3>

              <p className="text-gray-700">
                Developing a computer-vision system to detect animals near roads
                and alert drivers or infrastructure, helping reduce wildlife-vehicle
                collisions. The work blends dataset collection,{" "}
                model training, and ethical deployment for
                communities across Wisconsin.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <Camera className="h-5 w-5 text-rose-500 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Data capture & preprocessing for multi-species detection
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <BarChart3 className="h-5 w-5 text-rose-500 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Model baselines, evaluation, and error analysis
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-5 w-5 text-rose-500 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Safety, privacy, and fairness considerations
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Map className="h-5 w-5 text-rose-500 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Real-world constraints: lighting, weather, roadside angle
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                <p className="text-sm text-gray-700">
                  Recognized via{" "}
                  UWL 3-Minute Graduate Project Competition (Winner) and
                  covered by the university news feature.
                </p>
                <a
                  href="https://www.uwlax.edu/news/posts/nature-inspired-innovation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-rose-600 hover:text-rose-500"
                >
                  Read the story
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </Reveal>

            {/* Right: Methodology snapshot */}
            <Reveal className="lg:col-span-2 bg-gradient-to-br from-gray-50 to-rose-50 p-8 space-y-6 animate-fade-up delay-100">
              <h4 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <FlaskConical className="h-5 w-5 text-rose-500" />
                Approach (Snapshot)
              </h4>

              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Problem framing with stakeholders",
                  "Data collection & labeling strategy",
                  "Model selection & iterative training",
                  "Evaluation - precision, recall, deployment latency",
                  "Pilot planning - sensor placement & monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 text-rose-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <p className="text-sm text-gray-700">
                  Status: dataset curation & baseline metrics.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Research Interests ===== */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <Reveal className="animate-fade-up">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Research Interests
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Areas I’m exploring across AI, software engineering, and
                human-centered impact.
              </p>
            </div>
          </Reveal>

          {/* Equal-height cards */}
          <div className="grid gap-6 md:grid-cols-4 items-stretch">
            {[
              {
                icon: Target,
                title: "Machine Learning & Deep Learning",
                text:
                  "From predictive modeling to evaluation and real-world deployment, with a focus on responsibility and impact.",
              },
              {
                icon: Camera,
                title: "Computer Vision",
                text:
                  "Detection, tracking, and edge-constrained inference.",
              },
              {
                icon: Heart,
                title: "AI in Healthcare",
                text:
                  "Clinically meaningful predictions and patient-centric design.",
              },
              {
                icon: ShieldCheck,
                title: "AI Ethics & Fairness",
                text:
                  "Bias mitigation, privacy, and transparency in AI systems.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} className={`animate-fade-up delay-${i * 120}`}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:shadow-md transition">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-rose-100">
                    <v.icon className="h-6 w-6 text-rose-500" />
                  </div>
                  <h3 className="font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 flex-1">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Publications / Presentations (placeholder now) ===== */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <Reveal className="animate-fade-up">
            <div className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                Publications & Presentations
              </h2>
              <p className="text-gray-600 max-w-2xl">
                Selected scholarly output and talks. (More coming soon.)
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Example card 1 */}
            <Reveal className="animate-fade-up">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 text-rose-600 font-medium">
                  <BookOpen className="h-4 w-4" />
                  Presentation
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  3-Minute Graduate Project Competition
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Pitching AI-driven wildlife collision prevention in an
                  accessible, impact-centered format.
                </p>
              </div>
            </Reveal>

            {/* Example card 2 (placeholder for future) */}
            <Reveal className="animate-fade-up delay-100">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center gap-2 text-rose-600 font-medium">
                  <FileText className="h-4 w-4" />
                  Manuscript (Planning)
                </div>
                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  Survey on AI Fairness in Applied Systems
                </h3>
                <p className="mt-1 text-sm text-gray-700">
                  Exploring practical fairness strategies in safety-critical and
                  community-impact deployments.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===== Future Directions / CTA ===== */}
      <section className="px-6 py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="mx-auto max-w-4xl space-y-6">
          <Reveal className="animate-fade-up">
            <h2 className="text-3xl font-bold text-white">Future Directions</h2>
          </Reveal>
          <Reveal className="animate-fade-up delay-100">
            <p className="text-gray-200 text-lg">
              
              Moving toward real-world field pilots and community-centered applications of AI. 
              I am actively learning and improving my research and technical skills, while 
              remaining open to collaborations and PhD opportunities.
            </p>
          </Reveal>

          <Reveal className="animate-fade-up delay-200">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-rose-400 px-5 py-3 font-medium text-white hover:bg-rose-300 transition"
            >
              Let’s Collaborate
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
