import { useState } from "react";
import { team } from "../data/teamData";
import { motion, AnimatePresence } from "framer-motion";

export default function Team() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);

  const roles = ["All", "Dev", "Design", "DevOps", "AI/ML"];

  const filtered = team.filter(member =>
    member.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "All" || member.category === filter)
  );

  return (
    <section className="py-20 bg-gray-100 dark:bg-[#020617] text-gray-900 dark:text-white transition">

      <div className="container-custom">

        {/* 🔥 Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-sm bg-purple-500/20 inline-block px-4 py-1 rounded-full mb-4">
            OUR PEOPLE
          </p>

          <h2 className="text-4xl font-bold mb-4">
            Meet the{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Team
            </span>
          </h2>

          <p className="text-gray-500 dark:text-gray-400">
            Talented developers driving innovation 🚀
          </p>
        </motion.div>

        {/* 🔍 Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">

          <div className="flex gap-3 flex-wrap">
            {roles.map(role => (
              <button
                key={role}
                onClick={() => setFilter(role)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  filter === role
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                    : "bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {role}
              </button>
            ))}
          </div>

          <input
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-lg bg-white dark:bg-gray-800 border dark:border-gray-700"
          />
        </div>

        {/* 💎 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelected(member)}
              className="cursor-pointer p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500"
            >
              <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg">

                {/* Avatar */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                  {member.initials}
                </div>

                <h3 className="text-center font-semibold text-lg">
                  {member.name}
                </h3>

                <p className="text-center mt-2 text-sm text-gray-500">
                  {member.role}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {member.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>

        {/* 🪟 Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.div
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl max-w-md w-full text-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xl">
                  {selected.initials}
                </div>

                <h2 className="text-xl font-bold">{selected.name}</h2>
                <p className="text-gray-500 mb-4">{selected.role}</p>

                <div className="flex flex-wrap justify-center gap-2">
                  {selected.skills.map((s, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelected(null)}
                  className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}