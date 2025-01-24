// components/Navbar.tsx
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Load user preference from localStorage or default
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav className="sticky top-0 z-10 bg-gradient-to-r from-primary to-secondary text-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo or Brand */}
        <div className="text-xl font-bold">
          <Link href="/"></Link>
        </div>
        {/* Nav Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-accent transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="hover:text-accent transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </li>
          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md bg-white bg-opacity-20 hover:bg-opacity-30 transition"
              title="Toggle dark mode"
            >
              {isDark ? "Light" : "Dark"}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
