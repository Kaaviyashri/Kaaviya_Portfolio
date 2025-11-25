import React, { useState } from "react";
import { Mail, Linkedin, Github, Send, X } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { personalInfo } from "../data/personal.js";

const CONTACT = {
  email: personalInfo.email,
  linkedin: personalInfo.linkedin,
  github: personalInfo.github,
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [banner, setBanner] = useState(null);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) {
      setBanner({
        type: "error",
        text: "Please fill in all required fields.",
      });
      return;
    }
    setSending(true);
    setBanner(null);

    const to = CONTACT.email;
    const subj = encodeURIComponent(form.subject);
    const body = encodeURIComponent(
      `Hi,\n\n${form.message}\n\n— ${form.name}\n${form.email}`
    );
    const href = `mailto:${to}?subject=${subj}&body=${body}`;

    setTimeout(() => {
      window.location.href = href;
      setSending(false);
      setBanner({
        type: "success",
        text: "Your default email app should open with the message.",
      });
    }, 300);
  }

  const cards = [
    {
      icon: Mail,
      title: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      desc: "Best way to get in touch.",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "View profile",
      href: CONTACT.linkedin,
      desc: "Updates, connections, and ongoing work.",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "Browse repositories",
      href: CONTACT.github,
      desc: "Code for selected projects and experiments.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Hero */}
      <section className="pt-4 sm:pt-6 space-y-4">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
            <Send className="h-3.5 w-3.5 text-rose-300" />
            Contact
          </span>
        </Reveal>
        <Reveal>
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
            Let’s connect
          </h1>
        </Reveal>
        <Reveal>
          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            Feel free to reach out about projects, collaborations, or to ask
            questions about any of the work in this portfolio.
          </p>
        </Reveal>
      </section>

      {/* Contact methods */}
      <section className="space-y-6">
        <Reveal>
          <h2 className="text-sm font-semibold text-slate-100">
            Ways to reach me
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <Reveal
              key={c.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.85)]"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-slate-700">
                <c.icon className="h-5 w-5 text-rose-300" />
              </div>
              <p className="text-sm font-semibold text-slate-50">
                {c.title}
              </p>
              <a
                href={c.href}
                target={c.title === "Email" ? undefined : "_blank"}
                rel={c.title === "Email" ? undefined : "noreferrer"}
                className="mt-1 block text-xs font-medium text-rose-200 hover:text-rose-100"
              >
                {c.value}
              </a>
              <p className="mt-1 text-xs text-slate-300">{c.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Simple form -> mailto */}
      <section className="pb-4 sm:pb-6">
        <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.85)] space-y-4">
          <h2 className="text-sm font-semibold text-slate-100">
            Send a message
          </h2>

          {banner && (
            <div
              className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                banner.type === "error"
                  ? "bg-red-900/40 text-red-200 border border-red-700"
                  : "bg-emerald-900/30 text-emerald-200 border border-emerald-700"
              }`}
            >
              <span>{banner.text}</span>
              <button
                onClick={() => setBanner(null)}
                className="ml-auto rounded-full p-1 hover:bg-black/20"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-medium text-slate-200"
                >
                  Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-medium text-slate-200"
                >
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-medium text-slate-200"
              >
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                placeholder="What would you like to talk about?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-medium text-slate-200"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 placeholder-slate-500 focus:border-rose-400 focus:outline-none focus:ring-1 focus:ring-rose-400"
                placeholder="Write your message here."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-cyan-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-[0_16px_40px_rgba(0,0,0,0.9)] hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
              {sending ? "Preparing email..." : "Open email app"}
            </button>
          </form>
        </Reveal>
      </section>
    </div>
  );
}
