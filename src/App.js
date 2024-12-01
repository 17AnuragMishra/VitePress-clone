import React, { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";

function App() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-black");
      } else {
        setNavbarBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-3 border-b border-gray-800 ${navbarBg} transition-colors duration-300`}
      >
        <div className="flex items-center space-x-4">
          <img
            src="/vitepress-logo-mini.png"
            alt="VitePress Logo"
            className="w-8 h-8"
          />
          <h1 className="text-lg font-semibold">VitePress</h1>
          <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md space-x-2">
            <span className="text-gray-400">🔍</span>
            <span className="text-gray-400 text-sm">Search</span>
            <span className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded">
              Ctrl K
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">
            Guide
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm font-medium">
            Reference
          </a>
          <div className="relative">
            <button className="text-gray-400 hover:text-white text-sm font-medium flex items-center">
              1.5.0
              <span className="ml-1">▼</span>
            </button>
          </div>
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">
            🌙
          </button>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-2xl"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
        </div>
      </header>

      <section className="flex flex-col lg:flex-row items-center justify-around py-16 px-8 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">

        <div className="max-w-lg text-left">
          <h1 className="text-6xl font-extrabold leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              VitePress
            </span>
          </h1>
          <h2 className="text-4xl font-bold mt-4">
            Vite & Vue Powered <br /> Static Site Generator
          </h2>
          <p className="text-gray-400 mt-6 text-lg">
            Markdown to Beautiful Docs in Minutes
          </p>
          <div className="flex mt-8 space-x-4">
            <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full text-lg font-medium shadow-lg transform transition-transform hover:scale-105">
              What is VitePress?
            </button>
            <button className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full text-lg font-medium shadow-lg transform transition-transform hover:scale-105">
              Quickstart
            </button>
            <a
              href="https://github.com/vitejs/vitepress"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full text-lg font-medium shadow-lg transform transition-transform hover:scale-105"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500 to-pink-500 glow-gradient p-5 rounded-lg shadow-sm">
          <img
            src="/vitepress.png"
            alt="VitePress Logo"
            className="w-80 h-auto drop-shadow-lg"
          />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-around py-16 px-8 lg:px-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <FeatureBox
          icon="📝"
          title="Focus on Your Content"
          description="Effortlessly create beautiful documentation sites with just markdown."
        />
        <FeatureBox
          icon={
            <img
              src="/family.jpg"
              alt="VitePress Logo"
              className="w-12 h-12"
            />
          }
          title="Enjoy the Vite DX"
          description="Instant server start, lightning-fast hot updates, and leverage Vite ecosystem plugins."
        />
        <FeatureBox
          icon={
            <img
              src="/vite.png"
              alt="VitePress Logo"
              className="w-12 h-12"
            />
          }
          title="Customize with Vue"
          description="Use Vue syntax and components directly in markdown, or build custom themes with Vue."
        />
        <FeatureBox
          icon="🚀"
          title="Ship Fast Sites"
          description="Fast initial load with static HTML, fast post-load navigation with client-side routing."
        />
      </section>
    </div>
  );
}

function FeatureBox({ icon, title, description }) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md text-left hover:bg-gray-800 transition hover:scale-105 max-w-xs mx-auto">
      <div className="text-3xl mb-4 flex justify-center">{icon}</div>
      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default App;
