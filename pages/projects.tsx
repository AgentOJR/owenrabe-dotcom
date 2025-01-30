// pages/projects.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Projects: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">destiny2power.com</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A progress checking webapp, integrated with the Destiny 2 API...
            </p>
            <a
              href="#"
              className="text-secondary font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
          {/* Project Card 2 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Password Manager</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A Simple POC password manager...
            </p>
            <a
              href="#"
              className="text-secondary font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
          {/* Project Card 3 */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">owenrabe.com</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              A personal experiment in React + Next.js...
            </p>
            <a
              href="owenrabe.com"
              className="text-secondary font-semibold hover:underline"
            >
              View Details
            </a>
          </div>
          {/* ... Add more cards as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
