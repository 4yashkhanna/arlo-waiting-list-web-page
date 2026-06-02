"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

function FloatingCard({ children, delay = 0 }) {
  return (
    <motion.div
      className="glass-strong rounded-[13px] px-[13px] py-[11px] min-w-[162px]"
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      whileHover={{ scale: 1.03 }}
    >
      {children}
    </motion.div>
  );
}

const sourceIcons = [
  // Gmail
  <svg key="gmail" width="18" height="18" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#EA4335" /></svg>,
  // Link
  <svg key="link" width="17" height="17" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" fill="#666" /></svg>,
  // Docs
  <svg key="docs" width="17" height="17" viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm-1 9H7v-2h6v2zm4 4H7v-2h10v2zM13 9V3.5L18.5 9H13z" fill="#4285F4" /></svg>,
  // YouTube
  <svg key="yt" width="18" height="18" viewBox="0 0 24 24"><path d="M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z" fill="#FF0000" /></svg>,
  // X
  <svg key="x" width="15" height="15" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.912-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="#1a1a1a" /></svg>,
];

const features = [
  {
    title: "AI that understands you",
    body: "Arlo connects ideas, extracts insights, and helps you find what you need—fast.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#555" strokeWidth="1.5" />
        <path d="M9 9a3 3 0 0 1 6 0c0 2-3 3-3 3" stroke="#555" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="0.8" fill="#555" />
      </svg>
    ),
  },
  {
    title: "Everything in one place",
    body: "No more tabs, screenshots, or scattered notes. Your digital world, organized.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" stroke="#555" strokeWidth="1.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" stroke="#555" strokeWidth="1.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="#555" strokeWidth="1.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" stroke="#555" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Take action, effortlessly",
    body: "Turn saved ideas into tasks, projects, and progress with Arlo by your side.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5 L13.7 8.5 L20 8 L15 12 L17 18.5 L12 15 L7 18.5 L9 12 L4 8 L10.3 8.5 Z" stroke="#555" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function FeatureSection() {
  return (
    <section className="px-6 pt-16 pb-12">
      <div className="max-w-[1040px] mx-auto">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-strong rounded-[28px] p-[52px] grid grid-cols-1 md:grid-cols-2 gap-11"
        >
          {/* Left copy */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-arlo mb-3.5">Save Anything</div>
            <h2 className="font-serif text-[36px] font-bold leading-[1.1] mb-4">
              Capture life.
              <br />
              Arlo remembers.
            </h2>
            <p className="text-sm text-neutral-500 leading-[1.7] mb-7">
              Save notes, links, images, videos, emails, documents, and more. Arlo instantly organizes and connects
              everything so it&apos;s always there when you need it.
            </p>
            <div className="flex items-center gap-2 mb-3.5">
              {sourceIcons.map((ic, i) => (
                <div key={i} className="w-[34px] h-[34px] rounded-[9px] bg-white/55 border border-white/60 flex items-center justify-center shrink-0">
                  {ic}
                </div>
              ))}
              <div className="w-[34px] h-[34px] rounded-[9px] bg-white/55 border border-white/60 flex items-center justify-center text-xl text-neutral-400 font-light">+</div>
            </div>
            <p className="text-[13px] text-neutral-400 italic">From anywhere. Instantly.</p>
          </div>

          {/* Right: phone + floating cards */}
          <div className="flex items-start gap-3.5 justify-center md:justify-start">
            <PhoneMockup />
            <div className="flex flex-col gap-2.5 pt-[18px]">
              <FloatingCard delay={0}>
                <div className="flex items-start gap-2.5">
                  <div className="w-[26px] h-[26px] rounded-[7px] bg-[#FF0000] flex items-center justify-center shrink-0">
                    <svg width="14" height="10" viewBox="0 0 20 14" fill="none"><path d="M8 3.5v7l6.5-3.5L8 3.5z" fill="white" /></svg>
                  </div>
                  <div>
                    <div className="text-[9px] text-neutral-400 mb-0.5">YouTube video</div>
                    <div className="text-[11px] font-semibold leading-tight">How to build a habit</div>
                    <div className="text-[9px] text-neutral-300 mt-0.5">youtube.com</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={1.4}>
                <div className="flex items-start gap-2.5">
                  <div className="w-[26px] h-[26px] rounded-[7px] bg-black text-white flex items-center justify-center font-bold text-[13px] font-serif">M</div>
                  <div>
                    <div className="text-[9px] text-neutral-400 mb-0.5">Article</div>
                    <div className="text-[11px] font-semibold leading-tight">The Science of Focus</div>
                    <div className="text-[9px] text-neutral-300 mt-0.5">medium.com</div>
                  </div>
                </div>
              </FloatingCard>

              <FloatingCard delay={2.6}>
                <div className="flex items-start gap-2.5">
                  <div className="w-[26px] h-[26px] rounded-[7px] bg-[#f87272] flex items-center justify-center shrink-0">
                    <svg width="13" height="14" viewBox="0 0 24 24" fill="none"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm1 9H9v-2h6v2zm2 4H9v-2h8v2zM13 9V3.5L18.5 9H13z" fill="white" /></svg>
                  </div>
                  <div>
                    <div className="text-[9px] text-neutral-400 mb-0.5">PDF</div>
                    <div className="text-[11px] font-semibold leading-tight">Q2 Strategy Deck</div>
                    <div className="text-[9px] text-neutral-300 mt-0.5">pdf · 4.2 MB</div>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-2.5 pt-2 border-t border-black/5">
                  <span className="text-[10px] font-medium text-neutral-600 flex items-center gap-1">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M6 1 L7.1 4.5 L11 4 L8.2 6.6 L9.5 11 L6 8.8 L2.5 11 L3.8 6.6 L1 4 L4.9 4.5 Z" fill="#c94b27" /></svg>
                    Saved to Arlo
                  </span>
                  <div className="w-[18px] h-[18px] bg-green-500 rounded-full flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 14 11" fill="none"><path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </FloatingCard>
            </div>
          </div>
        </motion.div>

        {/* Three feature pills */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-7"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={reveal}
              whileHover={{ y: -5 }}
              className="glass flex items-start gap-3 rounded-2xl px-4 py-[18px]"
            >
              <div className="w-10 h-10 rounded-xl bg-white/65 border border-white/70 flex items-center justify-center shrink-0">
                {f.icon}
              </div>
              <div>
                <h3 className="text-[13px] font-bold mb-1">{f.title}</h3>
                <p className="text-xs text-neutral-400 leading-[1.5]">{f.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
