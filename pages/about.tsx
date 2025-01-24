// pages/about.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          I’m a programmer with a passion for building high-performance web
          applications. I started my journey with java in highschool,and have
          continued to work on a computer science degree at WLU. In the coming
          months and years, I hope to hone my skills even further.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">My Background</h3>
        <p className="text-gray-700 dark:text-gray-200 mb-4">
          After years of working with various technologies, I’ve honed my
          ability to create scalable solutions that solve real-world problems.
          my favourite thus far would have to be my group project,
          destiny2power.
        </p>

        <h3 className="text-2xl font-semibold mt-8 mb-4">
          Interests & Hobbies
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Developing open-source libraries</li>
          <li>Exploring AI and machine learning</li>
          <li>Attending hackathons and tech meetups</li>
          <li>Collecting retro gaming consoles</li>
          <li>Playing video games</li>
          <li>and more...</li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
