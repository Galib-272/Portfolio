"use client";
import { motion } from 'framer-motion';
import { Cpu, Layout } from 'lucide-react';

const skills = {
  Frontend: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "Next.js 15", 
    "React.js", "Tailwind CSS", "Framer Motion", "Redux Toolkit", "Zustand"
  ],
  Backend: [
    "Node.js", "Express.js", "MongoDB", "Mongoose", "Firebase", 
    "BetterAuth", "JWT", "RESTful APIs", "Cloudinary"
  ]
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-[#0b0e14] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[12px] mb-4">My Stack</h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Expertise</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, list], index) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-10 rounded-[3rem] bg-[#1a1f2e]/40 border border-white/5 backdrop-blur-xl hover:border-indigo-500/30 transition-all duration-500 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  {category === "Frontend" ? <Layout size={28} /> : <Cpu size={28} />}
                </div>
                <h4 className="text-2xl font-black text-white uppercase tracking-tighter">
                  {category}
                </h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {list.map((skill, i) => (
                  <motion.span 
                    key={skill} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "rgba(99, 102, 241, 1)",
                      boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)"
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="px-5 py-2.5 rounded-2xl cursor-default text-xs font-bold uppercase tracking-widest bg-white/5 text-slate-300 border border-white/5 transition-all duration-300 hover:text-white"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;