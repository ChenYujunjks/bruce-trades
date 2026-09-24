import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";
import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

import { Card, CardTitle } from "@/components/ui/card";

const noteTitles: Record<string, string> = {
  "2026-fall": "2026 Fall",
  ethbtc: "ETH/BTC Bear-Market Relative Strength",
  stipend: "Stipend Page",
  "rent-plan": "Rent Plan",
  nvidia: "NVIDIA Filter Guide",
};

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getNotes() {
  const notesDirectory = join(process.cwd(), "src", "app", "notes");

  return readdirSync(notesDirectory, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isDirectory() &&
        existsSync(join(notesDirectory, entry.name, "page.tsx")),
    )
    .map((entry) => ({
      href: `/notes/${entry.name}`,
      title: noteTitles[entry.name] ?? titleFromSlug(entry.name),
    }))
    .sort((a, b) => a.title.localeCompare(b.title));
}

export const metadata = {
  title: "Notes | Bruce Chen",
  description: "Browse all personal notes.",
};

export default function NotesPage() {
  const notes = getNotes();

  return (
    <div className="mx-auto w-full max-w-5xl py-6 md:py-10">
      <section className="mb-8">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <FileText className="h-5 w-5" />
        </div>
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Personal
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Notes</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
          All personal notes are collected here. Choose a folder below to open
          its page.
        </p>
      </section>

      <section
        aria-label="Note folders"
        className="grid gap-3"
      >
        {notes.map((note) => (
          <Link
            key={note.href}
            href={note.href}
            className="group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <Card className="flex min-h-12 flex-row items-center gap-3 px-4 py-2 transition-colors group-hover:border-primary/40 group-hover:bg-muted/40">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-primary/10 group-hover:text-primary">
                <FileText className="h-4 w-4" />
              </div>

              <CardTitle className="min-w-0 flex-1 truncate text-base">
                {note.title}
              </CardTitle>

              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </Card>
          </Link>
        ))}
      </section>
    </div>
  );
}
