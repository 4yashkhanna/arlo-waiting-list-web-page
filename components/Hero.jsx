"use client";

import { useState } from "react";
import { motion } from "framer-motion";

function Sparkle({ size = 12, color = "#c94b27" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M6 1 L7.1 4.5 L11 4 L8.2 6.6 L9.5 11 L6 8.8 L2.5 11 L3.8 6.6 L1 4 L4.9 4.5 Z"
        fill={color}
      />
    </svg>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [message, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setMessage("You're on the list! We'll be in touch. ❤");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err.message);
    }
  }

  return (
    <section className="min-h-[88vh] flex flex-col items-center justify-center px-6 pt-20 pb-16 text-center">
      <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
        {/* Logo */}
        <motion.div variants={item} className="flex flex-col items-center gap-2 mb-7">
          <div className="w-[68px] h-[68px] bg-white rounded-[18px] flex items-center justify-center shadow-[0_2px_18px_rgba(0,0,0,0.13)]">
            <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
              <path
                d="M21 5 L24.8 16 L37 17 L28 25 L30.8 37 L21 31 L11.2 37 L14 25 L5 17 L17.2 16 Z"
                fill="#c94b27"
                stroke="#c94b27"
                strokeWidth="0.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[21px] font-semibold tracking-[-0.3px]">arlo</span>
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.13em] text-arlo uppercase mb-6"
        >
          <Sparkle /> AI Memory that works for you
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-serif font-bold leading-[1.1] max-w-[640px] mb-[18px] text-[clamp(38px,5.5vw,58px)]"
        >
          Your second brain
          <br />
          for <em className="text-arlo italic">everything</em> that matters
        </motion.h1>

        {/* Subhead */}
        <motion.p variants={item} className="text-base text-neutral-500 max-w-[440px] leading-[1.65] mb-2.5">
          Arlo captures, organizes, and connects the things you save—
          <br />
          so you can remember, find, and act on what matters.
        </motion.p>

        {/* Coming soon */}
        <motion.div variants={item} className="inline-flex items-center gap-1.5 text-[13px] text-neutral-400 mb-[30px]">
          <Sparkle color="#bbb" /> Coming soon
        </motion.div>

        {/* Email form */}
        <motion.form
          variants={item}
          onSubmit={handleSubmit}
          className="glass flex items-center w-full max-w-[460px] rounded-full p-[5px] pl-[22px] mb-5"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            disabled={status === "loading" || status === "success"}
            className="flex-1 bg-transparent border-none outline-none text-sm text-neutral-900 placeholder:text-neutral-400 min-w-0"
          />
          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="bg-arlo hover:bg-arlo-dark disabled:opacity-70 text-white rounded-full px-[22px] py-[13px] text-sm font-semibold whitespace-nowrap flex items-center gap-1.5 transition-colors"
          >
            {status === "loading" ? "Joining…" : status === "success" ? "Joined ✓" : "Join the waitlist →"}
          </button>
        </motion.form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-[13px] mb-3 ${status === "error" ? "text-red-500" : "text-green-600"}`}
          >
            {message}
          </motion.p>
        )}

        {/* Social proof */}
        <motion.div variants={item} className="flex items-center gap-2.5 text-[13px] text-neutral-500">
          <div className="flex">
            {[
              { bg: "#c97a52", l: "A" },
              { bg: "#7a8eb5", l: "B" },
              { bg: "#6dab8e", l: "C" },
            ].map((a, i) => (
              <div
                key={a.l}
                className="w-[30px] h-[30px] rounded-full border-2 border-white flex items-center justify-center text-[11px] font-bold text-white"
                style={{ background: a.bg, marginLeft: i === 0 ? 0 : -9 }}
              >
                {a.l}
              </div>
            ))}
          </div>
          Join 1,248+ people building their second brain with Arlo ❤
        </motion.div>
      </motion.div>
    </section>
  );
}
