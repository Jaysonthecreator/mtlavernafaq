import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Beaker, Globe2 } from "lucide-react";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Mount Laverna School" },
      { name: "description", content: "CBC curriculum from Kindergarten through Senior School at Mount Laverna School." },
      { property: "og:title", content: "Academics at Mount Laverna" },
      { property: "og:description", content: "From foundational play-based learning to Senior School under the CBC." },
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
    grade: "Lower Primary (Grades 1–3)",
    range: "Ages 6–8",
    body: "CBC foundational learning with a strong emphasis on literacy, numeracy, and inquiry.",
  },
  {
    icon: Beaker,
    grade: "Upper Primary (Grades 4–6)",
    range: "Ages 9–11",
    body: "CBC upper primary with science, agriculture, creative arts, and digital literacy.",
  },
  {
    icon: Globe2,
    grade: "Junior School (Grades 7–9)",
    range: "Ages 12–14",
    body: "CBC junior school across the learning areas — sciences, humanities, languages, and pre-technical studies.",
  },
  {
    icon: GraduationCap,
    grade: "Senior School (Grades 10–12)",
    range: "Ages 15–17",
    body: "CBC senior school pathways: STEM, Arts & Sports Science, and Social Sciences.",
  },
];

function AcademicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Academics</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        A CBC education, KG to Senior School.
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        Our curriculum follows Kenya's Competency-Based Curriculum (CBC) — preparing students with
        the values, skills, and competencies for life and further learning.
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
        <p className="mt-3 max-w-2xl text-primary-foreground">
          Field trips, Model UN, science fairs, and an annual research symposium help students apply
          their learning to real-world problems.
        </p>
      </section>
    </div>
  );
}