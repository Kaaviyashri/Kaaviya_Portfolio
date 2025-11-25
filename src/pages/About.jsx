// src/pages/About.jsx
import React from "react";
import { GraduationCap, Layers, Award, Code2, Brain } from "lucide-react";
import Reveal from "../components/Reveal";
import { personalInfo } from "../data/personal.js";

export default function About() {
  return (
    <div className="mx-auto max-w-6xl space-y-12">
      {/* Intro */}
      <section className="pt-4 sm:pt-6">
        <Reveal className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-[11px] font-medium text-slate-300">
            About
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
            About {personalInfo?.name || "me"}
          </h1>

          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            I am a graduate student in{" "}
            <span className="font-semibold text-rose-200">
              Software Engineering at the University of Wisconsin–La Crosse
            </span>{" "}
            with prior degrees in Computer Science from Bharathidasan University
            and A.V.V.M. Sri Pushpam College. My work spans{" "}
            <span className="text-rose-200">
              software engineering, applied artificial intelligence, computer
              vision, and data analysis
            </span>
            , with an emphasis on rigorous methods, safety, and maintainable
            systems.
          </p>

          <p className="max-w-3xl text-sm sm:text-base text-slate-200/90">
            This page summarises my formal education, licenses & certifications,
            and technical skills.
          </p>
        </Reveal>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <Reveal className="flex items-center gap-2">
          <GraduationCap className="h-5 w-5 text-rose-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Education
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {/* UWL MSE */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-50">
                Master of Science — Software Engineering
              </p>
              <p className="text-xs text-slate-400">
                University of Wisconsin–La Crosse, USA
              </p>
              <p className="text-[11px] text-slate-500">
                Aug 2024 – May 2026 (expected)
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Selected coursework
              </p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-300">
                <li>CS 521 — Program Language Concepts</li>
                <li>CS 741 — Software Engineering Principles</li>
                <li>CS 743 — Software Verification &amp; Validation</li>
                <li>CS 555 — Fundamentals of Information Security</li>
                <li>CS 744 — Software Project Management</li>
                <li>CS 746 — Software Modeling &amp; Analysis</li>
                <li>CS 552 — Artificial Intelligence (in progress)</li>
                <li>CS 798 — Software Development Project (in progress)</li>
              </ul>
            </div>
          </Reveal>

          {/* MSc CS */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-50">
                Master of Science — Computer Science
              </p>
              <p className="text-xs text-slate-400">
                Bharathidasan University, India
              </p>
              <p className="text-[11px] text-slate-500">2021 – 2023</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Selected coursework
              </p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-300">
                <li>Object-Oriented Analysis &amp; Design (OOAD) and UML</li>
                <li>Advanced Java Programming</li>
                <li>Compiler Design</li>
                <li>Microprocessors &amp; Microcontrollers</li>
                <li>Open Source Technologies</li>
                <li>Network Security</li>
                <li>Data Mining &amp; Data Warehousing</li>
                <li>C# and .NET Framework</li>
                <li>Web Technologies &amp; Open Source Labs</li>
                <li>Major Software Project</li>
              </ul>
            </div>
          </Reveal>

          {/* BSc CS */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-3">
            <div>
              <p className="text-sm font-semibold text-slate-50">
                Bachelor of Science — Computer Science
              </p>
              <p className="text-xs text-slate-400">
                A.V.V.M. Sri Pushpam College (BDU), India
              </p>
              <p className="text-[11px] text-slate-500">2015 – 2018</p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Selected coursework
              </p>
              <ul className="mt-1 space-y-1 text-[11px] text-slate-300">
                <li>Problem Solving &amp; Programming (theory + lab)</li>
                <li>C, C++, and Java Programming</li>
                <li>Data Structures</li>
                <li>Operating Systems</li>
                <li>Database Management Systems (DBMS + lab)</li>
                <li>Data Communication Networks</li>
                <li>Computer Architecture &amp; Microprocessor</li>
                <li>Web Media I &amp; II; Software Engineering (elective)</li>
                <li>Computer Graphics (elective); Soft Skills Development</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="space-y-6">
        <Reveal className="flex items-center gap-2">
          <Award className="h-5 w-5 text-cyan-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Licenses &amp; certifications
          </h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Health, ethics, compliance + PM */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-rose-300" />
              <p className="text-sm font-semibold text-slate-50">
                Health, ethics &amp; compliance
              </p>
            </div>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-slate-50">
                  Ethics and Governance of Artificial Intelligence for Health
                </span>
                , World Health Organization (WHO), Oct 2025.{" "}
                <a
                  href="https://whoacademy.org/achievements/38f810ce-97b9-42d7-8a16-422906580a3b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-rose-200 hover:text-rose-100 underline underline-offset-2"
                >
                  View credential
                </a>
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  HIPAA Compliance Training Program
                </span>
                , HIPAA Training, Oct 2025 (expires Oct 2026).
              </li>
            </ul>

            <div className="flex items-center gap-2 pt-4">
              <Code2 className="h-4 w-4 text-emerald-300" />
              <p className="text-sm font-semibold text-slate-50">
                Project management
              </p>
            </div>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-slate-50">
                  Fundamentals of Agile Project Management
                </span>
                , Project Management Institute (PMI), Jan 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Fundamentals of Predictive Project Management
                </span>
                , Project Management Institute (PMI), Jan 2025.
              </li>
            </ul>
          </Reveal>

          {/* AI/ML, GenAI, programming, full stack */}
          <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5 space-y-4 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <Brain className="h-4 w-4 text-cyan-300" />
              <p className="text-sm font-semibold text-slate-50">
                AI, data &amp; software
              </p>
            </div>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold text-slate-50">
                  Deloitte Australia – Data Analytics Job Simulation
                </span>
                , Forage, Aug 2025 (ID: PJXf9Cu33rZBHinNx).
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Google AI Essentials
                </span>
                , Google, Aug 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  AWS Educate – Introduction to Generative AI
                </span>
                , Amazon Web Services, Jul 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  AWS Educate – Machine Learning Foundations
                </span>
                , Amazon Web Services, Jul 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Fundamentals of Machine Learning and Artificial Intelligence
                </span>
                , Amazon Web Services, Jul 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Prompt Engineering &amp; Programming with OpenAI
                </span>
                , Columbia+ (Columbia University), Jul 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Introduction to Artificial Intelligence
                </span>
                , IBM, Jun 2025.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Java Full Stack Developer
                </span>
                , Greens Technology, May 2024.
              </li>
              <li>
                <span className="font-semibold text-slate-50">
                  Fundamentals of Java Programming
                </span>
                , Coursera, Apr 2024.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Technical skills */}
      <section className="space-y-6 pb-4 sm:pb-6">
        <Reveal className="flex items-center gap-2">
          <Layers className="h-5 w-5 text-emerald-400" />
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
            Technical skills
          </h2>
        </Reveal>

        <Reveal className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <div className="grid gap-4 text-sm text-slate-200 sm:grid-cols-2">
            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Programming languages
              </p>
              <p>Python, Java, C/C++, JavaScript, SQL, R</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Machine learning &amp; AI
              </p>
              <p>
                scikit-learn, TensorFlow, PyTorch, Keras; model training,
                cross-validation, hyperparameter tuning, predictive modeling,
                evaluation (precision, recall, F1-score, ROC/AUC).
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">Computer vision</p>
              <p>OpenCV, YOLO-based object detection, image processing, data augmentation, real-time inference.</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Data science &amp; statistics
              </p>
              <p>
                Pandas, NumPy, SciPy, hypothesis testing, ANOVA, regression
                analysis, feature engineering, data cleaning, ETL pipelines.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Visualization &amp; BI
              </p>
              <p>
                Matplotlib, Seaborn, Plotly, Tableau, Power BI, Jupyter
                Notebook, Google Colab, Google Data Studio.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Web &amp; backend development
              </p>
              <p>
                React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS,
                Bootstrap, REST APIs, JWT authentication.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">Databases</p>
              <p>MongoDB, MySQL, Firebase, basic BigQuery experience.</p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Cloud, tools &amp; DevOps
              </p>
              <p>
                Git/GitHub, VS Code, IntelliJ IDEA, Eclipse, Docker, Postman,
                AWS (S3, EC2), basic CI/CD pipelines.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Software engineering, testing &amp; security
              </p>
              <p>
                Agile/Scrum, UML modeling, formal methods (VDM), automated
                testing (JUnit, Selenium), secure coding (OWASP practices),
                cryptographic protocols (RSA, Diffie–Hellman), OIDC-based
                authentication, TLS/SSH testing.
              </p>
            </div>

            <div className="space-y-1">
              <p className="font-semibold text-slate-50">
                Research &amp; analytical methods
              </p>
              <p>
                Literature review and synthesis, experimental design, data
                collection and preprocessing, statistical analysis, model
                evaluation and validation.
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
