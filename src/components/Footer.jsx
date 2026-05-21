"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const iconVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      borderColor: "rgba(99, 102, 241, 0.3)",
      color: "#6366f1",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <footer className="bg-[#0b0e14] text-white border-t border-white/5 pt-16 pb-12 px-6 lg:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pb-2">
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-black tracking-tight uppercase">
              Galib<span className="text-[#a855f7]">.</span>
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/5 border border-green-500/10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] font-bold text-green-500 uppercase tracking-widest">
                System Active / {currentYear}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 px-6 py-3 rounded-2xl bg-[#1a1f2e]/20 border border-white/5 backdrop-blur-sm">
            <span className="text-xs font-semibold tracking-wider text-slate-600 uppercase mr-1 select-none">
              Stack
            </span>
            <span className="text-slate-500 text-sm font-bold hover:text-[#47A248] transition-colors cursor-default select-none">
              🍃 MongoDB
            </span>
            <span className="text-slate-500 text-sm font-bold hover:text-[#61DAFB] transition-colors cursor-default select-none">
              ex Express
            </span>
            <span className="text-slate-500 text-sm font-bold hover:text-[#61DAFB] transition-colors cursor-default select-none">
              ⚛️ React
            </span>
            <span className="text-slate-500 text-sm font-bold hover:text-[#F7DF1E] transition-colors cursor-default select-none">
              ⬢ Node
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/5">
          <div className="flex items-center gap-3">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-[#1a1f2e]/30 border border-white/5 rounded-xl text-slate-400 transition-colors flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-[#1a1f2e]/30 border border-white/5 rounded-xl text-slate-400 transition-colors flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </motion.a>

            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              whileTap="tap"
              className="p-3 bg-[#1a1f2e]/30 border border-white/5 rounded-xl text-slate-400 transition-colors flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </motion.a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5 text-center md:text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Designed & Built by Syed Ahmad Galib
            </p>
            <p className="text-[9px] font-medium text-slate-600 uppercase tracking-widest">
              © {currentYear} All Rights Reserved{" "}
              <span className="mx-2 text-slate-700">|</span> Dhaka, BD (GMT+6)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
