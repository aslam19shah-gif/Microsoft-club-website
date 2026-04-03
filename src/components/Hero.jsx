import { motion } from "framer-motion";

export default function Hero({ setPage }) {
  return (
    <section className="relative py-40 text-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-pulse"></div>

      <div className="relative z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6"
        >
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
            Microsoft Club
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-500 mb-8"
        >
          Build. Learn. Innovate with us 🚀
        </motion.p>

        {/* 🔥 Get Started Button */}
        <motion.button
          onClick={() => setPage("contact")}  // 👈 THIS LINE
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-blue-500 text-white shadow-lg"
        >
          Get Started
        </motion.button>

      </div>
    </section>
  );
}