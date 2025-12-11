"use client";
import { motion } from "framer-motion";

const achievements = [
  {
    title: "Individual Projects",
    content: "Completed 6+ personal projects showcasing full-stack development and UI/UX skills.",
    icon: "💻"
  },
  {
    title: "Team Projects Contributed",
    content: "Contributed to 50+ projects in a software house, collaborating with developers, designers, and project managers.",
    icon: "🤝"
  },
  {
    title: "Code Commits",
    content: "Over 1000+ commits demonstrating consistent contribution and code quality.",
    icon: "📝"
  },
  {
    title: "Skills Mastered",
    content: "React, Next.js, Tailwind CSS, Firebase, and modern web development practices.",
    icon: "⚡"
  },
  {
    title: "Problem Solving",
    content: "Effectively solved complex technical challenges in both individual and team projects.",
    icon: "🧩"
  },
  {
    title: "Learning & Growth",
    content: "Continually improving by learning new tools, frameworks, and best practices.",
    icon: "🚀"
  },
];

export default function Achievements() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-20 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">Achievements</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            My Contributions & Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{item.icon}</div>

              {/* Content */}
              <h4 className="text-white font-semibold text-xl mb-2">{item.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
