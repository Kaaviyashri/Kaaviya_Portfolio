import React, { useMemo, useState } from "react";
import { Code, Link, Github, Zap } from "lucide-react";

const PROJECTS = [
  // ===== AI/ML & DATA SCIENCE =====
  {
    id: "wildlife-collision",
    title: "AI-Driven Wildlife Collision Prevention",
    category: "AI/ML & Data Science",
    status: "Ongoing",
    year: "2025",
    description:
      "Developing an AI-based system to detect wildlife near roadways and provide early warnings to reduce animal-vehicle collisions. Inspired by real community need, this project combines computer vision, machine learning, and responsible design considerations.",
    impact: [
      "Framed the problem using Wisconsin crash statistics and local wildlife patterns",
      "Set up a pipeline plan with pre-trained YOLO for animal detection on roadside clips",
      "Drafted a real-time alert mechanism (zone triggers + consecutive frame checks)",
      "Documented ethical considerations: privacy, false alerts, and species bias",
    ],
    technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "NumPy"],
    links: { demo: null, code: null },
  },
  {
    id: "salary-regression",
    title: "Salary Prediction (Regression)",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Implemented regression models to predict salary from experience data, starting with simple linear regression and extending to support vector regression. Focused on preprocessing techniques, scaling, and evaluation to understand model behavior.",
    impact: [
      "Built and compared simple linear regression vs. SVR with scaled features",
      "Visualized regression lines and curves to interpret fit quality and outliers",
      "Documented preprocessing workflow (encoding, scaling) for reproducibility",
      "Evaluated predictions with residual plots and error metrics (MAE, RMSE)",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    links: {
      demo: null,
      code:
        "https://github.com/Kaaviyashri/MachineLearning-Regression-Salary_Prediction-and-Profit_Prediction",
    },
  },
  {
    id: "profit-regression",
    title: "Profit Prediction (Regression)",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Developed multiple regression and advanced machine learning models to forecast business profit from startup dataset features. Compared algorithms (linear, SVM, decision tree, random forest) to study stability, accuracy, and interpretability.",
    impact: [
      "Implemented multiple linear regression as a baseline with clear assumptions",
      "Trained SVM, decision tree, and random forest models to benchmark non-linear approaches",
      "Compared models using MAE/RMSE and visualized error distributions",
      "Highlighted feature importance from tree-based models for business insight",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    links: {
      demo: null,
      code:
        "https://github.com/Kaaviyashri/MachineLearning-Regression-Salary_Prediction-and-Profit_Prediction",
    },
  },
  {
    id: "insurance-costs",
    title: "Insurance Charges Prediction",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Predicted patient insurance charges using regression models with attention to preprocessing, model comparison, and deployment readiness. Explored linear, tree-based, SVR, and boosting approaches with hyperparameter tuning.",
    impact: [
      "Implemented multiple regression algorithms (linear, decision tree, random forest, SVR, boosting) on insurance data",
      "Applied preprocessing (imputation, encoding, scaling) to handle mixed feature types",
      "Tuned hyperparameters with GridSearchCV and compared MAE/RMSE across models",
      "Packaged a finalized RandomForest model for deployment and tested inference in a Jupyter notebook",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    links: {
      demo: null,
      code:
        "https://github.com/Kaaviyashri/MachineLearning-Regression-Insurance_Charges_Prediction",
    },
  },
  {
    id: "buyer-behavior",
    title: "Buyer Behavior Classification",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Built a supervised ML pipeline to predict whether a user will buy a product from demographic/ad-click data. Compared classic classifiers and tuned them with GridSearchCV to balance accuracy and decision trade-offs.",
    impact: [
      "Implemented Logistic Regression, KNN, Naive Bayes, SVM, Decision Tree, and Random Forest on Social_Network_Ads.csv",
      "Standardized features and used consistent train/validation splits for fair comparison",
      "Tuned hyperparameters with GridSearchCV; evaluated via confusion matrices, ROC/PR curves, and classification reports",
      "Outlined threshold and metric trade-offs to align with precision- or recall-oriented business goals",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    links: {
      demo: null,
      code:
        "https://github.com/Kaaviyashri/MachineLearning-Classification-Buyer_Prediction",
    },
  },
  {
    id: "ckd",
    title: "Chronic Kidney Disease Prediction",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Built classification models to support early detection of chronic kidney disease using clinical dataset features. Compared traditional ML classifiers and deployed a baseline logistic regression model for reproducible predictions.",
    impact: [
      "Preprocessed clinical data (imputation, encoding, scaling) from the CKD dataset",
      "Implemented Logistic Regression, KNN, Naive Bayes, SVM, Decision Tree, and Random Forest models",
      "Evaluated classifiers with sensitivity/recall emphasis to prioritize early detection",
      "Deployed a finalized Logistic Regression model (.sav) with scaler for quick reuse in notebooks",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    links: {
      demo: null,
      code:
        "https://github.com/Kaaviyashri/MachineLearning-Classification-Chronic_Kidney_Disease_Prediction",
    },
  },
  {
    id: "segmentation",
    title: "Customer Segmentation (Clustering)",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Performed unsupervised customer segmentation using multiple clustering algorithms on retail behavior data. Focused on cluster validation, parameter tuning, and clear business-oriented profiles for downstream targeting.",
    impact: [
      "Applied K-Means, DBSCAN/OPTICS, Spectral, Agglomerative, BIRCH, Mean-Shift, and Affinity Propagation on Mall_Customers.csv",
      "Chose K and tuned parameters via elbow/silhouette, k-distance plots, and stability checks",
      "Used PCA projections and centroid/density visuals for interpretable cluster structure",
      "Created concise segment profiles (spend, income, age) to inform targeting and offers",
    ],
    technologies: ["Python", "Pandas", "NumPy", "scikit-learn"],
    links: {
      demo: null,
      code:
        "https://github.com/Kaaviyashri/MachineLearning-Clustering-Customer_Prediction",
    },
  },
  {
    id: "placement-analysis",
    title: "Placement Dataset Analysis",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Analyzed a campus placement dataset to explore student outcomes, salary trends, and key predictors of placement. Combined data cleaning, statistical testing, and visualization to extract insights for career services.",
    impact: [
      "Cleaned and prepared the dataset (handled missing values, standardized formats) for analysis",
      "Explored distributions and relationships with visualizations (box plots, histograms, scatter plots)",
      "Applied statistical tests (ANOVA, t-tests) to examine group differences in placement/salary",
      "Built simple regression baselines for salary prediction and interpreted key features",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Statsmodels"],
    links: {
      demo: null,
      code: "https://github.com/Kaaviyashri/Data-Analysis-Placement-Dataset",
    },
  },
  {
    id: "zomato-analysis",
    title: "Zomato Restaurant Data Analysis",
    category: "AI/ML & Data Science",
    status: "Completed",
    year: "2023",
    description:
      "Explored Zomato restaurant data to understand how location, pricing, and ratings interact. Combined notebook-based EDA with interactive dashboards to surface simple, actionable patterns.",
    impact: [
      "Cleaned and summarized key fields (cuisine, location, cost, rating) and checked data quirks/outliers",
      "Performed univariate/bivariate analysis and visualized trends with Seaborn/Matplotlib",
      "Built lightweight interactive dashboards (Tableau / Data Studio) to compare locations and price bands",
      "Documented heuristics linking price bands and ratings and acknowledged dataset limitations",
    ],
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Tableau", "Data Studio"],
    links: {
      demo: null,
      code: "https://github.com/Kaaviyashri/Data-Visualization",
    },
  },

  // ===== FULL STACK WEB DEVELOPMENT =====
  {
    id: "habitat-portal",
    title: "Habitat for Humanity Portal (Capstone)",
    category: "Full Stack Web Development",
    status: "Ongoing",
    year: "2025",
    description:
      "A secure MERN portal that streamlines Habitat for Humanity’s housing applications and volunteer management. It provides applicants with an accessible workflow and equips administrators with powerful review and decision tools.",
    impact: [
      "Role-based authentication with JWT, OTP/reset flows, and hardened security (Helmet, rate limits)",
      "Applicant portal featuring a multi-step housing application, autosave drafts, and document uploads",
      "Volunteer portal with registration, opportunity listings, and scheduling capabilities",
      "Administrative dashboard to review applications, manage notes, checklists, and record decisions",
      "Integrated summary metrics and application tracking for transparency and efficiency",
    ],
    technologies: [
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
    links: { demo: null, code: null },
    tags: ["Security", "Auth"],
  },
  {
    id: "front-dash",
    title: "Front Dash — Food Delivery Platform",
    category: "Full Stack Web Development",
    status: "Completed",
    year: "2024",
    description:
      "A multi-portal food delivery web application built as a course project. Front Dash connects restaurants, customers, and administrators in a single platform for ordering, billing, and driver assignment.",
    impact: [
      "Customer portal for browsing menus, placing orders, and tracking delivery status",
      "Restaurant portal to manage menus, receive and fulfill customer orders",
      "Administrator dashboard for user management, restaurant onboarding, and analytics",
      "End-to-end order lifecycle management including billing, status updates, and driver assignment",
      "Collaborative development using version control and structured project management practices",
    ],
    technologies: ["JavaScript", "Node.js", "HTML", "CSS", "Express", "MySQL"],
    links: { demo: null, code: null },
  },
  {
    id: "ymca-registration",
    title: "YMCA Program Registration (UX + System Design)",
    category: "Full Stack Web Development",
    status: "Completed",
    year: "2024",
    description:
      "A UX and system design project for a YMCA program registration portal. Focused on user research, wireframing, UML modeling, and developer-ready specifications for a MERN-based implementation.",
    impact: [
      "Conducted user research and translated insights into clear task flows and personas",
      "Produced low- and high-fidelity wireframes to map user journeys and interactions",
      "Created UML diagrams (use case, class, sequence) to define functional requirements",
      "Authored developer-ready requirements, backlog items, and acceptance criteria",
      "Aligned design decisions with accessibility and responsive web design standards",
    ],
    technologies: ["Figma", "UML", "Requirements Analysis", "MERN (design focus)"],
    links: { demo: null, code: null },
  },

  // ===== SOFTWARE ENGINEERING =====
  {
    id: "secure-coding",
    title: "Secure Coding & Vulnerability Mitigation",
    category: "Software Engineering",
    status: "Completed",
    year: "2024",
    description:
      "Hands-on security work identifying and fixing common vulnerabilities across multiple languages. Emphasis on defensive patterns, clean boundaries, and repeatable checks.",
    impact: [
      "Patched SQL injection, XSS, and memory safety issues with parameterized queries, encoding, and safer alloc/use patterns",
      "Added input validation and secure defaults across user-facing flows",
      "Wrote automated regression tests to prevent reintroducing known classes of bugs",
      "Documented a short security guide tailored to the codebase",
    ],
    technologies: ["C/C++", "OWASP", "Static Analysis", "Unit Tests"],
    links: { demo: null, code: null },
    tags: ["Security"],
  },
  {
    id: "crypto-auth",
    title: "Authentication & Cryptography Protocols",
    category: "Software Engineering",
    status: "Completed",
    year: "2024",
    description:
      "Implemented core cryptographic primitives and end-to-end authentication flows, validated with practical protocol scenarios.",
    impact: [
      "Built RSA and Diffie–Hellman examples to demonstrate key generation, exchange, and signing/verification",
      "Integrated an OIDC login flow and documented token lifecycles and failure cases",
      "Explained trade-offs between protocol choices (performance, trust model, threat surface)",
      "Added negative tests for invalid keys/nonces and replay protections",
    ],
    technologies: ["RSA", "Diffie–Hellman", "OIDC", "TLS/SSH"],
    links: { demo: null, code: null },
    tags: ["Security"],
  },
  {
    id: "petri-deadlock",
    title: "Deadlock Simulation with Petri Nets",
    category: "Software Engineering",
    status: "Completed",
    year: "2024",
    description:
      "Modeled Java concurrency with Petri Nets to visualize resource contention and compare scheduling strategies.",
    impact: [
      "Represented threads and resources as places/transitions to expose potential deadlock states",
      "Simulated deadlock and deadlock-free variants to illustrate liveness and safety properties",
      "Compared simple scheduling strategies and summarized their effects on throughput",
      "Produced visuals and concise notes to support teaching and code reviews",
    ],
    technologies: ["Java", "Petri Nets", "Concurrency"],
    links: { demo: null, code: null },
    tags: ["Concurrency"],
  },
  {
    id: "vdm-gui",
    title: "Java GUI Verified with VDM-SL",
    category: "Software Engineering",
    status: "Completed",
    year: "2024",
    description:
      "Built a Java GUI from formal VDM-SL specifications, checking constraints before implementation for reliability by design.",
    impact: [
      "Mapped formal specs to UI interactions with traceability from spec to code",
      "Encoded key invariants and validated pre/postconditions on small examples",
      "Clarified edge cases to reduce ambiguity and runtime defects",
      "Summarized how formal methods improved correctness in the final UI",
    ],
    technologies: ["Java", "VDM-SL", "Formal Methods"],
    links: { demo: null, code: null },
    tags: ["Formal Methods"],
  },
  {
    id: "testing",
    title: "JUnit & Selenium Test Automation",
    category: "Software Engineering",
    status: "Completed",
    year: "2024",
    description:
      "Automated unit and UI tests for core user flows to protect against regressions and document expected behavior.",
    impact: [
      "Wrote unit tests for critical logic and edge cases using JUnit",
      "Automated end-to-end UI flows with Selenium for smoke/regression coverage",
      "Stabilized selectors and waits to reduce flaky failures in CI",
      "Published readable reports and a quick-start testing guide",
    ],
    technologies: ["Java", "JUnit", "Selenium", "CI"],
    links: { demo: null, code: null },
    tags: ["Testing"],
  },
  {
    id: "airline-tests",
    title: "Airline Seat Assignment — Decision Table Tests",
    category: "Software Engineering",
    status: "Completed",
    year: "2024",
    description:
      "Validated airline seating business rules using clear, black-box decision tables.",
    impact: [
      "Captured requirements as readable rule tables with expected outcomes",
      "Generated focused test cases that surfaced logic gaps early",
      "Automated repeatable checks for future rule changes",
      "Delivered concise docs that non-engineers could review",
    ],
    technologies: ["Java", "Black-box Testing", "Decision Tables"],
    links: { demo: null, code: null },
    tags: ["Testing"],
  },
];

const CATEGORIES = [
  "All",
  "AI/ML & Data Science",
  "Full Stack Web Development",
  "Software Engineering",
];

// --- Sub-Components ---
// A reusable component for the stat cards.
function StatCard({ label, value, note, icon }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex-shrink-0 text-rose-600">{icon}</div>
      <div>
        <div className="text-2xl font-semibold text-gray-900">{value}</div>
        <div className="text-sm font-medium text-gray-700">{label}</div>
        <div className="text-xs text-gray-500">{note}</div>
      </div>
    </div>
  );
}

// --- Main App Component ---
// This is the primary component that holds the state and renders the full page.
export default function App() {
  const [active, setActive] = useState("All");

  // Filter projects based on the active category using useMemo for performance.
  const filtered = useMemo(() => {
    if (active === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.category === active);
  }, [active]);

  // Calculate stats dynamically.
  const totalProjects = PROJECTS.length;
  const aiProjects = PROJECTS.filter((p) => p.category === "AI/ML & Data Science").length;
  const fullStackProjects = PROJECTS.filter((p) => p.category === "Full Stack Web Development").length;
  const securityProjects = PROJECTS.filter((p) => (p.tags || []).includes("Security")).length;

  return (
    <div className="min-h-screen bg-gray-50 font-[Inter] text-gray-900">
      <style>{`
        @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', sans-serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      
      {/* Hero Section */}
      <section className="px-6 py-16 sm:py-24 bg-gradient-to-br from-gray-50 via-rose-50/30 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600">
              <Code className="h-4 w-4 text-rose-400" />
              Projects & Solutions
            </span>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My Portfolio
            </h1>
            <p className="mt-4 text-base text-gray-700 sm:text-lg">
              A selection of my work across AI/ML, data science, web apps, and software engineering.
            </p>
          {/* Category Filters */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = active === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "border-rose-300 bg-rose-50 text-rose-700 shadow-sm"
                        : "border-gray-300 bg-white text-gray-700 hover:border-rose-300 hover:text-rose-700"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => {
              const statusTone =
                p.status === "Completed"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : "bg-amber-50 text-amber-900 border-amber-200";

              return (
                <article
                  key={p.id}
                  className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    animation: "fadeInUp 500ms ease both",
                    animationDelay: `${Math.min(i, 6) * 60}ms`,
                  }}
                >
                  {/* Header */}
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-rose-700">
                        {p.title}
                      </h3>
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-1 text-xs font-medium ${statusTone}`}
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-gray-700">{p.description}</p>

                  {/* Impact */}
                  {p.impact?.length > 0 && (
                    <div className="mt-4">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900">Key Impact</h4>
                      <ul className="space-y-1.5">
                        {p.impact.slice(0, 3).map((line, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                            <span className="text-sm text-gray-700">{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech */}
                  <div className="mt-5">
                    <h4 className="mb-2 text-sm font-semibold text-gray-900">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1 text-xs text-gray-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tags on cards (optional visual) */}
                  {p.tags?.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {p.tags.map((tg) => (
                        <span
                          key={tg}
                          className="rounded-full border border-indigo-200 bg-indigo-50 px-2 py-0.5 text-xs text-indigo-800"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons (only if provided) */}
                  {(p.links?.demo || p.links?.code) && (
                    <div className="mt-6 flex gap-2">
                      {p.links.demo && (
                        <a
                          href={p.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-rose-300 hover:text-rose-700 flex items-center gap-1"
                        >
                          <Link className="h-3 w-3" /> Live Demo
                        </a>
                      )}
                      {p.links.code && (
                        <a
                          href={p.links.code}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:border-rose-300 hover:text-rose-700 flex items-center gap-1"
                        >
                          <Github className="h-3 w-3" /> Code
                        </a>
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          {/* Stats / Summary */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
            <StatCard
              label="Total Projects"
              value={totalProjects}
              note="Across all categories"
              icon={<Code className="h-6 w-6" />}
            />
            <StatCard
              label="AI/ML & Data Science"
              value={aiProjects}
              note="Research + predictive modeling"
              icon={<Zap className="h-6 w-6" />}
            />
            <StatCard
              label="Full Stack Web Dev"
              value={fullStackProjects}
              note="MERN & multi-portal apps"
              icon={<Code className="h-6 w-6" />}
            />
            <StatCard
              label="Security-focused"
              value={securityProjects}
              note="Secure coding, auth, crypto"
              icon={<Code className="h-6 w-6" />}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
