// pages/index.tsx
import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="relative overflow-hidden">
        {/* Hero background gradient */}
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />

        {/* Content Container */}
        <div className="relative z-10 container mx-auto flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Hello, I’m Owen Rabe</h1>
          <p className="text-2xl mb-6 max-w-2xl">
            I specialize in building modern, high-performance web experiences,
            and dabble in building all sorts of systems.
          </p>
          <Link legacyBehavior href="/projects">
            <a className="inline-block bg-white text-primary px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition">
              View My Projects
            </a>
          </Link>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          A Little About Me
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-center text-gray-600 dark:text-gray-300">
          I’m a programmer who loves exploring cutting-edge technologies,
          crafting clean code, and building applications that bring ideas to
          life. My skill set includes React, Next.js, Node.js, C, Java, Rust,
          Python and much more.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
