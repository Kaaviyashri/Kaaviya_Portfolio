// src/pages/Projects.jsx
import React, { useState } from "react";
import {
  LayoutGrid,
  Filter,
  BrainCircuit,
  Code2,
  ServerCog,
  ShieldCheck,
} from "lucide-react";
import Reveal from "../components/Reveal";
import { personalInfo } from "../data/personal";

// Project data
const PROJECTS = [
  // --- AI / ML & Data Science ---
  {
    title: "AI-Driven Wildlife Collision Prevention",
    status: "Ongoing",
    category: "AI/ML & Data Science",
    description:
      "Developing an AI-based system to detect wildlife near roadways and provide early warnings to reduce animal–vehicle collisions. Inspired by real community needs, this project combines computer vision, machine learning, and responsible design considerations.",
    impact: [
      "Framed the problem using Wisconsin crash statistics and local wildlife patterns.",
      "Set up a pipeline plan with pre-trained YOLO for animal detection on roadside clips.",
      "Drafted a real-time alert mechanism (zone triggers + consecutive frame checks).",
    ],
    tech: ["Python", "OpenCV", "YOLO", "TensorFlow", "NumPy"],
  },
  {
    title: "Route Planning with BFS, DFS & Dijkstra",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Command-line Python program that loads a weighted road network of Midwest cities from CSV and finds routes between cities using BFS, DFS, or Dijkstra. Designed to compare path quality, optimality, and search effort across strategies.",
    impact: [
      "Parsed CSV road data into an undirected weighted graph with clear state and neighbor representations.",
      "Implemented a unified best-first framework with pluggable frontiers for BFS (queue), DFS (stack), and Dijkstra (priority queue keyed by miles).",
      "Reported route, distance, nodes generated, and frontier size to analyze trade-offs in optimality and efficiency.",
    ],
    tech: ["Python", "Graph Search", "BFS", "DFS", "Dijkstra", "Priority Queue"],
  },
  {
    title: "Crossword Solver via CSP & Backtracking",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Constraint satisfaction solver that formulates crossword puzzles as CSPs with word variables and dictionary-based domains, then uses backtracking search with heuristics to fill the grid consistently.",
    impact: [
      "Represented each across/down entry as a variable with a domain of dictionary words of matching length and constraints at letter intersections.",
      "Implemented backtracking with configurable variable selection (static, MRV, degree, MRV+degree) and value ordering (static, least-constraining value).",
      "Added limited forward checking and optional AC-3 preprocessing to prune domains, reducing recursive calls and solving larger puzzles efficiently.",
    ],
    tech: ["Python", "CSP", "Backtracking", "MRV", "LCV", "Forward Checking", "AC-3"],
  },
  {
    title: "Salary Prediction (Regression)",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Implemented regression models to predict salary from experience data, starting with simple linear regression and extending to support vector regression. Focused on preprocessing, scaling, and evaluation to understand model behavior.",
    impact: [
      "Built and compared simple linear regression vs. SVR with scaled features.",
      "Visualized regression lines and curves to interpret fit quality and outliers.",
      "Documented preprocessing workflow (encoding, scaling) for reproducibility.",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Profit Prediction (Regression)",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Developed multiple regression and advanced machine learning models to forecast business profit from startup dataset features. Compared algorithms (linear, SVM, decision tree, random forest) to study stability, accuracy, and interpretability.",
    impact: [
      "Implemented multiple linear regression as a baseline with clear assumptions.",
      "Trained SVM, decision tree, and random forest models to benchmark non-linear approaches.",
      "Compared models using MAE/RMSE and visualized error distributions.",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Insurance Charges Prediction",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Predicted patient insurance charges using regression models with attention to preprocessing, model comparison, and deployment readiness. Explored linear, tree-based, SVR, and boosting approaches with hyperparameter tuning.",
    impact: [
      "Implemented multiple regression algorithms (linear, decision tree, random forest, SVR, boosting).",
      "Applied preprocessing (imputation, encoding, scaling) to handle mixed feature types.",
      "Tuned hyperparameters with GridSearchCV and compared MAE/RMSE across models.",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Buyer Behavior Classification",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Built a supervised ML pipeline to predict whether a user will buy a product from demographic/ad-click data. Compared classic classifiers and tuned them with GridSearchCV to balance accuracy and decision trade-offs.",
    impact: [
      "Implemented Logistic Regression, KNN, Naive Bayes, SVM, Decision Tree, and Random Forest on Social_Network_Ads.csv.",
      "Standardized features and used consistent train/validation splits for fair comparison.",
      "Tuned hyperparameters with GridSearchCV; evaluated via confusion matrices, ROC/PR curves, and classification reports.",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Chronic Kidney Disease Prediction",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Built classification models to support early detection of chronic kidney disease using clinical dataset features. Compared traditional ML classifiers and deployed a baseline logistic regression model for reproducible predictions.",
    impact: [
      "Preprocessed clinical data (imputation, encoding, scaling) from the CKD dataset.",
      "Implemented Logistic Regression, KNN, Naive Bayes, SVM, Decision Tree, and Random Forest models.",
      "Evaluated classifiers with sensitivity/recall emphasis to prioritize early detection.",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Customer Segmentation (Clustering)",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Performed unsupervised customer segmentation using multiple clustering algorithms on retail behavior data. Focused on cluster validation, parameter tuning, and interpretable cluster profiles.",
    impact: [
      "Applied K-Means, DBSCAN/OPTICS, Spectral, Agglomerative, BIRCH, Mean-Shift, and Affinity Propagation on Mall_Customers.csv.",
      "Chose K and tuned parameters via elbow/silhouette, k-distance plots, and stability checks.",
      "Used PCA projections and centroid/density visuals for interpretable cluster structure.",
    ],
    tech: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Placement Dataset Analysis",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Analyzed a campus placement dataset to explore student outcomes, salary trends, and key predictors of placement. Combined data cleaning, statistical testing, and visualization to extract insights for career services.",
    impact: [
      "Cleaned and prepared the dataset (handled missing values, standardized formats) for analysis.",
      "Explored distributions and relationships with visualizations (box plots, histograms, scatter plots).",
      "Applied statistical tests (ANOVA, t-tests) to examine group differences in placement and salary.",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Statsmodels"],
  },
  {
    title: "Zomato Restaurant Data Analysis",
    status: "Completed",
    category: "AI/ML & Data Science",
    description:
      "Explored Zomato restaurant data to understand how location, pricing, and ratings interact. Combined notebook-based EDA with interactive dashboards to surface simple, actionable patterns.",
    impact: [
      "Cleaned and summarized key fields (cuisine, location, cost, rating) and checked data quirks/outliers.",
      "Performed univariate/bivariate analysis and visualized trends with Seaborn/Matplotlib.",
      "Built lightweight interactive dashboards (Tableau / Data Studio) to compare locations and price bands.",
    ],
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tableau", "Data Studio"],
  },

  // --- Full Stack Web Development ---
  {
    title: "Habitat for Humanity Portal (Capstone)",
    status: "Ongoing",
    category: "Full Stack Web Development",
    description:
      "A secure MERN portal that streamlines Habitat for Humanity’s housing applications and volunteer management. It provides applicants with an accessible workflow and equips administrators with powerful review and decision tools.",
    impact: [
      "Role-based authentication with JWT, OTP/reset flows, and hardened security (Helmet, rate limits).",
      "Applicant portal featuring a multi-step housing application, autosave drafts, and document uploads.",
      "Volunteer portal with registration, opportunity listings, and scheduling capabilities.",
    ],
    tech: [
      "MongoDB",
      "Mongoose",
      "Express",
      "Node.js",
      "React",
      "Tailwind CSS",
      "JWT",
      "bcrypt",
      "Helmet",
      "Multer",
    ],
  },
  {
    title: "Front Dash — Food Delivery Platform",
    status: "Completed",
    category: "Full Stack Web Development",
    description:
      "A multi-portal food delivery web application built as a course project. Front Dash connects restaurants, customers, and administrators in a single platform for ordering, billing, and driver assignment.",
    impact: [
      "Customer portal for browsing menus, placing orders, and tracking delivery status.",
      "Restaurant portal to manage menus, receive and fulfill customer orders.",
      "Administrator dashboard for user management, restaurant onboarding, and analytics.",
    ],
    tech: ["JavaScript", "Node.js", "HTML", "CSS", "Express", "MySQL"],
  },
  {
    title: "YMCA Program Registration (UX + System Design)",
    status: "Completed",
    category: "Full Stack Web Development",
    description:
      "A UX and system design project for a YMCA program registration portal. Focused on user research, wireframing, UML modeling, and developer-ready specifications for a MERN-based implementation.",
    impact: [
      "Conducted user research and translated insights into clear task flows and personas.",
      "Produced low- and high-fidelity wireframes to map user journeys and interactions.",
      "Created UML diagrams (use case, class, sequence) to define functional requirements.",
    ],
    tech: ["Figma", "UML", "Requirements Analysis", "MERN (design focus)"],
  },

  // --- Software Engineering / Security / Testing ---
  {
    title: "Secure Coding & Vulnerability Mitigation",
    status: "Completed",
    category: "Software Engineering",
    description:
      "Hands-on security work identifying and fixing common vulnerabilities across multiple languages. Emphasis on defensive patterns, clean boundaries, and repeatable checks.",
    impact: [
      "Patched SQL injection, XSS, and memory safety issues with parameterized queries, encoding, and safer allocation/usage patterns.",
      "Added input validation and secure defaults across user-facing flows.",
      "Wrote automated regression tests to prevent reintroducing known classes of bugs.",
    ],
    tech: ["C/C++", "OWASP", "Static Analysis", "Unit Tests", "Security"],
  },
  {
    title: "Authentication & Cryptography Protocols",
    status: "Completed",
    category: "Software Engineering",
    description:
      "Implemented core cryptographic primitives and end-to-end authentication flows, validated with practical protocol scenarios.",
    impact: [
      "Built RSA and Diffie–Hellman examples to demonstrate key generation, exchange, and signing/verification.",
      "Integrated an OIDC login flow and documented token lifecycles and failure cases.",
      "Explained trade-offs between protocol choices (performance, trust model, threat surface).",
    ],
    tech: ["RSA", "Diffie–Hellman", "OIDC", "TLS/SSH", "Security"],
  },
  {
    title: "Deadlock Simulation with Petri Nets",
    status: "Completed",
    category: "Software Engineering",
    description:
      "Modeled Java concurrency with Petri Nets to visualize resource contention and compare scheduling strategies.",
    impact: [
      "Represented threads and resources as places/transitions to expose potential deadlock states.",
      "Simulated deadlock and deadlock-free variants to illustrate liveness and safety properties.",
      "Compared simple scheduling strategies and summarized their effects on throughput.",
    ],
    tech: ["Java", "Petri Nets", "Concurrency"],
  },
  {
    title: "Java GUI Verified with VDM-SL",
    status: "Completed",
    category: "Software Engineering",
    description:
      "Built a Java GUI from formal VDM-SL specifications, checking constraints before implementation for reliability by design.",
    impact: [
      "Mapped formal specifications to UI interactions with traceability from spec to code.",
      "Encoded key invariants and validated pre/postconditions on small examples.",
      "Clarified edge cases to reduce ambiguity and runtime defects.",
    ],
    tech: ["Java", "VDM-SL", "Formal Methods"],
  },
  {
    title: "JUnit & Selenium Test Automation",
    status: "Completed",
    category: "Software Engineering",
    description:
      "Automated unit and UI tests for core user flows to protect against regressions and document expected behavior.",
    impact: [
      "Wrote unit tests for critical logic and edge cases using JUnit.",
      "Automated end-to-end UI flows with Selenium for smoke/regression coverage.",
      "Stabilized selectors and waits to reduce flaky failures in CI.",
    ],
    tech: ["Java", "JUnit", "Selenium", "CI", "Testing"],
  },
  {
    title: "Airline Seat Assignment — Decision Table Tests",
    status: "Completed",
    category: "Software Engineering",
    description:
      "Validated airline seating business rules using clear, black-box decision tables.",
    impact: [
      "Captured requirements as readable rule tables with expected outcomes.",
      "Generated focused test cases that surfaced logic gaps early.",
      "Automated repeatable checks for future rule changes.",
    ],
    tech: ["Java", "Black-box Testing", "Decision Tables", "Testing"],
  },
];

const FILTERS = [
  { id: "All", label: "All", icon: LayoutGrid },
  { id: "AI/ML & Data Science", label: "AI/ML & Data Science", icon: BrainCircuit },
  {
    id: "Full Stack Web Development",
    label: "Full Stack Web Development",
    icon: ServerCog,
  },
  { id: "Software Engineering", label: "Software Engineering", icon: ShieldCheck },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  const totalProjects = PROJECTS.length;
  const countByCategory = FILTERS.filter((f) => f.id !== "All").map((f) => ({
    label: f.label,
    count: PROJECTS.filter((p) => p.category === f.id).length,
  }));

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Intro */}
      <section className="pt-4 sm:pt-6">
        <Reveal className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
            Projects &amp; solutions
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
            My portfolio
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            A selection of my work across{" "}
            <span className="text-rose-200">
              AI/ML, data science, web applications, and software engineering
            </span>
            . These projects range from predictive modeling and exploratory
            analysis to full-stack systems and secure, formally-informed
            software design.
          </p>
        </Reveal>
      </section>

      {/* Filters */}
      <section className="space-y-4">
        <Reveal className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
            <Filter className="h-4 w-4 text-rose-300" />
            <span>Filter by area</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => {
              const Icon = f.icon;
              const isActive = activeFilter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setActiveFilter(f.id)}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[11px] sm:text-xs transition ${
                    isActive
                      ? "border-rose-400 bg-rose-500/10 text-rose-100"
                      : "border-slate-700 bg-slate-950/60 text-slate-300 hover:border-slate-500 hover:text-slate-100"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project grid */}
        <Reveal className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 flex flex-col gap-3 shadow-[0_18px_60px_rgba(0,0,0,0.85)]"
            >
              {/* Status + category */}
              <div className="flex flex-wrap items-center gap-2 text-[11px]">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-1 font-medium ${
                    project.status === "Ongoing"
                      ? "border border-emerald-500/60 bg-emerald-500/10 text-emerald-100"
                      : "border border-slate-600 bg-slate-900/80 text-slate-200"
                  }`}
                >
                  {project.status}
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2.5 py-1 font-medium text-slate-300">
                  {project.category}
                </span>
              </div>

              {/* Title + description */}
              <div className="space-y-1.5">
                <h2 className="text-sm sm:text-base font-semibold text-slate-50">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300">
                  {project.description}
                </p>
              </div>

              {/* Key Impact */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Key impact
                </p>
                <ul className="space-y-1 text-xs text-slate-300">
                  {project.impact.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-2 py-0.5 text-[11px] text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* Summary */}
      <section className="pb-6 sm:pb-8">
        <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-3">
            <LayoutGrid className="h-4 w-4 text-rose-300" />
            <h2 className="text-sm sm:text-base font-semibold text-slate-50">
              Project summary
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            This portfolio currently includes{" "}
            <span className="text-rose-200 font-semibold">
              {totalProjects} projects
            </span>{" "}
            across applied machine learning, data analysis, full-stack systems,
            security, and software engineering practice.
          </p>
          <div className="flex flex-wrap gap-3 text-[11px] sm:text-xs text-slate-300">
            {countByCategory.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900/80 px-3 py-1"
              >
                <Code2 className="mr-1.5 h-3.5 w-3.5 text-rose-300" />
                {item.label}:{" "}
                <span className="ml-1 font-semibold text-slate-100">
                  {item.count}
                </span>
              </span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
