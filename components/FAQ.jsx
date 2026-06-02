"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "What exactly is Arlo?",
    a: "Arlo is your second brain—a single place to save notes, links, images, videos, documents, and more. It organizes everything automatically and lets you find or ask about anything you've saved.",
  },
  {
    q: "How is this different from a notes app?",
    a: "Notes apps store what you write. Arlo captures from everywhere, connects related ideas for you, and lets you ask questions in plain language instead of digging through folders.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your data is encrypted and always in your control. We build Arlo for curious minds—not to sell your information.",
  },
  {
    q: "When is Arlo launching?",
    a: "We're putting the finishing touches on it now. Join the waitlist and you'll be among the first to get access—plus a say in what we build next.",
  },
  {
    q: "How much will it cost?",
    a: "There'll be a generous free tier to get started, with affordable paid plans for power users. Waitlist members get early-bird pricing.",
  },
];

function Item({ q, a, isOpen, onToggle }) {
  return (
    <div className="glass rounded-[16px] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-[15px] font-semibold text-neutral-900">{q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.2 }} className="text-arlo text-xl font-light shrink-0 leading-none">
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-neutral-500 leading-[1.65]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-6 py-16">
      <div className="max-w-[680px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-arlo mb-3.5">FAQ</div>
          <h2 className="font-serif text-[clamp(28px,4vw,38px)] font-bold leading-[1.15]">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Item key={f.q} q={f.q} a={f.a} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
