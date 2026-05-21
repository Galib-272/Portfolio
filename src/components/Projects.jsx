"use client";

import { motion } from "framer-motion";
import { Link, Globe } from "lucide-react"; 
import Image from "next/image";

const projects = [
  {
    title: "SkillSphere",
    subtitle: "Modern Online Learning Platform",
    description: "SkillSphere is a cutting-edge, responsive e-learning platform designed to empower students. Whether you're looking to master Web Development, Design, or Marketing, SkillSphere provides the tools to upgrade your skills today.",
    image: "/skillsphere.jpg", 
    tags: ["Next.js 15", "BetterAuth", "Motion", "Tailwind"],
    github: "https://github.com/Galib-272/Assignment-8.git",
    live: "https://skillsphere-learning.vercel.app"
  },
  {
    title: "KeenKeeper",
    subtitle: "Relationship Manager",
    description: "KeenKeeper is a personal relationship manager designed to help you maintain meaningful connections. It keeps your circle close by tracking interactions and reminding you when it's time to reach out.",
    image: "/keenkeeper.jpg",
    tags: ["React.js", "Recharts", "Soft-UI", "Tailwind"],
    github: "https://github.com/Galib-272/Assignment-7.git",
    live: "https://keenkeeper-ebon.vercel.app"
  },
  {
    title: "Digitools",
    subtitle: "Digital E-commerce Platform",
    description: "A modern, high-performance e-commerce interface for digital tools. Features an interactive cart system with real-time updates and instant toast notifications for a smooth UX.",
    image: "/digitools.jpg",
    tags: ["React.js", "DaisyUI", "Toastify", "Tailwind"],
    github: "https://github.com/Galib-272/Assignment-6.git",
    live: "http://digitools-platform-272.netlify.app"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-[#0b0e14] transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 dark:text-white">
            Projects
          </h2>
        </motion.div>

        {/* Updated Grid: 1 col on mobile/tablet, 3 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden bg-slate-200 dark:bg-slate-700">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover translate-y-3 scale-110 transition-transform duration-500 group-hover:scale-115 group-hover:translate-y-4"
                />
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 rounded-full text-slate-600 dark:text-indigo-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </p>
                
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex gap-4 mt-auto">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20"
                  >
                    <Link size={16} /> Live Demo
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white rounded-xl hover:bg-white dark:hover:bg-white hover:text-indigo-600 dark:hover:text-indigo-600 transition-colors"
                  >
                    <Globe size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;