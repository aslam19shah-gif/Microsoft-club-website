import { useState } from "react";
export default function Navbar({ dark, setDark, setPage, page }) {
  const navItems = ["home", "team", "projects", "contact"];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      
      <div className="container-custom flex justify-between items-center py-4">

        {/* 🔷 Logo / Title */}
        <h1
          onClick={() => setPage("home")}
          className="text-2xl md:text-3xl font-semibold tracking-tight cursor-pointer"
        >
          <span className="text-gray-900 dark:text-white">Microsoft</span>{" "}
          <span className="text-blue-500">Club</span>
        </h1>

        {/* 🔗 Navigation */}
        <div className="flex items-center gap-3 md:gap-5">

          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setPage(item)}
              className={`capitalize px-4 py-2 rounded-lg text-sm md:text-base transition ${
                page === item
                  ? "bg-blue-500 text-white shadow-md"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              {item}
            </button>
          ))}

          {/* 🌙 Dark Mode Toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 px-4 py-2 rounded-lg bg-blue-500 text-white text-sm md:text-base hover:scale-105 transition"
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </button>

        </div>
      </div>
    </nav>
  );
}