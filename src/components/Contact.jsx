"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      label: "Email Me",
      value: "ahmedgalib6677@gmail.com",
      href: "mailto:ahmedgalib6677@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      label: "Call Me",
      value: "+8801920376677",
      href: "tel:+8801920376677",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "@Galib-272",
      href: "https://github.com/Galib-272",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "Syed Ahmad Galib",
      href: "https://www.linkedin.com/in/galib272/",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-[#0b0e14] text-white relative overflow-hidden">
      {/* Structural Ambient Blur Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#a855f7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block Section */}
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              LET&apos;S <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">CONNECT.</span>
            </h2>
          </div>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mb-6" />
          <p className="text-slate-400 text-sm max-w-xl font-medium leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach out. I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        {/* Master Layout Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT CONTAINER: Utility Contact Cards Grid */}
          <div className="lg:col-span-5 space-y-4 w-full">
            {contactInfo.map((item, index) => {
              const TagName = item.href ? motion.a : motion.div;
              return (
                <TagName
                  key={index}
                  href={item.href || undefined}
                  target={item.href && (item.href.startsWith("http") || item.href.startsWith("https")) ? "_blank" : undefined}
                  rel={item.href && (item.href.startsWith("http") || item.href.startsWith("https")) ? "noopener noreferrer" : undefined}
                  whileHover={item.href ? { x: 8, borderColor: "rgba(99, 102, 241, 0.2)" } : undefined}
                  className={`w-full flex items-center gap-5 p-5 rounded-2xl bg-[#141923] border border-white/5 shadow-lg transition-all ${
                    item.href ? "cursor-pointer hover:bg-[#1a202c]" : "cursor-default"
                  }`}
                >
                  <div className="p-3.5 bg-[#0b0e14] border border-white/5 rounded-xl text-[#a855f7] flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex flex-col gap-0.5 overflow-hidden">
                    <span className="text-[10px] font-bold text-[#a855f7] uppercase tracking-widest">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white truncate tracking-wide">
                      {item.value}
                    </span>
                  </div>
                </TagName>
              );
            })}
          </div>

          {/* RIGHT CONTAINER: Premium Input Message Box Form */}
          <div className="lg:col-span-7 w-full p-8 md:p-10 rounded-[2.5rem] bg-[#141923]/60 border border-white/5 backdrop-blur-md shadow-2xl">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name Input Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-[#0b0e14]/80 border border-white/5 rounded-xl text-sm font-medium tracking-wide text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors"
                  />
                </div>

                {/* Email Address Input Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-[#0b0e14]/80 border border-white/5 rounded-xl text-sm font-medium tracking-wide text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors"
                  />
                </div>
              </div>

              {/* Message Block Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  placeholder="What's on your mind?"
                  className="w-full px-5 py-4 bg-[#0b0e14]/80 border border-white/5 rounded-xl text-sm font-medium tracking-wide text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors resize-none"
                />
              </div>

              {/* Action Button Container */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, bg: "linear-gradient(to right, #5356e2, #933fe3)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center gap-3 transition-all shadow-[0_4px_20px_rgba(99,102,241,0.25)]"
              >
                Send <Send size={14} className="translate-y-[-1px]" />
              </motion.button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;