"use client";
import { motion } from "framer-motion";
import { Code2, Cpu, Globe2, Sparkles } from "lucide-react";

const About = () => {
  const coreValues = [
    {
      icon: <Code2 size={24} />,
      title: "Frontend Excellence",
      desc: "Crafting pixel-perfect, responsive UIs with React and Next.js.",
    },
    {
      icon: <Cpu size={24} />,
      title: "Fullstack Power",
      desc: "Building robust APIs and scalable database architectures with Node & MongoDB.",
    },
    {
      icon: <Globe2 size={24} />,
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
    <section id="about" className="py-24 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[12px] mb-4">
              Background
            </h2>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8">
              Digital Architect <br />
              <span className="text-slate-500">of Modern Web</span>
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6 text-lg">
              I am a passionate{" "}
              <span className="text-white font-bold">Fullstack Developer</span>{" "}
              specializing in the MERN stack. My focus is on creating seamless
              user experiences through clean code and innovative design.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              With a strong foundation in{" "}
              <span className="text-indigo-400">Frontend engineering</span>, I
              bridge the gap between complex backend logic and intuitive visual
              interfaces.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {coreValues.map((item, i) => (
                <div key={i} className="group">
                  <div className="text-indigo-500 mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-tight">
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
            <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] rounded-full" />
            <div className="relative border border-white/10 bg-[#1a1f2e]/50 p-8 md:p-10 rounded-[3rem] backdrop-blur-md">
              <div className="flex items-center gap-4 mb-10">
                <Sparkles className="text-yellow-500" size={20} />
                <span className="text-white font-black tracking-widest text-sm uppercase">
                  Technical Skillset
                </span>
              </div>

              <div className="space-y-7">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center text-[11px] font-black uppercase tracking-widest">
                      <span className="text-slate-400">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
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
