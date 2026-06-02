"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    title: "What best describes you?",
    sub: "Select all that apply.",
    emoji: "🌍",
    options: [
      { icon: "🎓", label: "Student" },
      { icon: "💼", label: "Professional" },
      { icon: "✏️", label: "Creator / Writer" },
      { icon: "🚀", label: "Entrepreneur / Founder" },
      { icon: "💭", label: "Other" },
    ],
  },
  {
    title: "What do you struggle with most?",
    sub: "Select all that apply.",
    emoji: "🧠",
    options: [
      { icon: "🗂️", label: "Scattered notes everywhere" },
      { icon: "🔍", label: "Finding things later" },
      { icon: "⏰", label: "Following through on ideas" },
      { icon: "📚", label: "Information overload" },
    ],
  },
  {
    title: "What would you love Arlo to help you do?",
    sub: "Select all that apply.",
    emoji: "✨",
    options: [
      { icon: "🔗", label: "Connect my ideas" },
      { icon: "✅", label: "Turn notes into tasks" },
      { icon: "💡", label: "Surface forgotten insights" },
      { icon: "📈", label: "Stay on top of projects" },
    ],
  },
  {
    title: "Almost there!",
    sub: "How did you hear about Arlo?",
    emoji: "🎉",
    options: [
      { icon: "🐦", label: "Social media" },
      { icon: "👋", label: "A friend" },
      { icon: "🔎", label: "Search" },
      { icon: "📰", label: "A newsletter" },
    ],
  },
];

const stepLabels = steps.map((s) => s.title);

export default function SurveySection() {
  const [current, setCurrent] = useState(0);
  const [selections, setSelections] = useState({}); // { stepIndex: Set(labels) }
  const [done, setDone] = useState(false);

  const stepSel = selections[current] || [];

  function toggle(label) {
    setSelections((prev) => {
      const set = new Set(prev[current] || []);
      set.has(label) ? set.delete(label) : set.add(label);
      return { ...prev, [current]: [...set] };
    });
  }

  function next() {
    if (current < steps.length - 1) setCurrent((c) => c + 1);
    else setDone(true);
  }

  const step = steps[current];

  return (
    <section className="px-6 py-[72px]">
      <div className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
        {/* Left */}
        <div>
          <h2 className="font-serif text-[36px] font-bold leading-[1.2] mb-3.5">Help us build Arlo for you</h2>
          <p className="text-sm text-neutral-500 leading-[1.65] mb-8">
            Your input helps us create a second brain that fits your life perfectly. It only takes 30 seconds.
          </p>

          <div className="flex flex-col gap-3.5">
            {stepLabels.map((label, i) => {
              const active = i === current && !done;
              const completed = i < current || done;
              return (
                <div key={label} className="flex items-center gap-3.5">
                  <div
                    className={`w-[26px] h-[26px] rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                      active || completed ? "bg-arlo text-white" : "bg-neutral-200 text-neutral-400"
                    }`}
                  >
                    {completed ? "✓" : i + 1}
                  </div>
                  <span className={`text-[13px] font-medium transition-colors ${active || completed ? "text-neutral-900" : "text-neutral-400"}`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="flex items-start gap-2 mt-6 pt-5 border-t border-black/5 text-[11.5px] text-neutral-400 leading-[1.5]">
            <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0 mt-0.5">
              <path d="M12 2L4 5v6.5c0 5.25 3.4 10.15 8 11.5 4.6-1.35 8-6.25 8-11.5V5l-8-3z" fill="#ddd" />
            </svg>
            <span>Your responses are private and help shape a better Arlo.</span>
          </div>
        </div>

        {/* Right: card */}
        <div className="glass-strong rounded-[20px] p-7 relative overflow-hidden">
          <span className="absolute top-3.5 right-4 text-[28px]">{done ? "🎉" : step.emoji}</span>

          <AnimatePresence mode="wait">
            {done ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="py-8 text-center"
              >
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-lg font-bold mb-1">Thank you!</h3>
                <p className="text-sm text-neutral-500">
                  Your answers help us build a better Arlo. We&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                <div className="text-xs text-neutral-400 mb-[18px]">{step.sub}</div>

                {step.options.map((opt) => {
                  const checked = stepSel.includes(opt.label);
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => toggle(opt.label)}
                      className="w-full flex items-center justify-between py-[11px] border-b border-black/5 last:border-none hover:opacity-70 transition-opacity"
                    >
                      <span className="flex items-center gap-2.5 text-sm">
                        <span className="w-[30px] h-[30px] bg-white/60 border border-white/60 rounded-[9px] flex items-center justify-center text-[15px]">
                          {opt.icon}
                        </span>
                        {opt.label}
                      </span>
                      <span
                        className={`w-[19px] h-[19px] rounded-[5px] border-[1.5px] shrink-0 flex items-center justify-center transition-colors ${
                          checked ? "bg-arlo border-arlo" : "border-neutral-300"
                        }`}
                      >
                        {checked && (
                          <svg width="11" height="9" viewBox="0 0 14 11" fill="none">
                            <path d="M1 5.5L5 9.5L13 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {!done && (
            <button
              onClick={next}
              className="w-full bg-arlo-soft hover:bg-[#f5e1d6] text-arlo rounded-full py-[15px] text-[15px] font-semibold flex items-center justify-center gap-2 mt-[18px] transition-colors"
            >
              {current === steps.length - 1 ? "Finish" : "Next"} →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
