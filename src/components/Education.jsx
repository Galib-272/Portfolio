"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar, Check } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      institution: "Daffodil International University",
      degree: "B.Sc. in Computer Science & Engineering",
      duration: "2023 — 2027",
      description:
        "Focused on Software Engineering, Data Structures, and Full-Stack Development.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      institution: "Bangladesh Noubahini School And College, Khulna",
      degree: "Higher Secondary Certificate (Science)",
      duration: "2019 — 2021",
      description:
        "Completed secondary education with a strong foundation in Mathematics and Physics.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  return (
    <section id="education" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <p className="eyebrow mb-6">Pathways</p>
          <h2 className="section-title text-5xl md:text-7xl">
            Education <span className="text-slate-500">&</span>{" "}
            <span className="text-gradient">experience</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-500/15 ring-1 ring-inset ring-indigo-400/30">
                <GraduationCap className="text-indigo-300" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Academic journey
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative space-y-8 pl-8">
              <div
                aria-hidden="true"
                className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-indigo-400 via-violet-500/60 to-cyan-400/30"
              />
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div
                    className={`absolute -left-[32px] top-7 h-[11px] w-[11px] rounded-full bg-gradient-to-br ${edu.color} ring-4 ring-[#070912] shadow-[0_0_14px_rgba(129,140,248,0.8)]`}
                  />

                  <div className="glass glass-hover p-6 md:p-7 rounded-3xl transition-transform duration-300 group-hover:translate-x-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] px-3 py-1 text-indigo-200 text-xs font-semibold mb-4 ring-1 ring-inset ring-white/10">
                      <Calendar size={13} /> {edu.duration}
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-1 tracking-tight">
                      {edu.institution}
                    </h4>
                    <p className="text-indigo-300/90 text-sm font-medium mb-4">
                      {edu.degree}
                    </p>
                    <p className="text-muted text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-emerald-500/15 ring-1 ring-inset ring-emerald-400/30">
                <Briefcase className="text-emerald-300" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Experience
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass p-8 md:p-10 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 ring-1 ring-inset ring-emerald-400/25 mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  <span className="text-xs font-semibold text-emerald-300">
                    Open for roles
                  </span>
                </div>

                <h4 className="text-4xl font-bold text-white mb-5 tracking-tight leading-[1.05]">
                  Aspiring
                  <br />
                  <span className="text-gradient">Full-Stack Developer</span>
                </h4>

                <p className="text-slate-300 leading-relaxed mb-8">
                  Currently a{" "}
                  <span className="text-white font-semibold">Fresher</span>{" "}
                  actively looking for Junior Full-Stack or Frontend positions.
                  Ready to contribute to production-grade applications as an
                  Intern or Junior Developer.
                </p>

                <ul className="space-y-3">
                  {[
                    "MERN Stack Proficient",
                    "Frontend Optimization",
                    "Agile Mindset",
                  ].map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-[15px] text-slate-200 font-medium"
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-lg bg-indigo-500/20 text-indigo-200 ring-1 ring-inset ring-indigo-400/30">
                        <Check size={14} strokeWidth={3} />
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-violet-500/25 blur-[90px] rounded-full" />
              <div className="absolute -top-20 -left-10 w-52 h-52 bg-emerald-500/10 blur-[80px] rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
