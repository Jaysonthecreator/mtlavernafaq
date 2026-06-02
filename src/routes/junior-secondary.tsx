import { createFileRoute, Link } from "@tanstack/react-router";
import { Beaker, Code2, Globe2, BookOpen, Users, Trophy, Languages, Calculator } from "lucide-react";

export const Route = createFileRoute("/junior-secondary")({
  head: () => ({
    meta: [
      { title: "Junior School (Grades 7–9) — Mount Laverna" },
      {
        name: "description",
        content:
          "Junior School at Mount Laverna (Grades 7–9) follows Kenya's CBC with sciences, coding, languages and leadership programmes.",
      },
      { property: "og:title", content: "Junior School at Mount Laverna" },
      {
        property: "og:description",
        content: "CBC Junior School for ages 12–14: rigorous, exploratory, and supportive.",
      },
    ],
  }),
  component: JuniorSecondaryPage,
});

const SUBJECTS = [
  { icon: BookOpen, name: "English Language & Literature", body: "CBC Junior School English with novel studies and weekly composition." },
  { icon: Calculator, name: "Mathematics", body: "Algebraic thinking, geometry, statistics and problem-solving olympiads." },
  { icon: Beaker, name: "Integrated Science", body: "Lab-based units across Biology, Chemistry and Physics." },
  { icon: Globe2, name: "Global Perspectives", body: "Research, collaboration and reasoned argument on global issues." },
  { icon: Code2, name: "Computing", body: "Python basics, design thinking and an annual app-build challenge." },
  { icon: Languages, name: "Second Language", body: "Choice of Kiswahili, French, German or Mandarin." },
  { icon: Users, name: "Humanities", body: "World history, geography and civics taught through case studies." },
  { icon: Trophy, name: "PE & Wellness", body: "Team sports, athletics, swimming and adolescent wellness sessions." },
];

const PILLARS = [
  {
    t: "Academic stretch",
    b: "Setting in Math and English ensures every student is challenged at the right level.",
  },
  {
    t: "Voice & leadership",
    b: "House captains, club leads and a Junior Council give students real responsibility.",
  },
  {
    t: "Pastoral care",
    b: "Each student has a tutor who tracks wellbeing and progress across the year.",
  },
];

function JuniorSecondaryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Grades 7–9 · Ages 12–14</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        Junior School
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        The bridge years. Students take on greater independence, deeper subject content and the
        leadership opportunities that prepare them for Senior School and beyond.
      </p>

      <section className="mt-12 grid md:grid-cols-3 gap-5">
        {PILLARS.map((p) => (
          <div key={p.t} className="p-6 rounded-2xl bg-card border border-border">
            <h3 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>{p.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          The curriculum
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Aligned to Kenya's CBC Junior School (Grades 7–9), assessed through KICD-prescribed national assessments.
        </p>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {SUBJECTS.map((s) => (
            <article key={s.name} className="p-5 rounded-2xl bg-card border border-border">
              <div
                className="w-10 h-10 rounded-lg grid place-items-center text-primary"
                style={{ background: "var(--gradient-gold)" }}
              >
                <s.icon className="w-4 h-4" />
              </div>
              <h3 className="mt-3 text-base font-medium">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="p-8 rounded-2xl bg-card border border-border">
          <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Signature programmes
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li><strong className="text-foreground">Outdoor Education Week</strong> — annual residential trip to the Rift Valley.</li>
            <li><strong className="text-foreground">Junior MUN</strong> — in-house Model UN every February.</li>
            <li><strong className="text-foreground">Maker Lab</strong> — Friday afternoon design and build sessions.</li>
            <li><strong className="text-foreground">Service Saturdays</strong> — once-a-month projects with local NGOs.</li>
          </ul>
        </div>
        <div className="rounded-2xl p-8 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Ready for the next step?
          </h3>
          <p className="mt-3 text-primary-foreground">
            Junior School applications open in September. Visit our admissions page or chat with
            Laverna AI for an instant overview.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/admissions" className="px-5 py-2.5 rounded-full font-medium text-primary" style={{ background: "var(--gradient-gold)" }}>
              Apply now
            </Link>
            <Link to="/" hash="chat" className="px-5 py-2.5 rounded-full font-medium border border-white/25 hover:bg-white/10 transition">
              Ask Laverna AI
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}