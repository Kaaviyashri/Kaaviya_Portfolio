// src/pages/Research.jsx
import React from "react";
import {
  Sparkles,
  BrainCircuit,
  HeartPulse,
  ShieldCheck,
  Camera,
  BarChart3,
  FileText,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { personalInfo } from "../data/personal";

export default function Research() {
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Intro */}
      <section className="pt-4 sm:pt-6">
        <Reveal className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
            Research
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
            Research focus &amp; experience
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            My research centers on{" "}
            <span className="text-rose-200">
              machine learning and artificial intelligence for healthcare and
              safety-critical applications
            </span>
            . I am particularly interested in predictive and diagnostic models
            for chronic diseases such as cancer, trustworthy and interpretable AI systems, and
            governance frameworks that ensure safe deployment in real clinical
            environments.
          </p>

          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            Below is an overview of my current research projects and thematic
            interests, as described in my Ph.D. application materials.
          </p>
        </Reveal>
      </section>

      {/* Research interests */}
      <section className="space-y-6">
        <Reveal className="flex items-center gap-2">
          <BrainCircuit className="h-5 w-5 text-rose-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Research interests
          </h2>
        </Reveal>

        <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
          <p className="text-sm sm:text-base text-slate-200/90 mb-3">
            My research focuses on developing{" "}
            <span className="text-rose-200">
              machine learning methods for healthcare and biomedical
              applications
            </span>
            . I am especially interested in early detection, progression
            analysis, and decision support for chronic diseases, as well as the
            ethical and governance dimensions of AI in clinical practice.
          </p>

          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Clinical &amp; biomedical ML
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-300">
                <li>
                  • Machine learning for clinical and biomedical datasets, with
                  emphasis on early diagnosis and risk prediction.
                </li>
                <li>
                  • Predictive modeling and decision-support tools using
                  structured health, behavioral, and laboratory data.
                </li>
              </ul>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Trustworthy &amp; governance-aligned AI
              </p>
              <ul className="space-y-1 text-xs sm:text-sm text-slate-300">
                <li>
                  • Trustworthy, interpretable, and reliable AI systems for
                  high-stakes clinical decision-making.
                </li>
                <li>
                  • Ethical, transparent, and governance-aligned AI frameworks
                  that support safe deployment in healthcare settings.
                </li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Research experience */}
      <section className="space-y-6 pb-4 sm:pb-8">
        <Reveal className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Research experience
          </h2>
        </Reveal>

        <div className="space-y-6">
          {/* WHO governance-by-design project */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/50 bg-rose-500/10 px-3 py-1 text-[11px] font-medium text-rose-100">
                <HeartPulse className="h-3.5 w-3.5" />
                Healthcare AI governance
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300">
                Narrative review · Framework design
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
              Operationalising WHO’s Ethical Principles for AI in Healthcare:
              Governance-by-Design Lifecycle Framework
            </h3>

            <p className="text-xs text-slate-400">
              University of Wisconsin–La Crosse · September 2025 – Present
            </p>

            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>
                • Conducting a narrative review on ethical governance of AI in
                healthcare, mapping WHO’s six ethical principles across the AI
                lifecycle.
              </li>
              <li>
                • Analyzing peer-reviewed literature and institutional
                frameworks (WHO, FDA GMLP, NAM, AMA, EU AI Act) to identify gaps
                in operationalizing ethics in healthcare AI.
              </li>
              <li>
                • Integrating reporting standards (SPIRIT-AI, CONSORT-AI,
                DECIDE-AI, TRIPOD-AI) to align ethical principles with clinical
                validation and monitoring practices.
              </li>
              <li>
                • Evaluating data governance, algorithmic bias, privacy, and
                accountability challenges in real-world AI deployments.
              </li>
              <li>
                • Developing a Governance-by-Design lifecycle framework for
                embedding transparency, equity, and accountability into AI
                systems.
              </li>
            </ul>
          </Reveal>

          {/* ARISTOTLE tool */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-rose-500/60 bg-rose-500/10 px-3 py-1 text-[11px] font-medium text-rose-100">
                <ShieldCheck className="h-3.5 w-3.5" />
                Ethical readiness tool
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300">
                HTML · CSS · JavaScript
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
              ARISTOTLE: Ethical Assessment Tool for Healthcare AI Systems
            </h3>

            <p className="text-xs text-slate-400">
              September 2025 – Present
            </p>

            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>
                • Developing a comprehensive web-based assessment framework
                (Assessment of Readiness and Implementation Standards for
                Trustworthy and Lawful Ethics) for evaluating healthcare AI
                systems against WHO ethical principles.
              </li>
              <li>
                • Building an interactive prototype dashboard for healthcare
                administrators, policymakers, and AI developers to assess system
                compliance.
              </li>
              <li>
                • Implementing an automated scoring system with
                evidence-based recommendations for improving ethical readiness.
              </li>
            </ul>
          </Reveal>

          {/* Computer vision wildlife safety */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/60 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-50">
                <Camera className="h-3.5 w-3.5" />
                Computer vision · YOLO
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300">
                Python · TensorFlow · OpenCV
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
              Computer Vision for Wildlife Safety
            </h3>

            <p className="text-xs text-slate-400">
              September 2024 – Present
            </p>

            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>
                • Developing a computer vision system for real-time wildlife
                detection to prevent animal–vehicle collisions, achieving{" "}
                <span className="text-slate-100">85%+ accuracy</span> across
                diverse species and environmental conditions.
              </li>
              <li>
                • Building an automated data preprocessing and augmentation
                pipeline for processing annotated wildlife images.
              </li>
              <li>
                • Implementing a YOLO-based object detection model using
                TensorFlow and OpenCV for multi-species identification.
              </li>
              <li>
                • Conducting systematic model evaluation using precision,
                recall, F1-score, and inference latency metrics.
              </li>
            </ul>
          </Reveal>

          {/* ML for healthcare analytics */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/60 bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-50">
                <BarChart3 className="h-3.5 w-3.5" />
                Healthcare analytics
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1 text-[11px] font-medium text-slate-300">
                Python · scikit-learn
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
              Machine Learning for Healthcare Analytics
            </h3>

            <p className="text-xs text-slate-400">
              University of Wisconsin–La Crosse · May 2024 – Present
            </p>

            <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li>
                • Conducting independent research on machine learning
                applications for healthcare cost prediction and disease
                classification.
              </li>
              <li>
                • Developed predictive models achieving{" "}
                <span className="text-slate-100">
                  92% accuracy for healthcare insurance cost estimation
                </span>{" "}
                and{" "}
                <span className="text-slate-100">
                  87% accuracy for chronic kidney disease classification
                </span>{" "}
                using regression and classification techniques.
              </li>
              <li>
                • Implementing and comparing multiple ML algorithms (Random
                Forest, Gradient Boosting, K-Nearest Neighbors, Naive Bayes)
                with rigorous hyperparameter optimization and cross-validation.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
