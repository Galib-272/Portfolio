"use client";

import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useTime,
  useTransform,
} from "framer-motion";
import Image from "next/image";

const statusMessages = [
  { threshold: 0, text: "Initializing environment…" },
  { threshold: 25, text: "Loading curated projects…" },
  { threshold: 50, text: "Syncing tech stack…" },
  { threshold: 75, text: "Optimizing visual assets…" },
  { threshold: 92, text: "Preparing the canvas…" },
  { threshold: 99, text: "Ready. Welcome!" },
];

// Logos that join the orbit one by one as loading progresses.
const orbitLogos = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "Express.js", icon: "/icons/express.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
];

const nameFirst = "Syed Ahmad".split("");
const nameLast = "Galib".split("");

// Progress ring geometry (SVG units)
const RING_RADIUS = 62;
const RING_LENGTH = 2 * Math.PI * RING_RADIUS;

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
        const increment = Math.floor(Math.random() * 4) + 1;
        const nextVal = prev + increment;
        return nextVal > 100 ? 100 : nextVal;
      });
    }, 55);

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
      ?.text || "Initializing…";

  const isComplete = progress === 100;

  // One clock turns the orbit and keeps the logos upright.
  const time = useTime();
  const orbitRotate = useTransform(time, (t) => ((t / 16000) * 360) % 360);
  const logoRotate = useTransform(orbitRotate, (r) => -r);

  return (
    <motion.div
      key="preloader"
      initial={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{
        opacity: 0,
        scale: 1.03,
        filter: "blur(12px)",
        transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
      }}
      className="fixed inset-0 z-[99999] overflow-hidden select-none text-white bg-[#070912]"
    >
      {/* Background glow (one continuous layer) */}
      <div className="absolute -top-40 -left-32 w-[640px] h-[640px] rounded-full bg-[radial-gradient(circle,#4f46e5_0%,transparent_65%)] opacity-50 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-48 -right-32 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,#9333ea_0%,transparent_65%)] opacity-45 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 left-1/4 w-[480px] h-[480px] rounded-full bg-[radial-gradient(circle,#0891b2_0%,transparent_65%)] opacity-25 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        {/* Faint grid around the centre */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 55% 50% at 50% 45%, #000 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 55% 50% at 50% 45%, #000 20%, transparent 75%)",
          }}
        />

        {/* Orbit stage */}
        <div className="relative h-[300px] w-[300px] sm:h-[340px] sm:w-[340px] scale-[0.85] sm:scale-100 -mb-4 sm:mb-2">
          {/* Glow */}
          <div
            className={`absolute inset-16 rounded-full blur-3xl transition-colors duration-700 ${
              isComplete ? "bg-emerald-500/45" : "bg-violet-600/50"
            }`}
          />

          {/* Orbit track */}
          <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />

          {/* Logos joining the orbit */}
          <motion.div style={{ rotate: orbitRotate }} className="absolute inset-0">
            {orbitLogos.map((logo, i) => {
              const angle = (i / orbitLogos.length) * 2 * Math.PI - Math.PI / 2;
              const joined = progress >= ((i + 1) / orbitLogos.length) * 92;
              return (
                <div
                  key={logo.name}
                  className="absolute"
                  style={{
                    left: `${50 + 50 * Math.cos(angle)}%`,
                    top: `${50 + 50 * Math.sin(angle)}%`,
                  }}
                >
                  <AnimatePresence>
                    {joined && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 420, damping: 18 }}
                        className="-translate-x-1/2 -translate-y-1/2"
                      >
                        <motion.div
                          style={{ rotate: logoRotate }}
                          className="grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-2xl bg-[#12172a]/90 border border-white/10 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.8),0_0_20px_rgba(139,92,246,0.25)] backdrop-blur-md"
                        >
                          <span className="relative h-7 w-7 sm:h-8 sm:w-8">
                            <Image
                              src={logo.icon}
                              alt=""
                              fill
                              unoptimized
                              draggable={false}
                              className="object-contain"
                            />
                          </span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Progress ring + badge in the centre */}
          <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 150 150" className="absolute inset-0 -rotate-90">
              <defs>
                <linearGradient id="loader-ring" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={isComplete ? "#34d399" : "#818cf8"} />
                  <stop offset="55%" stopColor={isComplete ? "#10b981" : "#a855f7"} />
                  <stop offset="100%" stopColor={isComplete ? "#6ee7b7" : "#e879f9"} />
                </linearGradient>
              </defs>
              <circle
                cx="75"
                cy="75"
                r={RING_RADIUS}
                fill="none"
                stroke="rgba(255,255,255,0.07)"
                strokeWidth="4"
              />
              <circle
                cx="75"
                cy="75"
                r={RING_RADIUS}
                fill="none"
                stroke="url(#loader-ring)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={RING_LENGTH}
                strokeDashoffset={RING_LENGTH * (1 - progress / 100)}
                style={{
                  filter: `drop-shadow(0 0 6px ${isComplete ? "rgba(52,211,153,0.9)" : "rgba(168,85,247,0.9)"})`,
                }}
              />
            </svg>

            <motion.div
              animate={{ scale: isComplete ? [1, 1.12, 1.04] : [1, 1.05, 1] }}
              transition={{
                duration: isComplete ? 0.45 : 2,
                repeat: isComplete ? 0 : Infinity,
                ease: "easeInOut",
              }}
              className={`absolute inset-[30px] rounded-[1.6rem] flex items-center justify-center overflow-hidden transition-all duration-500 ${
                isComplete
                  ? "bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_50px_rgba(16,185,129,0.65)]"
                  : "bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-[0_0_55px_rgba(139,92,246,0.7)]"
              }`}
            >
              <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/25" />
              <motion.div
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
              />

              <AnimatePresence mode="wait">
                {!isComplete ? (
                  <motion.span
                    key="logo-g"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.6, filter: "blur(4px)" }}
                    transition={{ duration: 0.2 }}
                    className="relative font-display text-5xl font-extrabold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
                  >
                    G
                  </motion.span>
                ) : (
                  <motion.div
                    key="check-icon"
                    initial={{ scale: 0, rotate: -30, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 350, damping: 18 }}
                    className="relative flex items-center justify-center"
                  >
                    <svg
                      className="w-11 h-11 text-white"
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
        </div>

        {/* Name, letter by letter */}
        <h1
          aria-label="Syed Ahmad Galib"
          className="relative font-display text-4xl sm:text-6xl font-extrabold tracking-[-0.02em] text-center leading-none"
        >
          {nameFirst.map((ch, i) => (
            <motion.span
              key={`f${i}`}
              aria-hidden="true"
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15 + i * 0.04, duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
              className="inline-block whitespace-pre"
            >
              {ch}
            </motion.span>
          ))}{" "}
          {nameLast.map((ch, i) => (
            <motion.span
              key={`l${i}`}
              aria-hidden="true"
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: 0.15 + (nameFirst.length + i) * 0.04,
                duration: 0.5,
                ease: [0.2, 0.7, 0.2, 1],
              }}
              className="inline-block bg-gradient-to-r from-[#818cf8] via-[#a855f7] to-[#e879f9] bg-clip-text text-transparent"
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-3 text-sm sm:text-base font-medium text-slate-400"
        >
          MERN stack developer
        </motion.p>

        {/* Status + counter */}
        <div className="mt-10 flex w-full max-w-sm items-end justify-between gap-6">
          <motion.span
            key={currentStatus}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`pb-1.5 text-sm font-medium truncate ${
              isComplete ? "text-emerald-300" : "text-slate-300"
            }`}
          >
            {currentStatus}
          </motion.span>
          <span className="font-display text-5xl font-extrabold leading-none tabular-nums text-white">
            {progress}
            <span className="ml-0.5 text-2xl text-violet-300">%</span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
