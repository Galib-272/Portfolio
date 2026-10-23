"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

// Works out which section is on screen right now.
// A section counts as active once its top passes 40% of the screen height.
// At the very bottom of the page the last section (Contact) is active.
const getActiveSection = () => {
  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 4;
  if (atBottom) return "contact";

  const line = window.innerHeight * 0.4;
  let current = "";
  let currentTop = -Infinity;
  for (const id of sectionIds) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top <= line && top > currentTop) {
      current = id;
      currentTop = top;
    }
  }
  return current;
};

// Glowing gradient underline under the active link.
const underlineStyle = {
  height: 3,
  borderRadius: 9999,
  backgroundImage: "linear-gradient(90deg, #818cf8, #a855f7, #e879f9)",
  boxShadow: "0 0 12px rgba(168, 85, 247, 0.9)",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // While the page smooth-scrolls to a clicked link, keep the underline on
  // that link instead of letting it follow every section scrolled past.
  // The hold ends when that section arrives, when the visitor scrolls
  // themselves, or after 2 seconds at most.
  const lockTarget = useRef(null);
  const lockTimer = useRef(null);

  useEffect(() => {
    const unlock = () => {
      lockTarget.current = null;
      clearTimeout(lockTimer.current);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const current = getActiveSection();
      if (lockTarget.current) {
        if (current !== lockTarget.current) return;
        unlock();
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("wheel", unlock, { passive: true });
    window.addEventListener("touchstart", unlock, { passive: true });
    window.addEventListener("keydown", unlock);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("keydown", unlock);
      clearTimeout(lockTimer.current);
    };
  }, []);

  const handleLinkClick = (href) => {
    const id = href.slice(1);
    lockTarget.current = id;
    setActive(id);
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      lockTarget.current = null;
      setActive(getActiveSection());
    }, 2000);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-5xl px-4 md:px-5 py-2.5 mx-4 md:mx-auto rounded-2xl border border-white/10 bg-[#0b0f1d]/75 backdrop-blur-xl shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)]"
            : "max-w-7xl px-6 py-2 border border-transparent"
        }`}
      >
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="group flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-white cursor-pointer z-[110]"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl btn-primary text-base font-extrabold">
            G
          </span>
          <span>
            Galib<span className="text-gradient">.dev</span>
          </span>
        </motion.a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleLinkClick(link.href)}
                className={`nav-link relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  isActive ? "text-white" : "text-slate-300 hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    style={underlineStyle}
                    className="absolute left-3 right-3 -bottom-1 z-10"
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="md:hidden z-[110]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-[#070912]/95 backdrop-blur-2xl z-[105] flex flex-col items-center justify-center gap-4 md:hidden"
          >
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => {
                    handleLinkClick(link.href);
                    setIsOpen(false);
                  }}
                  className={`nav-link relative rounded-2xl px-8 py-3 font-display text-3xl font-bold tracking-tight transition-colors ${
                    isActive ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <span
                      style={underlineStyle}
                      className="absolute left-8 right-8 bottom-1 z-10"
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
