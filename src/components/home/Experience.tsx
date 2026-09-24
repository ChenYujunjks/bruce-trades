"use client";

import { motion } from "framer-motion";

export default function Experience() {
  const timeline = [
    {
      year: "2025 – Present",
      role: "MSCS Student",
      place: "NYU Courant",
    },
    {
      year: "2021 – 2025",
      role: "B.S. in Computer Science",
      place: "NYU Shanghai",
    },
    {
      year: "2024",
      role: "Software Engineer Intern",
      place: "Course Scheduling System Project",
    },
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {timeline.map((t, i) => (
          <motion.div
            key={t.year}
            className="p-4 border-l-4 border-[--color-brand] bg-white dark:bg-zinc-900 shadow rounded-md"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <h3 className="text-lg font-semibold">
              {t.role} – {t.place}
            </h3>
            <p className="text-sm text-muted-foreground">{t.year}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
