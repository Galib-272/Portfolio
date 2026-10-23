"use client";

import { motion, useTime, useTransform } from "framer-motion";
import { FileText, LayoutGrid, MapPin } from "lucide-react";
import Image from "next/image";

// Listed clockwise, starting from the top of the circle.
const techIcons = [
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
];

// Spaces the icons evenly around the circle.
const orbitPosition = (index, total) => {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    left: `${50 + 50 * Math.cos(angle)}%`,
    top: `${50 + 50 * Math.sin(angle)}%`,
  };
};

const FloatingPhoto = ({ profilePic }) => {
  const orbitSize = 505;

  // One shared clock drives both the ring and the counter-rotation of the
  // logos, so they always cancel out and the logos stay upright.
  const time = useTime();
  const ringRotate = useTransform(time, (t) => ((t / 30000) * 360) % 360);
  const logoRotate = useTransform(ringRotate, (r) => -r);

  return (
    <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[550px]">
      {/* On small phones the whole orbit is scaled down so it fits the screen */}
      <div className="relative flex items-center justify-center scale-[0.62] sm:scale-100">
        {/* Glow behind the photo */}
        <div className="absolute w-[420px] h-[420px] rounded-full bg-[conic-gradient(from_180deg,#6366f1,#a855f7,#22d3ee,#6366f1)] opacity-25 blur-[90px] z-0" />

        {/* Orbit track the logos travel along */}
        <div
          aria-hidden="true"
          className="absolute z-10 rounded-full border border-dashed border-white/10"
          style={{ width: orbitSize, height: orbitSize }}
        />
        <div
          aria-hidden="true"
          className="absolute z-10 rounded-full border border-indigo-400/10"
          style={{ width: orbitSize - 90, height: orbitSize - 90 }}
        />

        {/* Photo card with gradient frame */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 rounded-[4.5rem] p-[3px] bg-gradient-to-br from-indigo-400 via-violet-500/60 to-cyan-400/70 shadow-[0_40px_90px_-30px_rgba(99,102,241,0.65)]"
        >
          <div className="w-72 h-[400px] md:w-80 md:h-[440px] bg-[#0d1117] rounded-[calc(4.5rem-3px)] flex flex-col overflow-hidden">
            <div className="flex-1 relative overflow-hidden">
              <Image
                src={profilePic}
                alt="Galib"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-top translate-y-1 scale-110"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f1322] to-transparent" />
            </div>
            <div className="bg-[#0f1322] py-4 flex items-center justify-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                Available for work
              </span>
            </div>
          </div>
        </motion.div>

        {/* Rotating ring of logos */}
        <div
          className="absolute z-30 pointer-events-none flex items-center justify-center"
          style={{ width: orbitSize, height: orbitSize }}
        >
          <motion.div
            style={{ rotate: ringRotate }}
            className="relative w-full h-full"
          >
            {techIcons.map((item, i) => (
              <div
                key={item.name}
                style={orbitPosition(i, techIcons.length)}
                className="absolute -translate-x-1/2 -translate-y-1/2 w-15 h-15 md:w-18 md:h-18 bg-[#12172a]/90 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center shadow-[0_15px_35px_-10px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]"
              >
                <motion.div
                  style={{ rotate: logoRotate }}
                  className="relative w-9 h-9 md:w-11 md:h-11 select-none"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    fill
                    unoptimized
                    draggable={false}
                    className="object-contain"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const profilePic = "/IMG.jpg";

  const resumeDownloadLink =
    "https://docs.google.com/uc?export=download&id=1aJmBoQ9a4jrzz7ygncMeg6UdQEagFmGo";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-white overflow-hidden px-6 lg:px-20 pt-28 pb-10"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-40 relative"
        >
          <p className="eyebrow mb-7">MERN stack developer</p>

          <h1 className="font-display text-6xl sm:text-7xl lg:text-[6.5rem] font-extrabold tracking-[-0.03em] leading-[0.92] mb-7">
            Syed Ahmad
            <br />
            <span className="text-gradient pr-2">Galib</span>
          </h1>

          <p className="mx-auto lg:mx-0 max-w-md text-lg leading-relaxed text-slate-300/90 mb-6">
            I build full-stack web apps with React, Next.js, Node.js and
            MongoDB, from the database up to the last pixel.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-muted font-medium mb-10 text-sm">
            <MapPin size={16} className="text-violet-400" /> Dhaka, Bangladesh
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
            <motion.a
              href={resumeDownloadLink}
              download="Syed_Ahmad_Galib_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-[15px] text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <FileText size={18} /> Download CV
            </motion.a>

            <motion.a
              href="#projects"
              className="btn-ghost w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 text-[15px] text-white"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <LayoutGrid size={18} /> View projects
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center order-first lg:order-last mt-6 lg:mt-0"
        >
          <FloatingPhoto profilePic={profilePic} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
