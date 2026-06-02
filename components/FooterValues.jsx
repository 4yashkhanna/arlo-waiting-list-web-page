"use client";

import { motion } from "framer-motion";

const values = [
  { icon: "🔒", title: "Private by default", text: "Your data is encrypted and always in your control." },
  { icon: "⚡", title: "Built with care", text: "Thoughtfully designed to help you think, create, and grow." },
  { icon: "❤️", title: "By people who get it", text: "Made for curious minds, creators, and doers like you." },
];

export default function FooterValues() {
  return (
    <div className="border-t border-black/5 py-9 px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-[900px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {values.map((v) => (
          <motion.div
            key={v.title}
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="flex items-start gap-3"
          >
            <div className="w-9 h-9 rounded-[10px] bg-arlo-soft flex items-center justify-center text-base shrink-0">
              {v.icon}
            </div>
            <div>
              <div className="text-[13px] font-bold mb-0.5">{v.title}</div>
              <div className="text-xs text-neutral-400 leading-[1.45]">{v.text}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
