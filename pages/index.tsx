// pages/index.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        {/* layered gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-80 blur-[2px]" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl dark:bg-white/5" />
        <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/40 blur-3xl dark:bg-accent/20" />

        <div className="relative z-10 container mx-auto grid min-h-[70vh] gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
          <div className="space-y-8 text-center text-white lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium uppercase tracking-[0.2em]">
              Full-stack engineer
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Building thoughtful digital products that feel fast, polished, and human.
            </h1>
            <p className="mx-auto max-w-xl text-lg text-white/80 lg:mx-0">
              I help teams go from idea to production by shipping resilient experiences,
              clean architecture, and developer-friendly workflows across the full stack.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-semibold text-primary shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                View Recent Projects
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10"
              >
                Let&apos;s Collaborate
              </Link>
            </div>

            <dl className="grid gap-6 text-left sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 px-5 py-4 shadow-inner backdrop-blur">
                <dt className="text-xs uppercase tracking-wide text-white/70">Experience</dt>
                <dd className="text-2xl font-semibold">6+ yrs</dd>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 shadow-inner backdrop-blur">
                <dt className="text-xs uppercase tracking-wide text-white/70">Projects shipped</dt>
                <dd className="text-2xl font-semibold">30+</dd>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 shadow-inner backdrop-blur">
                <dt className="text-xs uppercase tracking-wide text-white/70">Favourite stack</dt>
                <dd className="text-base font-semibold">Next.js • TypeScript • Rust</dd>
              </div>
            </dl>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-white/90 p-8 shadow-2xl shadow-primary/40 backdrop-blur-sm dark:bg-darkBg/70">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
                <span>Currently exploring</span>
                <span>2024</span>
              </div>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-slate-800 dark:text-darkFg">Edge architectures</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-200/80">
                    Leaning into serverless runtimes, streaming UI, and resilient deployment tooling.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-slate-800 dark:text-darkFg">Developer platforms</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-200/80">
                    Crafting DX-first workflows so teams focus on outcomes, not plumbing.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/5">
                  <div className="text-sm font-semibold text-slate-800 dark:text-darkFg">Systems thinking</div>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-200/80">
                    Bridging product, infrastructure, and people to ship maintainable, scalable systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-darkFg md:text-4xl">
            A curious builder who loves shipping delightful experiences
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            I thrive in the messy middle between product and engineering. From rapid prototyping
            through production hardening, I partner with teams to create software that feels crafted,
            inclusive, and reliable under load.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-darkFg">Full-stack craftsmanship</h3>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              Product strategy, UX thinking, and high-leverage code across the stack—TypeScript, React,
              Node.js, Rust, and whatever the problem needs.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-darkFg">Performance + reliability</h3>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              Shipping accessible, fast experiences with observability baked in—Core Web Vitals,
              modern deployment pipelines, and zero-downtime shipping.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-darkFg">Mentorship + collaboration</h3>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              I build healthy engineering cultures, share knowledge generously, and enjoy pairing on
              tough architectural problems.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-lg shadow-primary/10 transition hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-darkFg">Tooling + automation</h3>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
              From CI/CD pipelines to design systems, I deliver the scaffolding that keeps teams shipping
              confidently and sustainably.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
