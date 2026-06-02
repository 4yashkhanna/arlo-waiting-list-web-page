"use client";

import { motion } from "framer-motion";

const values = [
  { icon: "🔒", title: "Private by default", text: "Your data is encrypted and always in your control." },
  { icon: "⚡", title: "Built with care", text: "Thoughtfully designed to help you think, create, and grow." },
  { icon: "❤️", title: "By people who get it", text: "Made for curious minds, creators, and doers like you." },
];

export default function FooterValues() {
  return (
    <div className="py-12 px-6">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        className="max-w-[960px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5"
      >
        {values.map((v) => (
          <motion.div
            key={v.title}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            whileHover={{ y: -5 }}
            className="glass rounded-[20px] p-6 flex flex-col items-start"
          >
            <div className="w-11 h-11 rounded-[13px] bg-arlo-soft flex items-center justify-center text-lg mb-4">
              {v.icon}
            </div>
            <div className="text-[15px] font-bold mb-1.5">{v.title}</div>
            <div className="text-[13px] text-neutral-500 leading-[1.5]">{v.text}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
