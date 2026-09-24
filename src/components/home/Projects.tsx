"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Poker Tracker",
    description:
      "Full-stack app for recording online poker sessions & analytics.",
    link: "https://github.com/ChenYujunjks/poker_tracker",
  },
  {
    title: "NYUSH Capstone Project",
    description:
      "Decentralized messaging DApp and smart contracts developed at NYU Shanghai.",
    link: "https://github.com/ChenYujunjks/NYUSH_Capstone_Project",
  },
  {
    title: "Course Scheduling System (Internship)",
    description:
      "Internal system for managing course schedules. Focused on backend architecture (PostgreSQL, Go, tRPC) and deployment pipelines. (Code not public)",
    link: null,
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="p-6 rounded-2xl shadow bg-white dark:bg-zinc-900 hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground mb-4">{p.description}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
