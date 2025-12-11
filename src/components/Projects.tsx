"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Code, Palette } from "lucide-react";

// Import your images
import yestofy from "@/assets/yestofy 1.png";
import wave from "@/assets/wave 2.png";
import helpix from "@/assets/helpix 1.png";
import pocketart from "@/assets/pocket 1.png";
import healthcare from "@/assets/healthcare.png";

const projects = [
  { 
    title: "E-Commerce Platform", 
    desc: "Full-stack online store with payment integration, admin dashboard, and real-time inventory",
    image: yestofy,
    link: "https://www.yestofy.com",
    color: "from-blue-500 to-cyan-500",
    tags: ["Next.js", "Stripe", "MongoDB"]
  },
  { 
    title: "Wave Dashboard", 
    desc: "A full-featured business management dashboard designed for monitoring sales, revenue, expenses, products, and customer analytics.",
    image: wave,
    link: "https://wave-roan.vercel.app/dashboard",
    color: "from-purple-500 to-pink-500",
    tags: ["React", "Charts", "Analytics"]
  },
  { 
    title: "All-in-One Service Platform", 
    desc: "Helppix.PK is Pakistan's first all-in-one service platform, offering affordable and expert quality services for homes, offices, and businesses.",
    image: helpix,
    link: "https://helppix-website.vercel.app/",
    color: "from-green-500 to-emerald-500",
    tags: ["Full-Stack", "Booking", "Services"]
  },
  { 
    title: "Book Promotion – Landing Page", 
    desc: "I designed and developed a promotional landing page for Pocket Art School to highlight the author's art-learning books.",
    image: pocketart,
    link: "https://the-pocket-art-school.vercel.app/",
    color: "from-orange-500 to-red-500",
    tags: ["Landing Page", "Design", "Marketing"]
  },
  { 
    title: "Doctor Appointment Booking Platform", 
    desc: "To create a simple, trustworthy, and user-friendly platform where patients can easily find doctors and book appointments online",
    image: healthcare,
    link: "https://health-care-liart.vercel.app/",
    color: "from-yellow-500 to-orange-500",
    tags: ["Mobile", "Health", "Tracking"]
  },
  { 
    title: "Task Management Tool", 
    desc: "Collaborative project management platform with team features and real-time updates",
    image: pocketart,
    link: "#",
    color: "from-indigo-500 to-purple-500",
    tags: ["Collaboration", "Real-time", "Teams"]
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-indigo-400 font-semibold text-sm tracking-wider uppercase">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A selection of my recent work and passion projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 overflow-hidden flex flex-col h-full">
                
                {/* Gradient Overlay on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === i ? 0.1 : 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} pointer-events-none z-10`}
                />
                
                {/* Image Section with Overlay */}
                <div className="relative w-full h-56 overflow-hidden">
                  <motion.div
                    animate={{ scale: hoveredIndex === i ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full"
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-fit"
                      fill
                    />
                  </motion.div>
                  
                  {/* Dark Overlay on Image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
                  
                  {/* Floating Icon on Hover */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: hoveredIndex === i ? 1 : 0,
                      scale: hoveredIndex === i ? 1 : 0.8
                    }}
                    className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow relative z-20">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow text-sm">
                    {project.desc}
                  </p>

                  {/* View Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:gap-3 transition-all group/btn"
                  >
                    View Project 
                    <motion.span 
                      animate={{ x: hoveredIndex === i ? 5 : 0 }}
                      className="text-xl"
                    >
                      →
                    </motion.span>
                  </a>
                </div>

                {/* Bottom Border Effect */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === i ? 1 : 0 }}
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} origin-left`}
                />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}