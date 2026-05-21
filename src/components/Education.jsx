"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Calendar } from "lucide-react";

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
    <section
      id="education"
      className="py-24 bg-[#0b0e14] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Animated Section Heading Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <h2 className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[12px] mb-4 ">
            Pathways
          </h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white">
            Education <span className="text-slate-500">&</span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
              Experience
            </span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Column */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
                <GraduationCap className="text-indigo-400" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Academic Journey
              </h4>
            </div>

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 border-l border-white/10 group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[5px] top-0 w-[9px] h-[9px] rounded-full bg-slate-700 group-hover:bg-indigo-500 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

                <div className="bg-[#1a1f2e]/50 border border-white/5 p-6 rounded-3xl hover:border-white/10 transition-all hover:bg-[#1a1f2e]">
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold mb-3 uppercase tracking-widest">
                    <Calendar size={14} /> {edu.duration}
                  </div>
                  <h5 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                    {edu.institution}
                  </h5>
                  <p className="text-slate-400 text-sm font-semibold mb-4 italic">
                    {edu.degree}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Column (Fresher Status) */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Briefcase className="text-emerald-400" size={24} />
              </div>
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Experience
              </h4>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-[#1a1f2e] to-[#0b0e14] border border-white/5 p-8 rounded-[2.5rem] relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    Open for roles
                  </span>
                </div>

                <h5 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                  Aspiring <br />{" "}
                  <span className="text-indigo-500">Full-Stack Developer</span>
                </h5>

                <p className="text-slate-400 leading-relaxed mb-8">
                  Currently a{" "}
                  <span className="text-white font-bold">Fresher</span> actively
                  looking for Junior Full-Stack or Frontend positions. Ready to
                  contribute to production-grade applications as an Intern or
                  Junior Developer.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    "MERN Stack Proficient",
                    "Frontend Optimization",
                    "Agile Mindset",
                  ].map((skill, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-slate-300 font-medium"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative background element */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
