export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 py-6 transition-colors duration-300">
      
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-4">

        {/* 🔷 Left Side */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © 2026 Microsoft Club. All rights reserved.
        </p>

        {/* 🔗 Right Side Links */}
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          
          <button className="hover:text-gray-900 dark:hover:text-white transition">
            Privacy
          </button>

          <button className="hover:text-gray-900 dark:hover:text-white transition">
            Terms
          </button>

          <button className="hover:text-gray-900 dark:hover:text-white transition">
            Contact
          </button>

        </div>

      </div>
    </footer>
  );
}