"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, Loader2, X } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const contactInfo = [
    {
      label: "Email Me",
      value: "ahmedgalib6677@gmail.com",
      href: "mailto:ahmedgalib6677@gmail.com",
      icon: (
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "@Galib-272",
      href: "https://github.com/Galib-272",
      icon: (
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
      ),
    },
    {
      label: "LinkedIn",
      value: "Syed Ahmad Galib",
      href: "https://www.linkedin.com/in/galib272/",
      icon: (
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
      ),
    },
    {
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: null,
      icon: (
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
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const result = await response.json();
      setStatus("idle");

      if (result.success) {
        setToast({
          show: true,
          message: "Success! Your message was delivered.",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setToast({
          show: true,
          message: "Error processing request. Try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Submit Error:", error);
      setStatus("idle");
      setToast({
        show: true,
        message: "Network exception. Check connection.",
        type: "error",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-[#0b0e14] text-white relative overflow-hidden"
    >
      <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 pointer-events-none w-full max-w-sm">
        <AnimatePresence>
          {toast.show && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`pointer-events-auto flex items-center gap-4 p-4 rounded-xl bg-[#141923]/90 border backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] relative overflow-hidden ${
                toast.type === "success"
                  ? "border-emerald-500/20 shadow-emerald-500/5"
                  : "border-rose-500/20 shadow-rose-500/5"
              }`}
            >
              <div
                className={`absolute left-0 top-0 bottom-0 w-1 ${
                  toast.type === "success" ? "bg-emerald-500" : "bg-rose-500"
                }`}
              />

              <div className="pl-1">
                {toast.type === "success" ? (
                  <CheckCircle2
                    size={20}
                    className="text-emerald-400 shrink-0"
                  />
                ) : (
                  <AlertCircle size={20} className="text-rose-400 shrink-0" />
                )}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                  {toast.type === "success"
                    ? "System Notification"
                    : "System Error"}
                </p>
                <p className="text-sm font-medium text-white tracking-wide">
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => setToast((prev) => ({ ...prev, show: false }))}
                className="p-1 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 text-slate-400 hover:text-white transition-all shrink-0"
              >
                <X size={14} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#a855f7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-left">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
              LET&apos;S{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]">
                CONNECT.
              </span>
            </h2>
          </div>
          <div className="w-24 h-[4px] bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full mb-6" />
          <p className="text-slate-400 text-sm max-w-xl font-medium leading-relaxed">
            Have a project in mind or just want to say hi? Feel free to reach
            out. I&apos;m always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4 w-full">
            {contactInfo.map((item, index) => {
              const TagName = item.href ? motion.a : motion.div;
              return (
                <TagName
                  key={index}
                  href={item.href || undefined}
                  target={
                    item.href &&
                    (item.href.startsWith("http") ||
                      item.href.startsWith("https"))
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    item.href &&
                    (item.href.startsWith("http") ||
                      item.href.startsWith("https"))
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={
                    item.href
                      ? { x: 8, borderColor: "rgba(99, 102, 241, 0.2)" }
                      : undefined
                  }
                  className={`w-full flex items-center gap-5 p-5 rounded-2xl bg-[#141923] border border-white/5 shadow-lg transition-all ${
                    item.href
                      ? "cursor-pointer hover:bg-[#1a202c]"
                      : "cursor-default"
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

          <div className="lg:col-span-7 w-full p-8 md:p-10 rounded-[2.5rem] bg-[#141923]/60 border border-white/5 backdrop-blur-md shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-[#0b0e14]/80 border border-white/5 rounded-xl text-sm font-medium tracking-wide text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-5 py-4 bg-[#0b0e14]/80 border border-white/5 rounded-xl text-sm font-medium tracking-wide text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="What's on your mind?"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-4 bg-[#0b0e14]/80 border border-white/5 rounded-xl text-sm font-medium tracking-wide text-white placeholder-slate-600 focus:outline-none focus:border-[#6366f1]/50 transition-colors resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "submitting"}
                whileHover={
                  status !== "submitting"
                    ? {
                        scale: 1.02,
                        bg: "linear-gradient(to right, #5356e2, #933fe3)",
                      }
                    : {}
                }
                whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-black text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#6366f1] to-[#a855f7] flex items-center justify-center gap-3 transition-all shadow-[0_4px_20px_rgba(99,102,241,0.25)] ${
                  status === "submitting" ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {status === "submitting" ? (
                  <>
                    Sending... <Loader2 size={14} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send <Send size={14} className="translate-y-[-1px]" />
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
