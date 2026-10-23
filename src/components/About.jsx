"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Sparkles } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: <Code2 size={22} />,
      title: "Frontend Excellence",
      desc: "Crafting pixel-perfect, responsive UIs with React and Next.js.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Fullstack Power",
      desc: "Building robust APIs and scalable database architectures with Node & MongoDB.",
    },
    {
      icon: <Globe2 size={22} />,
      title: "Modern Workflow",
      desc: "Optimizing performance with Tailwind CSS and modern state management.",
    },
  ];

  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "MongoDB", level: 75 },
  ];

  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="eyebrow mb-6">Background</p>
            <h2 className="section-title text-5xl md:text-6xl mb-8">
              Digital architect
              <br />
              <span className="text-slate-500">of the modern web</span>
            </h2>

            <p className="text-slate-300 leading-relaxed mb-5 text-lg max-w-xl">
              I am a passionate{" "}
              <span className="text-white font-semibold">
                Fullstack Developer
              </span>{" "}
              specializing in the MERN stack. My focus is on creating seamless
              user experiences through clean code and innovative design.
            </p>
            <p className="text-muted leading-relaxed mb-10 max-w-xl">
              With a strong foundation in{" "}
              <span className="text-indigo-300">Frontend engineering</span>, I
              bridge the gap between complex backend logic and intuitive visual
              interfaces.
            </p>

            <div className="grid sm:grid-cols-3 gap-4">
              {coreValues.map((item, i) => (
                <div
                  key={i}
                  className="glass glass-hover group rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-indigo-500/25 to-violet-500/25 text-indigo-200 ring-1 ring-inset ring-white/10">
                    {item.icon}
                  </div>
                  <h3 className="text-white font-semibold text-[15px] mb-1.5 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-muted text-[13px] leading-snug">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-8 bg-indigo-600/20 blur-[100px] rounded-full" />
            <div className="glass relative p-8 md:p-10 rounded-[2.5rem]">
              <div className="flex items-center gap-3 mb-10">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-amber-400/10 ring-1 ring-inset ring-amber-300/20">
                  <Sparkles className="text-amber-300" size={18} />
                </span>
                <span className="font-display text-white font-semibold text-xl tracking-tight">
                  Technical skillset
                </span>
              </div>

              <div className="space-y-7">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2.5">
                    <div className="flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-200">{skill.name}</span>
                      <span className="text-indigo-300 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 w-full bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-400 shadow-[0_0_14px_rgba(168,85,247,0.55)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
