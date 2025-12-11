"use client";
import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "Next.js", level: 95 },
      { name: "React.js", level: 92 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 95 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Responsive Design", level: 95 },
      { name: "Accessibility (ARIA)", level: 85 },
      { name: "Client-Side Caching (React Query / SWR)", level: 88 },
      { name: "Component Architecture", level: 90 },
      { name: "State Management (Redux / Zustand)", level: 92 },
      { name: "Form Handling (Formik / React Hook Form)", level: 90 },
    ]
  },

  {
    category: "Backend & Databases",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 80 },
      { name: "Supabase", level: 80 },
      { name: "Firebase (Auth, Firestore, Storage)", level: 95 },
      { name: "REST API Development", level: 88 },
      { name: "API Integration", level: 92 },
      { name: "Authentication (JWT, Session, OAuth)", level: 88 },
      { name: "Role-Based Authorization", level: 85 },
    ]
  },

  {
    category: "Performance, SEO & Optimization",
    skills: [
      { name: "Code Splitting / Lazy Loading", level: 90 },
      { name: "React Performance Optimization", level: 92 },
      { name: "Next.js Server Components", level: 85 },
      { name: "Next.js SEO (Metadata / OG Tags)", level: 90 },
      { name: "Structured Data (Schema.org)", level: 85 },
      { name: "Error Boundaries & Fallback UI", level: 88 },
      { name: "Image Optimization", level: 92 },
      { name: "Caching Strategies", level: 86 },
    ]
  },

  {
    category: "Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: 92 },
      { name: "CI/CD Basics", level: 75 },
      { name: "Package Managers (npm, yarn, pnpm)", level: 90 },
      { name: "Project Architecture Planning", level: 88 },
      { name: "Figma (UI/UX)", level: 85 },
      { name: "Canva", level: 88 },
      { name: "Testing (Jest / React Testing Library)", level: 70 },
      { name: "Version Control Workflow", level: 92 },
      { name: "Debugging / DevTools", level: 90 },
    ]
  }
];


export default function Skills() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-indigo-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                {category.category}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-gray-300 font-medium text-sm">{skill.name}</span>
                      <span className="text-indigo-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ amount: 0.2 }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
