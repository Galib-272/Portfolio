"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Savoria",
    subtitle: "Restaurant Management System",
    description:
      "Savoria is a full-stack restaurant management system featuring role-based dashboards, POS and payments, table reservations, kitchen management, real-time notifications, and analytics.",
    image: "/savoria.png",
    tags: ["Next.js", "TypeScript", "MongoDB", "Socket.IO"],
    github: "https://github.com/Galib-272/Savoria_client_side.git",
    live: "https://savoria-client-side.vercel.app/",
  },
  {
    title: "TicketBari",
    subtitle: "Online Ticket Booking Platform",
    description:
      "TicketBari is an online ticket booking platform featuring travel search, ticket booking, vendor management, authentication, payment integration, and admin analytics.",
    image: "/ticketbari.png",
    tags: ["Next.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/Galib-272/Assignment-10_client_side.git",
    live: "https://ticketbari-client-side.vercel.app/",
  },
  {
    title: "IdeaVault",
    subtitle: "Startup Idea Validation Platform",
    description:
      "IdeaVault is a collaborative platform engineered for innovators to securely deposit business concepts, gather structured peer validation, and refine startup ideas collectively.",
    image: "/ideavault.png",
    tags: ["Next.js", "Full-Stack", "Tailwind CSS", "REST API"],
    github: "https://github.com/Galib-272/Assignment-9-client-side.git",
    live: "https://assignment-9-client-side.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#0b0e14] px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <h2 className="text-4xl font-black uppercase tracking-tighter text-white md:text-6xl">
            Projects
          </h2>
        </motion.div>

        {/* Responsive Project Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-[1.5rem] border border-white/5 bg-[#141923]/40 shadow-2xl sm:rounded-[2rem]"
            >
              {/* Project Image - Full Image Visible */}
              <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#0b0e14]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 30vw, 400px"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Project Details */}
              <div className="flex flex-1 flex-col p-4 sm:p-5 lg:p-6">
                {/* Technology Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-indigo-400 sm:text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="mb-1 break-words text-xl font-black uppercase tracking-tight text-white sm:text-2xl">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-3 min-h-[2.5rem] text-[10px] font-bold uppercase leading-relaxed tracking-wider text-indigo-400 sm:text-[11px]">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-auto flex w-full gap-3 pt-2">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-2 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all duration-200 hover:border-transparent hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7] hover:text-white hover:shadow-lg hover:shadow-indigo-500/20 sm:text-[11px]"
                  >
                    <ExternalLink size={14} className="shrink-0" />
                    <span className="whitespace-nowrap">Live Demo</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 px-2 py-3 text-[10px] font-bold uppercase tracking-wider text-slate-300 transition-all duration-200 hover:border-transparent hover:bg-gradient-to-r hover:from-[#6366f1] hover:to-[#a855f7] hover:text-white hover:shadow-lg hover:shadow-purple-500/20 sm:text-[11px]"
                  >
                    <svg
                      className="h-3.5 w-3.5 shrink-0 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608.1 1.006.54 1.534 1.534 1.534.892 1.524 2.341 1.084 2.91.828.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="whitespace-nowrap">GitHub</span>
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
