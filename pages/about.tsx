// pages/about.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
  const timeline = [
    {
      year: "2024",
      title: "Scaling thoughtful experiences",
      description:
        "Partnering with teams to ship resilient products, build shared tooling, and mentor engineers across the stack.",
    },
    {
      year: "2022–2023",
      title: "Destiny2Power & platform work",
      description:
        "Led a small team to design, ship, and iterate on an analytics dashboard for the Destiny 2 community—leaning on Next.js, edge rendering, and data visualisation.",
    },
    {
      year: "2019–2021",
      title: "Academic foundations",
      description:
        "Studied Computer Science at Wilfrid Laurier University while experimenting with Java, systems programming, and the human side of software delivery.",
    },
    {
      year: "2016",
      title: "First lines of code",
      description:
        "Fell in love with programming through early Java projects, tinkering with modding communities, and learning how games are built.",
    },
  ];

  const toolbelt = [
    {
      label: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      label: "Backend",
      items: ["Node.js", "Rust", "PostgreSQL", "Prisma", "tRPC"],
    },
    {
      label: "Systems",
      items: ["CI/CD", "Serverless", "Edge runtimes", "Docker", "Observability"],
    },
    {
      label: "Collaboration",
      items: ["Product discovery", "Workshop facilitation", "Mentorship", "Design systems"],
    },
  ];

  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/80 to-primary opacity-80 blur-sm" />
        <div className="absolute -top-24 right-16 h-56 w-56 rounded-full bg-white/10 blur-3xl dark:bg-white/5" />
        <div className="absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-accent/40 blur-3xl dark:bg-accent/20" />

        <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
              About Owen
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Human-centered engineer, lifelong learner, builder of resilient systems.
            </h1>
            <p className="text-lg text-white/80">
              I craft performant, accessible experiences by blending systems-level thinking with close collaboration.
              My favourite work happens where product, engineering, and design overlap—and where teams rally around
              users to ship delightful outcomes.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur lg:text-base">
                <div className="text-white/60">Based in</div>
                <div className="text-lg font-semibold">Waterloo, Canada</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur lg:text-base">
                <div className="text-white/60">Preferred cadence</div>
                <div className="text-lg font-semibold">Idea ✦ Prototype ✦ Ship</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur lg:text-base">
                <div className="text-white/60">Currently focused on</div>
                <div className="text-lg font-semibold">Developer platforms & DX</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-16 px-6 py-24 lg:grid-cols-[1.2fr,0.8fr] lg:items-start">
        <div className="space-y-10">
          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-primary/10 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-darkFg">Designing with empathy, engineering with intent</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              I&apos;ve worked across greenfield R&D, production systems, and developer tooling initiatives.
              No matter the scope, I centre the process around clarity, iteration, and ownership—because the
              teams closest to the problem should be empowered to solve it.
            </p>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              My toolkit spans frontend craft, backend architecture, and platform engineering. I enjoy the
              messy middle of product development: aligning stakeholders, charting clear paths forward, and
              leaving teams with stronger foundations than they started with.
            </p>
          </div>

          <div className="grid gap-8 rounded-3xl border border-slate-200/70 bg-white/90 p-8 shadow-lg shadow-primary/10 dark:border-white/10 dark:bg-white/5 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-darkFg">Outside the code editor</h3>
              <p className="mt-3 text-base text-slate-600 dark:text-gray-300">
                I recharge through music production, hiking, and exploring game design. Creative outlets sharpen my eye
                for detail and keep me curious about how people interact with technology.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                ✦ Championing accessibility-first interfaces
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                ✦ Facilitating workshops & pairing sessions
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200">
                ✦ Experimenting with creative coding & AI tooling
              </div>
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 p-6 shadow-inner dark:from-primary/20 dark:via-secondary/20">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-primary dark:text-secondary">Timeline</h3>
            <ol className="mt-6 space-y-6">
              {timeline.map((item) => (
                <li key={item.year} className="relative pl-6">
                  <span className="absolute left-0 top-1 h-3 w-3 rounded-full border border-primary/40 bg-white dark:bg-darkBg" />
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-gray-400">
                    {item.year}
                  </div>
                  <div className="mt-1 text-base font-semibold text-slate-900 dark:text-darkFg">
                    {item.title}
                  </div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-gray-300">{item.description}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-lg shadow-primary/10 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-gray-400">Toolbelt</h3>
            <div className="mt-6 space-y-5">
              {toolbelt.map((group) => (
                <div key={group.label}>
                  <div className="text-sm font-semibold text-slate-900 dark:text-darkFg">{group.label}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-full border border-slate-200/80 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-gray-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="container mx-auto px-6 pb-24">
        <div className="flex flex-col gap-8 rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 px-8 py-12 text-center shadow-lg shadow-primary/10 dark:from-primary/20 dark:via-secondary/20">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-darkFg md:text-4xl">
            Let&apos;s build something purposeful together.
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-gray-300">
            Whether it&apos;s crafting a cohesive design system, taking an idea from zero to one, or levelling up an
            engineering team, I&apos;m excited to collaborate with people who care deeply about their craft.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default About;
