import { createFileRoute } from "@tanstack/react-router";
import {
  Music2, Palette, Mic2, Leaf, Languages, Utensils,
  Sparkles, Scissors, Newspaper, Dumbbell,
  Goal, Trophy, Waves, Crown, Target, CircleDot, Hand,
} from "lucide-react";

export const Route = createFileRoute("/clubs")({
  head: () => ({
    meta: [
      { title: "Clubs & Academies — Mount Laverna School" },
      { name: "description", content: "Co-curricular clubs and sports academies at Mount Laverna — art, music, drama, dance, ballet, cooking, fashion & design, French, plus football, handball, volleyball, skating, tennis, badminton, table tennis, chess and archery." },
      { property: "og:title", content: "Clubs & Academies at Mount Laverna" },
      { property: "og:description", content: "Explore Mount Laverna's clubs and sports academies." },
    ],
  }),
  component: ClubsPage,
});

const CATEGORIES = [
  {
    name: "Arts & Culture",
    accent: "from-amber-500/15 to-amber-500/0",
    clubs: [
      { icon: Palette, name: "Art Club", body: "Painting, drawing, and mixed-media projects. Annual exhibition in March." },
      { icon: Music2, name: "Music Club", body: "Vocal and instrumental training; performs at Founder's Day and end-of-year concerts." },
      { icon: Mic2, name: "Drama Club", body: "Two productions a year — stage acting, voice, and improvisation." },
      { icon: Sparkles, name: "Dancing Club", body: "Contemporary, hip-hop, and traditional African dance choreography." },
      { icon: Crown, name: "Ballet Club", body: "Classical ballet training with graded showcases each term." },
      { icon: Scissors, name: "Fashion & Design", body: "Sketching, textiles, and styling — culminates in the annual fashion showcase." },
      { icon: Languages, name: "French Club", body: "Conversational French with native-speaker mentors. The only language club on offer." },
    ],
  },
  {
    name: "Lifestyle & Wellness",
    accent: "from-rose-500/15 to-rose-500/0",
    clubs: [
      { icon: Leaf, name: "Environmental Club", body: "Campus composting, tree planting, and waste audits." },
      { icon: Utensils, name: "Cooking Club", body: "Hands-on culinary sessions covering Kenyan and international cuisine." },
      { icon: Dumbbell, name: "Gymnastics Club", body: "Floor work, balance, and tumbling. Beginner to intermediate levels." },
      { icon: Newspaper, name: "Journalism Club", body: "Runs the school newsletter and student-led reporting projects." },
    ],
  },
];

const ACADEMIES = [
  {
    name: "Sports Academies",
    accent: "from-emerald-500/15 to-emerald-500/0",
    clubs: [
      { icon: Goal, name: "Football Academy", body: "Structured coaching across age groups with inter-school fixtures." },
      { icon: Hand, name: "Handball Academy", body: "Team play, conditioning, and tournament preparation." },
      { icon: Trophy, name: "Volleyball Academy", body: "Boys' and girls' squads training year-round." },
      { icon: Waves, name: "Skating Academy", body: "Roller-skating fundamentals and speed training." },
      { icon: CircleDot, name: "Tennis Academy", body: "Stroke technique, footwork, and match play on campus courts." },
      { icon: CircleDot, name: "Badminton Academy", body: "Singles and doubles training for all skill levels." },
      { icon: CircleDot, name: "Table Tennis Academy", body: "Spin, speed, and tactics — inter-house leagues each term." },
      { icon: Crown, name: "Chess Academy", body: "FIDE-style coaching, rated tournaments, and puzzle clinics." },
      { icon: Target, name: "Archery Academy", body: "Recurve archery with certified instructors on the East Field." },
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
        Clubs and sports academies run every week — led by students, mentored by faculty.
        From art and ballet to football and archery, every learner finds a home here.
      </p>

      <div className="mt-14 space-y-14">
        {[...CATEGORIES, ...ACADEMIES].map((cat) => (
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