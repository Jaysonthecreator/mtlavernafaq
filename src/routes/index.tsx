import { createFileRoute, Link } from "@tanstack/react-router";
import { Chatbot } from "@/components/Chatbot";
import { BookOpen, Users, Bus, Trophy, ArrowRight } from "lucide-react";
import mlsLogo from "@/assets/mls-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mount Laverna School — Learn. Lead. Serve." },
      {
        name: "description",
        content:
          "Mount Laverna School is a CBC co-educational K-12 school. Explore academics, admissions, clubs, and chat with our 24/7 AI assistant.",
      },
      { property: "og:title", content: "Mount Laverna School" },
      {
        property: "og:description",
        content: "CBC-based K-12 education. Ask our AI assistant anything, anytime.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero + Chatbot */}
      <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 80 / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.6 0.2 290 / 0.3), transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="text-primary-foreground">
            <div className="flex items-center gap-4">
              <img
                src={mlsLogo}
                alt="Mount Laverna School crest"
                className="w-20 h-20 object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
              />
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Est. 1985 · K–12
              </span>
            </div>
            <h1
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Learn. <span style={{ color: "var(--gold)" }}>Lead.</span> Serve.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              A CBC co-educational school nurturing curious minds and compassionate
              hearts. Explore our academics, clubs, and admissions — or just ask our AI anything.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="px-6 py-3 rounded-full font-medium text-primary inline-flex items-center gap-2"
                style={{ background: "var(--gradient-gold)" }}
              >
                Apply for Admission <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/clubs"
                className="px-6 py-3 rounded-full font-medium border border-white/20 text-primary-foreground hover:bg-white/10 transition"
              >
                Explore Clubs
              </Link>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "1,200+", v: "Students" },
                { k: "40", v: "Years legacy" },
                { k: "30+", v: "Clubs & sports" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>
                    {s.k}
                  </dt>
                  <dd className="text-xs uppercase tracking-wider text-primary-foreground/70">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div id="chat" className="lg:pl-6">
            <Chatbot />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Why Mount Laverna</p>
          <h2 className="mt-3 text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            An education built on character & curiosity.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: BookOpen, title: "CBC curriculum", body: "Competency-Based Curriculum learning from KG to Senior School.", to: "/academics" },
            { icon: Trophy, title: "30+ clubs & sports", body: "From robotics and MUN to cricket, swimming, and choir.", to: "/clubs" },
            { icon: Users, title: "Small class sizes", body: "Personal mentorship that lets every student be seen.", to: "/about" },
            { icon: Bus, title: "Safe transport", body: "GPS-tracked buses across 18 routes, monitored daily.", to: "/contact" },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition block"
            >
              <div
                className="w-11 h-11 rounded-xl grid place-items-center text-primary"
                style={{ background: "var(--gradient-gold)" }}
              >
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}