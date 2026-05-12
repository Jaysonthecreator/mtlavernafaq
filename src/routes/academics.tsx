import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Beaker, Globe2 } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Mount Laverna School" },
      { name: "description", content: "Cambridge-aligned curriculum from Kindergarten through Grade 12 at Mount Laverna School." },
      { property: "og:title", content: "Academics at Mount Laverna" },
      { property: "og:description", content: "From foundational play-based learning to AS/A Levels." },
    ],
  }),
  component: AcademicsPage,
});

const STAGES = [
  {
    icon: BookOpen,
    grade: "Kindergarten",
    range: "Ages 3–5",
    body: "Play-based learning, language foundations, and early numeracy in small, nurturing groups.",
  },
  {
    icon: GraduationCap,
    grade: "Primary (Grades 1–5)",
    range: "Ages 6–10",
    body: "Cambridge Primary curriculum with a strong emphasis on literacy, mathematics, and inquiry.",
  },
  {
    icon: Beaker,
    grade: "Lower Secondary (Grades 6–8)",
    range: "Ages 11–13",
    body: "Cambridge Lower Secondary with science labs, coding, and second-language electives.",
  },
  {
    icon: Globe2,
    grade: "IGCSE (Grades 9–10)",
    range: "Ages 14–15",
    body: "Cambridge IGCSE pathway across 18 subjects including the sciences, humanities, and arts.",
  },
  {
    icon: GraduationCap,
    grade: "AS / A Levels (Grades 11–12)",
    range: "Ages 16–18",
    body: "Specialised AS/A Level streams in Sciences, Commerce, and Humanities with university counselling.",
  },
];

function AcademicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Academics</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        A Cambridge education, KG to Grade 12.
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        Our curriculum is internationally benchmarked and locally rooted — preparing students for the
        world's leading universities while keeping their feet on the ground.
      </p>

      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {STAGES.map((s) => (
          <article key={s.grade} className="p-6 rounded-2xl bg-card border border-border">
            <div
              className="w-11 h-11 rounded-xl grid place-items-center text-primary"
              style={{ background: "var(--gradient-gold)" }}
            >
              <s.icon className="w-5 h-5" />
            </div>
            <h2 className="mt-4 text-2xl" style={{ fontFamily: "var(--font-display)" }}>
              {s.grade}
            </h2>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.range}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-3xl p-10 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          Beyond the classroom
        </h2>
        <p className="mt-3 max-w-2xl text-primary-foreground/80">
          Field trips, Model UN, science fairs, and an annual research symposium help students apply
          their learning to real-world problems.
        </p>
      </section>
    </div>
  );
}