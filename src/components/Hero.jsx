"use client";

import { motion } from "framer-motion";
import { FileText, LayoutGrid, MapPin } from "lucide-react";
import Image from "next/image";

// Tech icons constant
const techIcons = [
  { name: "MongoDB", color: "#47A248", icon: "🍃", position: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" },
  { name: "React", color: "#61DAFB", icon: "⚛️", position: "top-1/2 right-0 translate-x-1/2 -translate-y-1/2" },
  { name: "Node", color: "#339933", icon: "⬢", position: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2" },
  { name: "JS", color: "#F7DF1E", icon: "JS", position: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" },
];

const FloatingPhoto = ({ profilePic }) => {
  const orbitSize = 505; 

  return (
    <div className="relative flex items-center justify-center w-full h-[550px]">
      <div className="absolute w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full z-0" />
      
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-20 w-72 h-[400px] md:w-80 md:h-[440px] bg-[#0d1117] border-[8px] border-[#1a1f2e] rounded-[4.5rem] shadow-2xl flex flex-col overflow-hidden"
      >
        <div className="flex-1 relative overflow-hidden"> 
          <Image 
            src={profilePic} 
            alt="Galib" 
            fill
            sizes="(max-width: 768px) 100vw, 400px" 
            className="object-cover object-top translate-y-1 scale-110" 
            priority 
          />
        </div>
        <div className="bg-[#1a1f2e] py-4 flex items-center justify-center gap-2 border-t border-white/5">
          <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[10px] font-black text-white tracking-widest uppercase">Available for work</span>
        </div>
      </motion.div>

      {/* Rotating Orbit */}
      <div className="absolute z-30 pointer-events-none flex items-center justify-center" style={{ width: orbitSize, height: orbitSize }}>
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
          className="relative w-full h-full"
        >
          {techIcons.map((item, i) => (
            <div 
              key={i} 
              className={`absolute ${item.position} w-16 h-16 md:w-20 md:h-20 bg-[#1a1f2e] border-2 border-white/10 rounded-3xl flex items-center justify-center shadow-2xl`}
            >
              <motion.div 
                animate={{ rotate: -360 }} 
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }} 
                className="font-black text-2xl md:text-3xl select-none" 
                style={{ color: item.color }}
              >
                {item.icon}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const Hero = () => {
  const profilePic = "/IMG.jpg";

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-[#0b0e14] text-white overflow-hidden px-6 lg:px-20 pt-28 pb-10"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* LEFT SIDE: TEXTS */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left z-40 relative"
        >
          <h2 className="text-indigo-400 font-bold tracking-[0.4em] uppercase text-[12px] mb-4">
            Mern Stack Developer
          </h2>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Syed Ahmad <br />
            <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
              Galib
            </span>
          </h1>

          <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-400 font-bold mb-10 text-sm uppercase tracking-widest">
            <MapPin size={16} className="text-indigo-500" /> Dhaka, Bangladesh
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
            {/* SEE RESUME BUTTON */}
            <motion.a
              href="#"
              className="group relative w-full sm:w-auto overflow-hidden px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all uppercase text-[11px] tracking-widest text-white border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <FileText size={18} /> See Resume
              </span>
            </motion.a>

            {/* SELECTED WORKS BUTTON */}
            <motion.a
              href="#projects"
              className="group relative w-full sm:w-auto overflow-hidden px-10 py-4 rounded-2xl font-black flex items-center justify-center gap-3 transition-all uppercase text-[11px] tracking-widest text-white border border-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-3">
                <LayoutGrid size={18} /> Selected Works
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: PHOTO & ORBIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center order-first lg:order-last mt-10 lg:mt-0"
        >
          <FloatingPhoto profilePic={profilePic} />
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;