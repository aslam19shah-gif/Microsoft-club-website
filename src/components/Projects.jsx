import { motion } from "framer-motion";

const projects = [
  {
    title: "CloudSync Dashboard",
    desc: "Real-time cloud monitoring with analytics.",
    tags: ["React", "Azure", "Node.js"],
    status: "Live",
    gradient: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "CodeCollab",
    desc: "Collaborative editor with real-time sync.",
    tags: ["React", "WebSocket", "Monaco"],
    status: "Live",
    gradient: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "DevPortfolio Generator",
    desc: "Auto portfolio generator from GitHub.",
    tags: ["Next.js", "API", "Tailwind"],
    status: "Live",
    gradient: "from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "StudyBuddy AI",
    desc: "AI study assistant for notes & quizzes.",
    tags: ["Python", "FastAPI", "React"],
    status: "In Progress",
    gradient: "from-orange-500 to-red-500",
    image: "https://images.unsplash.com/photo-1581091870627-3c5b3c6c3c5b?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "EventHub",
    desc: "Campus event platform with analytics.",
    tags: ["Firebase", "Node.js", "Tailwind"],
    status: "In Progress",
    gradient: "from-sky-500 to-indigo-500",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "MicroLearn",
    desc: "Micro-learning platform.",
    tags: ["React", "MongoDB", "Docker"],
    status: "Coming Soon",
    gradient: "from-pink-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop"
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-[#020617] transition-colors duration-300">
      <div className="container-custom">

        {/* 🔥 Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Our <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Explore what our team is building 🚀
          </p>
        </div>

        {/* 💎 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}   // 🔥 reduced animation
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}         // 🔥 prevents re-animation
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >

              {/* 🖼 Image */}
              <div className="relative h-40 overflow-hidden">

                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"   // 🔥 important fix
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${proj.gradient} opacity-50`}></div>

                {/* Status */}
                <span className="absolute top-3 right-3 text-xs px-3 py-1 rounded-full bg-black/40 text-white backdrop-blur">
                  {proj.status}
                </span>
              </div>

              {/* 📦 Content */}
              <div className="p-5 bg-white dark:bg-gray-900 transition">

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {proj.title}
                </h3>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4">
                  {proj.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 rounded-md bg-gray-200 dark:bg-gray-800 text-sm hover:bg-gray-300 dark:hover:bg-gray-700">
                    GitHub
                  </button>
                  <button className="flex-1 py-2 rounded-md bg-blue-500 text-white text-sm hover:bg-blue-600">
                    Details
                  </button>
                </div>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}