import React, { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare, Calendar, X } from "lucide-react";

// The contact details remain the same
const CONTACT = {
  email: "saraboji5411@uwlax.edu",
  linkedin: "https://www.linkedin.com/in/kaaviyashri-saraboji",
  github: "https://github.com/kaaviyashri",
  location: "La Crosse, WI",
};

// A reusable component to apply the `animate-fade-up` effect
// This keeps the code clean and consistent, just like in your Home.jsx file
const Reveal = ({ children, className }) => <div className={className}>{children}</div>;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState(null);

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Replaced alert with a custom message component for better UX
    if (!form.name || !form.email || !form.subject || !form.message) {
      setMessage({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }
    setSending(true);
    // Clear any previous messages
    setMessage(null);

    const to = CONTACT.email;
    const subj = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hi Kaaviyashri,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    const href = `mailto:${to}?subject=${subj}&body=${body}`;
    
    // Small delay to show button state before the mailto link opens
    setTimeout(() => {
      window.location.href = href;
      setSending(false);
      setMessage({ type: 'success', text: 'Message sent! Your email client is opening now.' });
    }, 300);
  }

  // An array of contact methods.
  const methods = [
    {
      icon: Mail,
      title: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      desc: "Best for detailed discussions.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect on LinkedIn",
      href: CONTACT.linkedin,
      desc: "Professional networking & updates.",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "See my code",
      href: CONTACT.github,
      desc: "Projects, notebooks, experiments.",
    },
    {
      icon: MapPin,
      title: "Location",
      value: CONTACT.location,
      href: null,
      desc: "University of Wisconsin–La Crosse",
    },
  ];

  // An array of collaboration opportunities.
  const collab = [
    {
      icon: MessageSquare,
      title: "Research Collaboration",
      points: [
        "AI, Machine Learning, Deep Learning, Computer Vision, Data Science",
        "Applied projects with measurable impact",
      ],
    },
    {
      icon: Calendar,
      title: "Opportunities",
      points: [
        "PhD programs (open to 2025–2026)",
        "Research opportunities in computer vision, machine learning, and AI",
        "Software Development & AI Engineering (open to work)",
        "Full-time roles, internships, or part-time opportunities"
      ],
    },
  ];

  return (
    <div className="min-h-screen font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="border-b border-gray-200 py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl">
          <Reveal className="animate-fade-up delay-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <Send className="h-4 w-4 text-rose-400" />
              Get in Touch
            </span>
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900">Contact</h1>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl">
              Open to research collaborations, PhD opportunities, and industry roles.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Methods Section */}
      <section className="bg-white px-6">
        <div className="mx-auto max-w-6xl py-12">
          <Reveal className="animate-fade-up">
            <h2 className="text-2xl font-semibold text-gray-900">Contact Methods</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {methods.map((m, i) => (
              <Reveal key={m.title} className={`animate-fade-up delay-${i * 100}`}>
                <article
                  className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5"
                >
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-100">
                    <m.icon className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-base font-semibold text-gray-900">{m.title}</h3>
                  {m.href ? (
                    <a
                      href={m.href}
                      target={m.title !== "Email" ? "_blank" : undefined}
                      rel={m.title !== "Email" ? "noreferrer" : undefined}
                      className="mt-1 block text-sm font-medium text-rose-700 hover:underline"
                    >
                      {m.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium text-gray-700">{m.value}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-600">{m.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Collaboration */}
      <section className="bg-gray-50 px-6">
        <div className="mx-auto max-w-6xl py-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Form */}
          <Reveal className="animate-fade-up">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Send a Message</h2>
              <p className="mt-2 text-gray-600">
                I usually respond within 24 hours.
              </p>
              
              {/* Custom message box instead of alert */}
              {message && (
                <div className={`mt-4 flex items-center gap-2 rounded-lg p-3 text-sm ${message.type === 'error' ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                  <p>{message.text}</p>
                  <button onClick={() => setMessage(null)} className="ml-auto p-1 rounded-full hover:bg-black/5 transition">
                    <X size={16} />
                  </button>
                </div>
              )}

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Reveal className="animate-fade-up delay-100">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium text-gray-900">
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={update}
                        placeholder="Your name"
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-300 hover:border-gray-400"
                      />
                    </div>
                  </Reveal>
                  <Reveal className="animate-fade-up delay-150">
                    <div>
                      <label htmlFor="email" className="text-sm font-medium text-gray-900">
                        Email *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={update}
                        placeholder="you@example.com"
                        className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-300 hover:border-gray-400"
                      />
                    </div>
                  </Reveal>
                </div>
                <Reveal className="animate-fade-up delay-200">
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium text-gray-900">
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={update}
                      placeholder="What would you like to discuss?"
                      className="mt-1 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                </Reveal>
                <Reveal className="animate-fade-up delay-250">
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-gray-900">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={update}
                      placeholder="Tell me about your project or idea…"
                      className="mt-1 w-full resize-y rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-rose-300 focus:outline-none focus:ring-2 focus:ring-rose-200 transition-all duration-300 hover:border-gray-400"
                    />
                  </div>
                </Reveal>

                <Reveal className="animate-fade-up delay-300">
                  <button
                    type="submit"
                    disabled={sending}
                    className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition-all duration-300
                      ${sending ? "bg-rose-400" : "bg-rose-600 hover:bg-rose-700"} focus:outline-none focus:ring-2 focus:ring-rose-300`}
                  >
                    <Send className="h-4 w-4" />
                    {sending ? "Opening email…" : "Send Message"}
                  </button>
                </Reveal>
              </form>
            </div>
          </Reveal>

          {/* Collaboration Section */}
          <Reveal className="animate-fade-up delay-100">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900">Collaboration</h2>
              <p className="mt-2 text-gray-600">
                Open to research partnerships, PhD programs, and industry roles.
              </p>

              <div className="mt-6 space-y-5">
                {collab.map((c, i) => (
                  <Reveal key={c.title} className={`animate-fade-up delay-${i * 100 + 150}`}>
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                      <div className="mb-2 inline-flex items-center gap-2">
                        <c.icon className="h-5 w-5 text-rose-600" />
                        <h3 className="text-sm font-semibold text-gray-900">{c.title}</h3>
                      </div>
                      <ul className="space-y-1.5">
                        {c.points.map((p, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
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
      `}</style>
    </div>
  );
}
