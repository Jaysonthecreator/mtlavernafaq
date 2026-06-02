import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Palette, Users, Sparkles, Sun, Calculator } from "lucide-react";

export const Route = createFileRoute("/primary")({
  head: () => ({
    meta: [
      { title: "Primary School (Grades 1–5) — Mount Laverna School" },
      {
        name: "description",
        content:
          "Mount Laverna's Primary School (Grades 1–6) follows the CBC curriculum with hands-on inquiry, music, art and outdoor learning.",
      },
      { property: "og:title", content: "Primary School at Mount Laverna" },
      { property: "og:description", content: "CBC Primary, ages 6–11. Small classes, big imaginations." },
    ],
  }),
  component: PrimaryPage,
});

const SUBJECTS = [
  { icon: BookOpen, name: "English", body: "Phonics, guided reading, journaling and weekly storytelling sessions." },
  { icon: Calculator, name: "Mathematics", body: "CBC Primary Maths with manipulatives, puzzles and Mathletics." },
  { icon: Sparkles, name: "Science", body: "Inquiry-led units in living things, materials, forces and the Earth." },
  { icon: Sun, name: "Social Studies", body: "Local history, geography of India, and global citizenship." },
  { icon: Palette, name: "Arts & Music", body: "Visual art, choir, recorder, and our own Junior Drama Festival." },
  { icon: Users, name: "Life Skills", body: "Mindfulness, gratitude circles and weekly community-service projects." },
];

const DAY = [
  ["8:00 AM", "Morning assembly & circle time"],
  ["8:30 AM", "Period 1 — Core literacy or numeracy"],
  ["10:30 AM", "Healthy snack & outdoor play"],
  ["11:00 AM", "Inquiry block — science or social studies"],
  ["12:30 PM", "Lunch in the dining hall"],
  ["1:30 PM", "Specialist period — art, music or PE"],
  ["2:45 PM", "Reflection journal & dismissal"],
];

function PrimaryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Grades 1–6 · Ages 6–11</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        Primary School
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        These are the years curiosity takes root. Our Primary programme keeps class sizes small,
        days well-paced, and learning rich with stories, experiments and play.
      </p>

      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        {[
          ["22", "Max class size"],
          ["2", "Teachers per class"],
          ["100%", "CBC-aligned"],
        ].map(([k, v]) => (
          <div key={v} className="p-5 rounded-2xl bg-card border border-border">
            <p className="text-3xl" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>
              {k}
            </p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</p>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          What we learn
        </h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBJECTS.map((s) => (
            <article key={s.name} className="p-6 rounded-2xl bg-card border border-border">
              <div
                className="w-11 h-11 rounded-xl grid place-items-center text-primary"
                style={{ background: "var(--gradient-gold)" }}
              >
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg font-medium">{s.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            A day in Primary
          </h2>
          <ul className="mt-6 space-y-2">
            {DAY.map(([t, b]) => (
              <li key={t} className="flex gap-4 p-4 rounded-xl bg-card border border-border">
                <span className="text-sm font-medium text-[var(--gold)] w-20 shrink-0">{t}</span>
                <span className="text-sm text-foreground">{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl p-8 text-primary-foreground self-start" style={{ background: "var(--gradient-hero)" }}>
          <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Beyond the timetable
          </h3>
          <ul className="mt-4 space-y-2 text-primary-foreground text-sm leading-relaxed">
            <li>• Weekly nature walks on the East Field</li>
            <li>• Annual Story Week with visiting authors</li>
            <li>• Junior Sports Day in November</li>
            <li>• Buddy programme with Grade 9 mentors</li>
            <li>• Two parent-teacher conferences per term</li>
          </ul>
          <Link
            to="/admissions"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-primary"
            style={{ background: "var(--gradient-gold)" }}
          >
            Apply to Primary
          </Link>
        </div>
      </section>
    </div>
  );
}