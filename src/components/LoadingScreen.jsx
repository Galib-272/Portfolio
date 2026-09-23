"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statusMessages = [
  { threshold: 0, text: "INITIALIZING ENVIRONMENT..." },
  { threshold: 25, text: "LOADING CURATED PROJECTS..." },
  { threshold: 50, text: "SYNCHRONIZING TECH STACK..." },
  { threshold: 75, text: "OPTIMIZING VISUAL ASSETS..." },
  { threshold: 92, text: "PREPARING INTERACTIVE CANVAS..." },
  { threshold: 99, text: "ACCESS GRANTED. WELCOME." },
];

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const increment = Math.floor(Math.random() * 8) + 2;
        const nextVal = prev + increment;
        return nextVal > 100 ? 100 : nextVal;
      });
    }, 45);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        document.body.style.overflow = "unset";
        if (onLoadingComplete) onLoadingComplete();
      }, 750);
      return () => clearTimeout(timer);
    }
  }, [progress, onLoadingComplete]);

  const currentStatus =
    [...statusMessages].reverse().find((item) => progress >= item.threshold)
      ?.text || "INITIALIZING...";

  const isComplete = progress === 100;

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{
        opacity: 0,
        filter: "blur(24px)",
        scale: 1.04,
        transition: {
          duration: 0.75,
          ease: [0.4, 0, 0.2, 1],
        },
      }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#07090e] text-white overflow-hidden select-none"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute top-1/4 left-1/3 w-[360px] h-[360px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-md w-full px-6">
        <div className="relative mb-10 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className={`w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-dashed transition-colors duration-500 absolute ${isComplete ? "border-emerald-400/50" : "border-indigo-500/35"
              }`}
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full border transition-colors duration-500 absolute ${isComplete ? "border-emerald-500/30" : "border-purple-500/25"
              }`}
          />

          <motion.div
            animate={{ scale: isComplete ? [1, 1.1, 1.05] : [1, 1.05, 1] }}
            transition={{ duration: isComplete ? 0.4 : 2, repeat: isComplete ? 0 : Infinity, ease: "easeInOut" }}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#121624] to-[#1a1f33] border transition-all duration-500 flex items-center justify-center relative overflow-hidden backdrop-blur-xl ${isComplete
              ? "border-emerald-400/50 shadow-[0_0_50px_rgba(16,185,129,0.45)]"
              : "border-white/15 shadow-[0_0_45px_rgba(99,102,241,0.4)]"
              }`}
          >
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />

            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.span
                  key="logo-g"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
                  transition={{ duration: 0.2 }}
                  className="text-3xl sm:text-4xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-200 to-purple-400 bg-clip-text text-transparent"
                >
                  G
                </motion.span>
              ) : (
                <motion.div
                  key="check-icon"
                  initial={{ scale: 0, rotate: -30, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 18,
                  }}
                  className="flex items-center justify-center drop-shadow-[0_0_15px_rgba(52,211,153,0.9)]"
                >
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase">
            GALIB
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#ec4899] bg-clip-text text-transparent">
              .DEV
            </span>
          </h1>
          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-slate-300 mt-2 font-medium">
            Full-Stack Developer
          </p>
        </motion.div>

        <div className="w-full mb-4">
          <div className="h-2 sm:h-2.5 w-full bg-slate-950/90 border border-white/15 rounded-full overflow-hidden p-[1px] relative shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6366f1] via-[#8b5cf6] to-[#d946ef] rounded-full relative"
              style={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#ffffff] animate-ping opacity-90" />
            </motion.div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between text-xs sm:text-sm font-mono text-slate-400 tracking-wider">
          <span className="text-indigo-400 truncate max-w-[280px] font-medium">
            {currentStatus}
          </span>
          <span className="font-black text-white text-sm sm:text-base">
            {progress}
            <span className="text-indigo-400 text-xs">%</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
