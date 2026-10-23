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
      className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-16"
        >
          <p className="eyebrow mb-6">Selected work</p>
          <h2 className="section-title text-5xl md:text-7xl">Projects</h2>
        </motion.div>

        {/* Responsive project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass glass-hover group flex h-full min-w-0 flex-col rounded-[1.75rem] p-3 transition-transform duration-500 hover:-translate-y-2"
            >
              {/* Project image, framed like a browser window */}
              <div className="overflow-hidden rounded-[1.25rem] bg-[#070912] ring-1 ring-inset ring-white/10">
                <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-3.5 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <div className="relative aspect-video w-full shrink-0 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 1279px) 30vw, 400px"
                    className="object-contain object-center transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              </div>

              {/* Project details */}
              <div className="flex flex-1 flex-col px-3 pb-3 pt-6 sm:px-4">
                {/* Title */}
                <h3 className="mb-1 break-words text-2xl font-bold tracking-tight text-white sm:text-[1.7rem]">
                  {project.title}
                </h3>

                {/* Subtitle */}
                <p className="mb-4 text-sm font-semibold text-gradient">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-indigo-500/10 px-2.5 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-inset ring-indigo-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="mt-auto flex w-full gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-white"
                  >
                    <ExternalLink size={15} className="shrink-0" />
                    <span className="whitespace-nowrap">Live Demo</span>
                  </motion.a>

                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-slate-200"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 fill-current"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
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
