"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiGo,
  SiPostgresql,
  SiTrpc,
} from "react-icons/si";

const tech = [
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "TailwindCSS", icon: <SiTailwindcss /> },
  { name: "Supabase", icon: <SiSupabase /> },
  { name: "Golang", icon: <SiGo /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "tRPC", icon: <SiTrpc /> },
];

export default function TechStack() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl mx-auto">
        {tech.map((t, i) => (
          <motion.div
            key={t.name}
            className="flex flex-col items-center justify-center p-4 rounded-2xl shadow bg-white dark:bg-zinc-900"
            whileHover={{ scale: 1.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-4xl mb-2">{t.icon}</div>
            <p className="text-sm font-medium">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
