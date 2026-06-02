"use client";

import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const sources = [
  { tag: "Article", title: "The Science of Focus", color: "#000", letter: "M" },
  { tag: "Note", title: "Weekend in Tulum", color: "#4daac8", letter: "N" },
  { tag: "PDF", title: "Q2 Strategy Deck", color: "#f87272", letter: "P" },
];

export default function AskLibrary() {
  return (
    <section className="px-6 py-16">
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[820px] mx-auto text-center"
      >
        <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-arlo mb-3.5">Ask your library anything</div>
        <h2 className="font-serif text-[clamp(30px,4.5vw,42px)] font-bold leading-[1.12] mb-4">
          Good ideas don&apos;t need
          <br />
          to get <em className="text-arlo italic">buried</em>.
        </h2>
        <p className="text-[15px] text-neutral-500 leading-[1.65] max-w-[460px] mx-auto mb-10">
          Just ask. Arlo searches everything you&apos;ve saved and answers in plain language—with the sources to back it up.
        </p>

        {/* Chat demo */}
        <div className="glass-strong rounded-[24px] p-6 md:p-8 text-left max-w-[600px] mx-auto">
          {/* user question */}
          <div className="flex justify-end mb-5">
            <div className="bg-arlo text-white rounded-[18px] rounded-br-[6px] px-4 py-2.5 text-sm max-w-[78%] shadow-[0_4px_14px_rgba(201,75,39,0.25)]">
              What were my main takeaways on building better habits?
            </div>
          </div>

          {/* arlo answer */}
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-[10px] bg-white border border-white/70 flex items-center justify-center shrink-0 shadow-sm">
              <svg width="18" height="18" viewBox="0 0 42 42" fill="none">
                <path d="M21 5 L24.8 16 L37 17 L28 25 L30.8 37 L21 31 L11.2 37 L14 25 L5 17 L17.2 16 Z" fill="#c94b27" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="bg-white/75 border border-white/70 rounded-[18px] rounded-tl-[6px] px-4 py-3 text-sm text-neutral-700 leading-[1.6]">
                Across your saves, three themes stand out: <strong className="font-semibold text-neutral-900">start tiny</strong> so the habit is easy to repeat, <strong className="font-semibold text-neutral-900">anchor it</strong> to something you already do, and <strong className="font-semibold text-neutral-900">track the streak</strong> to stay motivated.
              </div>

              {/* sources */}
              <div className="flex flex-wrap gap-2 mt-3">
                {sources.map((s) => (
                  <div key={s.title} className="flex items-center gap-2 bg-white/70 border border-white/70 rounded-full pl-1.5 pr-3 py-1">
                    <span className="w-5 h-5 rounded-[6px] flex items-center justify-center text-[9px] font-bold text-white font-serif" style={{ background: s.color }}>
                      {s.letter}
                    </span>
                    <span className="text-[11px] text-neutral-600">{s.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* input */}
          <div className="flex items-center gap-2 mt-6 bg-white/70 border border-white/70 rounded-full pl-4 pr-1.5 py-1.5">
            <span className="flex-1 text-sm text-neutral-400">Ask Arlo anything…</span>
            <button className="w-8 h-8 rounded-full bg-arlo flex items-center justify-center shrink-0" aria-label="Send">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
