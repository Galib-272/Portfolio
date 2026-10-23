"use client";
import { motion } from "framer-motion";
import { Cpu, Layout } from "lucide-react";
import Image from "next/image";

const skills = {
  Frontend: [
    { name: "HTML5", icon: "/icons/html5.svg" },
    { name: "CSS3", icon: "/icons/css3.svg" },
    { name: "JavaScript", icon: "/icons/javascript.svg" },
    { name: "TypeScript", icon: "/icons/typescript.svg" },
    { name: "Next.js 15", icon: "/icons/nextjs.svg" },
    { name: "React.js", icon: "/icons/react.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
    { name: "Framer Motion", icon: "/icons/framermotion.svg" },
    { name: "Redux Toolkit", icon: "/icons/redux.svg" },
    { name: "Zustand", icon: "/icons/zustand.svg" },
  ],
  Backend: [
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Express.js", icon: "/icons/express.svg" },
    { name: "MongoDB", icon: "/icons/mongodb.svg" },
    { name: "Mongoose", icon: "/icons/mongoose.svg" },
    { name: "Firebase", icon: "/icons/firebase.svg" },
    { name: "BetterAuth", icon: "/icons/betterauth.svg" },
    { name: "JWT", icon: "/icons/jwt.svg" },
    { name: "RESTful APIs", icon: "/icons/restapi.svg" },
    { name: "Cloudinary", icon: "/icons/cloudinary.svg" },
  ],
};

const rows = [
  { category: "Frontend", Icon: Layout, reverse: false },
  { category: "Backend", Icon: Cpu, reverse: true },
];

const SkillChip = ({ skill, hidden }) => (
  <li
    aria-hidden={hidden || undefined}
    className="skill-chip flex shrink-0 items-center gap-4 py-2"
  >
    <span className="skill-logo relative h-12 w-12 md:h-14 md:w-14 shrink-0">
      <Image
        src={skill.icon}
        alt=""
        fill
        unoptimized
        draggable={false}
        className="object-contain"
      />
    </span>
    <span className="whitespace-nowrap text-lg md:text-xl font-semibold text-slate-100">
      {skill.name}
    </span>
  </li>
);

const Skills = () => {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="eyebrow mb-6">My stack</p>
          <h2 className="section-title text-5xl md:text-7xl">
            Technical <span className="text-gradient">expertise</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 space-y-12">
        {rows.map(({ category, Icon, reverse }, index) => {
          const list = skills[category];
          return (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="max-w-7xl mx-auto px-6 mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl btn-primary text-white">
                  <Icon size={19} />
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category}
                </h3>
                <span className="text-sm text-muted">{list.length} tools</span>
              </div>

              {/* Endless row: the list is drawn twice so the loop has no gap */}
              <div className="marquee">
                <ul
                  className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}
                  style={{ "--marquee-duration": `${list.length * 4}s` }}
                >
                  {list.map((skill) => (
                    <SkillChip key={skill.name} skill={skill} />
                  ))}
                  {list.map((skill) => (
                    <SkillChip key={`${skill.name}-copy`} skill={skill} hidden />
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
