import { createFileRoute } from "@tanstack/react-router";
import {
  Cpu, Globe2, Music2, Palette, Mic2, Camera, Leaf, BookOpen,
  Users, Trophy, Activity, Waves, Bike, Goal, HeartHandshake, Languages,
} from "lucide-react";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs & Activities — Mount Laverna School" },
      { name: "description", content: "30+ co-curricular clubs and sports at Mount Laverna — robotics, MUN, choir, cricket, swimming and more." },
      { property: "og:title", content: "Clubs & Activities at Mount Laverna" },
      { property: "og:description", content: "Discover the 30+ clubs and sports at Mount Laverna School." },
    ],
  }),
  component: ClubsPage,
});

const CATEGORIES = [
  {
    name: "Academic & STEM",
    accent: "from-blue-500/15 to-blue-500/0",
    clubs: [
      { icon: Cpu, name: "Robotics Club", body: "Builds and competes in WRO and FIRST LEGO League. Meets Wed & Fri." },
      { icon: Globe2, name: "Model United Nations", body: "Conferences across India; in-house MUN every February." },
      { icon: BookOpen, name: "Quiz Club", body: "Inter-school quizzing. Past winners of the Greenfield Open Bowl." },
      { icon: Languages, name: "Debate Society", body: "British Parliamentary format. Trains for ASCEND & Frank Anthony." },
      { icon: Activity, name: "Astronomy Club", body: "Monthly stargazing nights using the school's 8-inch Dobsonian." },
    ],
  },
  {
    name: "Arts & Culture",
    accent: "from-amber-500/15 to-amber-500/0",
    clubs: [
      { icon: Music2, name: "Choir & Orchestra", body: "Performs at Founder's Day and the December Carol Service." },
      { icon: Palette, name: "Visual Arts Studio", body: "Painting, ceramics, and printmaking. Annual exhibition in March." },
      { icon: Mic2, name: "Drama Club", body: "Two productions a year — a Shakespeare and a contemporary piece." },
      { icon: Camera, name: "Film & Photography", body: "Runs the Lavernalia short film festival." },
      { icon: Languages, name: "Spanish Circle", body: "Conversational Spanish with native-speaker mentors." },
    ],
  },
  {
    name: "Sports",
    accent: "from-emerald-500/15 to-emerald-500/0",
    clubs: [
      { icon: Goal, name: "Cricket", body: "U-14 and U-17 squads. Home ground on the East Field." },
      { icon: Trophy, name: "Basketball", body: "Boys & girls teams across U-12, U-14, and U-17." },
      { icon: Waves, name: "Swimming", body: "Year-round training in the heated 25 m pool." },
      { icon: Bike, name: "Athletics & Cross-country", body: "Annual Sports Day in November and inter-school meets." },
      { icon: Activity, name: "Yoga & Wellness", body: "Mind-body sessions for Grades 6 and above." },
    ],
  },
  {
    name: "Service & Leadership",
    accent: "from-rose-500/15 to-rose-500/0",
    clubs: [
      { icon: HeartHandshake, name: "Interact Club", body: "Rotary-affiliated community service projects." },
      { icon: Leaf, name: "Eco Warriors", body: "Campus composting, tree planting, and waste audits." },
      { icon: Users, name: "Student Council", body: "Elected representation across Grades 6–12." },
      { icon: BookOpen, name: "Peer Tutoring", body: "Senior students mentor younger learners after school." },
    ],
  },
];

function ClubsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Clubs & Activities</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        Find your spark.
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        Over 30 clubs and sports run every week — built and led by students, mentored by faculty.
        Whether your child loves robots, raagas, or the rugby field, there's a home here.
      </p>

      <div className="mt-14 space-y-14">
        {CATEGORIES.map((cat) => (
          <section key={cat.name}>
            <div className="flex items-baseline justify-between border-b border-border pb-3">
              <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
                {cat.name}
              </h2>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">
                {cat.clubs.length} clubs
              </span>
            </div>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {cat.clubs.map((c) => (
                <article
                  key={c.name}
                  className={`p-6 rounded-2xl bg-gradient-to-br ${cat.accent} border border-border hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition`}
                >
                  <div
                    className="w-11 h-11 rounded-xl grid place-items-center text-primary"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <c.icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}