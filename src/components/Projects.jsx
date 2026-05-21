"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react"; 
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
    <section id="projects" className="py-24 px-6 bg-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Projects
          </h2>
        </motion.div>

        {/* 3-Column balanced responsive layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#141923]/40 border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-full"
            >
              {/* Card Image Cover Section */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-800">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Card Content Block */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-indigo-400">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-black text-white mb-0.5 uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-[11px] font-bold text-indigo-400 mb-4 uppercase tracking-wider">
                  {project.subtitle}
                </p>
                
                {/* Description - Fixed multi-line layout height */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                {/* Side-by-Side Dual Action Buttons Container */}
                <div className="flex gap-3 mt-auto w-full">
                  
                  {/* Live Demo Button */}
                  <motion.a 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-white/10 text-slate-300 hover:text-white rounded-xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7] hover:border-transparent hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-200"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </motion.a>

                  {/* Custom Inline SVG GitHub Button */}
                  <motion.a 
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 py-3 border border-white/10 text-slate-300 hover:text-white rounded-xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7] hover:border-transparent hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-200"
                  >
                    <svg 
                      className="w-3.5 h-3.5 fill-current" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608.1 1.006.54 1.534 1.534 1.534.892 1.524 2.341 1.084 2.91.828.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
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