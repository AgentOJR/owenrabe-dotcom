// pages/projects.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const projectItems = [
  {
    title: "Destiny2Power",
    description:
      "A performance-forward, data-rich dashboard for Destiny 2 players. Built responsive components, realtime Bungie API integrations, and a collaborative workflow for a multi-person team.",
    stack: ["Next.js", "tRPC", "Tailwind", "Supabase"],
    href: "https://destiny2power.vercel.app/",
    status: "Live product",
    highlight: "Featured",
  },
  {
    title: "Owens' Developer Platform",
    description:
      "Internal tooling that stitches together CI/CD pipelines, linting, and deployment automation. Reduced time-to-ship by creating composable templates and DX-focused documentation.",
    stack: ["Turbo Repo", "GitHub Actions", "TypeScript", "Docker"],
    href: "#",
    status: "Private engagement",
    highlight: "In progress",
  },
  {
    title: "SecurePass",
    description:
      "Proof-of-concept password manager exploring local-first security, WebCrypto APIs, and intuitive onboarding patterns.",
    stack: ["React", "Rust WASM", "Tailwind", "Zod"],
    href: "#",
    status: "Prototype",
  },
  {
    title: "owenrabe.com",
    description:
      "This very site—focused on polished storytelling, accessibility, and delightful interactions that showcase how I approach product craft.",
    stack: ["Next.js", "Tailwind", "Framer Motion"],
    href: "https://owenrabe.com",
    status: "Continuous iteration",
  },
  {
    title: "Systems Capstone",
    description:
      "Co-led a team project focused on distributed systems and real-time collaboration. Designed the architecture, implemented observability, and facilitated sprint rituals.",
    stack: ["Rust", "gRPC", "PostgreSQL", "Grafana"],
    href: "#",
    status: "Completed",
  },
];

const Projects: NextPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/70 to-primary opacity-80 blur" />
        <div className="absolute -top-32 right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl dark:bg-white/5" />
        <div className="absolute -bottom-24 left-20 h-60 w-60 rounded-full bg-accent/40 blur-3xl dark:bg-accent/20" />

        <div className="relative z-10 container mx-auto px-6 py-24 text-white lg:py-32">
          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
              Selected work
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Shipping purposeful products with resilient engineering.
            </h1>
            <p className="text-lg text-white/80">
              From developer tools to community platforms, I help teams deliver solutions that balance velocity,
              polish, and maintainability. Each project below highlights different dimensions of that craft.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur">
              <div className="text-white/60">Core strengths</div>
              <div className="text-lg font-semibold">Product + Platform</div>
            </div>
            <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur">
              <div className="text-white/60">Collaboration style</div>
              <div className="text-lg font-semibold">Hands-on partner</div>
            </div>
            <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur">
              <div className="text-white/60">Outcome focus</div>
              <div className="text-lg font-semibold">Impact & insight</div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-darkFg md:text-4xl">
              Highlighted case studies & experiments
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              These are projects where I had significant ownership—from research and prototyping through launch,
              measurement, and iteration.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-gray-400">
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">Next.js</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">TypeScript</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">Rust</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">DX</span>
            <span className="rounded-full border border-slate-200 px-3 py-1 dark:border-white/10">Product Strategy</span>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {projectItems.map((project) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/90 p-8 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 transition group-hover:opacity-100" />
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-darkFg">{project.title}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
                  {project.highlight ?? project.status}
                </span>
              </div>
              <p className="mt-4 text-base text-slate-600 dark:text-gray-300">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400">
                  {project.status}
                </span>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:translate-x-1 dark:text-secondary"
                >
                  View project
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="grid gap-10 rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-xl shadow-primary/10 dark:border-white/10 dark:bg-white/5 lg:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-darkFg">How I work</h3>
            <p className="mt-3 text-base text-slate-600 dark:text-gray-300">
              Every collaboration starts with listening: understanding the real constraints, uncovering the unmet needs,
              and aligning on what success feels like for users and the business.
            </p>
          </div>
          <div className="space-y-6 lg:col-span-2 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
            {[
              {
                title: "01 — Discover",
                description: "Rapid research, lightweight prototypes, and shared language to move fast together.",
              },
              {
                title: "02 — Build",
                description: "Pairing with stakeholders to ship accessible, production-ready software with strong DX.",
              },
              {
                title: "03 — Learn",
                description: "Instrumenting observability and feedback loops so the product continues evolving.",
              },
            ].map((phase) => (
              <div key={phase.title} className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm dark:border-white/10 dark:bg-white/10">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
                  {phase.title}
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
