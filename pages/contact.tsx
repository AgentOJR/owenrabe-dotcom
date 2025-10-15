// pages/contact.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const contactMethods = [
  {
    label: "Email",
    value: "owen.rabe@icloud.com",
    href: "mailto:owen.rabe@icloud.com",
    description: "Fastest way to reach me. Expect a thoughtful reply within 24 hours.",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/owen-rabe",
    href: "https://www.linkedin.com/in/owen-rabe-ab853b349/",
    description: "Let’s connect to chat about opportunities, collaborations, or speaking.",
  },
  {
    label: "GitHub",
    value: "github.com/agentojr",
    href: "https://github.com/agentojr",
    description: "Explore open-source work, experiments, and ongoing projects.",
  },
];

const Contact: NextPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary/70 to-primary opacity-80 blur" />
        <div className="absolute -top-24 right-10 h-48 w-48 rounded-full bg-white/10 blur-3xl dark:bg-white/5" />
        <div className="absolute -bottom-24 left-16 h-56 w-56 rounded-full bg-accent/40 blur-3xl dark:bg-accent/20" />

        <div className="relative z-10 container mx-auto px-6 py-24 text-white lg:py-32">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em]">
              Let&apos;s talk
            </span>
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              Collaborations, opportunities, or a quick hello—I&apos;d love to hear from you.
            </h1>
            <p className="text-lg text-white/80">
              I work best with teams who care deeply about craft, accessibility, and sustainable delivery. Drop a note
              to start a conversation about your next project, workshop, or pairing session.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur">
                <div className="text-white/60">Availability</div>
                <div className="text-lg font-semibold">Select partnerships</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur">
                <div className="text-white/60">Timezones</div>
                <div className="text-lg font-semibold">EST ± 3h</div>
              </div>
              <div className="rounded-2xl bg-white/10 px-5 py-4 text-sm backdrop-blur">
                <div className="text-white/60">Response time</div>
                <div className="text-lg font-semibold">Within 24 hours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto grid gap-16 px-6 py-24 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-xl shadow-primary/10 dark:border-white/10 dark:bg-white/5">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-darkFg md:text-4xl">Start a conversation</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-gray-300">
              Tell me about the problem you&apos;re trying to solve, the users you&apos;re serving, and the constraints
              you&apos;re working within. I&apos;ll respond with thoughts on scope, potential approaches, and how we
              might collaborate.
            </p>
            <div className="mt-8 space-y-6">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 dark:border-white/10 dark:bg-white/10"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary dark:text-secondary">
                      {method.label}
                    </span>
                    <a
                      href={method.href}
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm font-semibold text-primary transition group-hover:translate-x-1 dark:text-secondary"
                    >
                      Reach out →
                    </a>
                  </div>
                  <div className="mt-2 text-lg font-semibold text-slate-900 dark:text-darkFg">{method.value}</div>
                  <p className="mt-3 text-sm text-slate-600 dark:text-gray-300">{method.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-slate-200/80 bg-white/90 p-10 shadow-xl shadow-primary/10 dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-darkFg">Project fit checklist</h3>
            <ul className="mt-4 space-y-4 text-sm text-slate-600 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-lg text-primary dark:text-secondary">✦</span>
                You value accessible, inclusive experiences as core requirements—not afterthoughts.
              </li>
              <li className="flex gap-3">
                <span className="text-lg text-primary dark:text-secondary">✦</span>
                You&apos;re seeking a partner who can navigate product discovery and technical execution.
              </li>
              <li className="flex gap-3">
                <span className="text-lg text-primary dark:text-secondary">✦</span>
                Your team is ready to collaborate openly, iterate, and learn from users.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-10 shadow-lg shadow-primary/10 dark:from-primary/20 dark:via-secondary/20">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-darkFg">Prefer async?</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-gray-300">
              Send over a quick Loom or doc—whatever format helps you share context. I&apos;m happy to engage async
              before scheduling time live.
            </p>
            <a
              href="mailto:owen.rabe@icloud.com?subject=Project%20Inquiry"
              className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Email Owen
            </a>
          </div>
        </aside>
      </section>
    </Layout>
  );
};

export default Contact;
