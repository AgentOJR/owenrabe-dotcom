// pages/contact.tsx
import type { NextPage } from "next";
import Layout from "../components/Layout";

const Contact: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Feel free to reach out if you have any questions or opportunities:
        </p>
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Email: </span>
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href="mailto:owen.rabe@icloud.com"
            >
              owen.rabe@icloud.com
            </a>
          </div>
          <div>
            <span className="font-semibold">LinkedIn: </span>
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href="https://www.linkedin.com/in/owen-rabe"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/owen-rabe
            </a>
          </div>
          <div>
            <span className="font-semibold">GitHub: </span>
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href="https://github.com/agentojr"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/agentojr
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
