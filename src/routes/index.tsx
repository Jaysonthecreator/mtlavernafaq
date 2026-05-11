import { createFileRoute } from "@tanstack/react-router";
import { Chatbot } from "@/components/Chatbot";
import { GraduationCap, BookOpen, Users, Bus, Trophy, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mount Laverna School — Learn. Lead. Serve." },
      {
        name: "description",
        content:
          "Mount Laverna School is a co-educational K-12 institution. Ask our AI assistant about admissions, fees, curriculum, uniforms, transport, and more — 24/7.",
      },
      { property: "og:title", content: "Mount Laverna School" },
      { property: "og:description", content: "Learn. Lead. Serve. — Cambridge-aligned K-12 education." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-3">
            <div
              className="grid place-items-center w-10 h-10 rounded-xl text-primary-foreground"
              style={{ background: "var(--gradient-hero)" }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="leading-tight">
              <p className="font-display text-lg" style={{ fontFamily: "var(--font-display)" }}>
                Mount Laverna
              </p>
              <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">School</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#highlights" className="hover:text-primary transition">Highlights</a>
            <a href="#chat" className="hover:text-primary transition">Ask AI</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a
            href="#chat"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-foreground hover:opacity-90 transition"
            style={{ background: "var(--gradient-hero)" }}
          >
            Ask Laverna AI
          </a>
        </div>
      </header>

      {/* Hero + Chatbot */}
      <section
        className="relative overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.78 0.14 80 / 0.4), transparent 40%), radial-gradient(circle at 80% 60%, oklch(0.6 0.2 290 / 0.3), transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="text-primary-foreground">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Est. 1985 · K–12
            </span>
            <h1
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.05]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Learn. <span style={{ color: "var(--gold)" }}>Lead.</span> Serve.
            </h1>
            <p className="mt-6 text-lg text-primary-foreground/80 max-w-xl">
              A Cambridge-aligned co-educational school nurturing curious minds and compassionate
              hearts. Ask our AI assistant anything — admissions, fees, transport, activities — any
              time, day or night.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#chat"
                className="px-6 py-3 rounded-full font-medium text-primary"
                style={{ background: "var(--gradient-gold)" }}
              >
                Ask the Assistant →
              </a>
              <a
                href="#about"
                className="px-6 py-3 rounded-full font-medium border border-white/20 text-primary-foreground hover:bg-white/10 transition"
              >
                Discover the School
              </a>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "1,200+", v: "Students" },
                { k: "40", v: "Years legacy" },
                { k: "30+", v: "Clubs & sports" },
              ].map((s) => (
                <div key={s.v}>
                  <dt
                    className="text-3xl"
                    style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
                  >
                    {s.k}
                  </dt>
                  <dd className="text-xs uppercase tracking-wider text-primary-foreground/70">
                    {s.v}
                  </dd>
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
      <section id="highlights" className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Why Mount Laverna</p>
          <h2 className="mt-3 text-4xl md:text-5xl" style={{ fontFamily: "var(--font-display)" }}>
            An education built on character & curiosity.
          </h2>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { icon: BookOpen, title: "Cambridge curriculum", body: "Internationally benchmarked learning from KG to Grade 12." },
            { icon: Trophy, title: "30+ clubs & sports", body: "From robotics and MUN to cricket, swimming, and choir." },
            { icon: Users, title: "Small class sizes", body: "Personal mentorship that lets every student be seen." },
            { icon: Bus, title: "Safe transport", body: "GPS-tracked buses across 18 routes, monitored daily." },
          ].map((c) => (
            <article
              key={c.title}
              className="p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition"
            >
              <div
                className="w-11 h-11 rounded-xl grid place-items-center text-primary"
                style={{ background: "var(--gradient-gold)" }}
              >
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section id="about" className="bg-secondary/60 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Our story</p>
            <h2 className="mt-3 text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Forty years of Franciscan values, modern learning.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 1985, Mount Laverna combines academic rigour with the Franciscan ideals of
              compassion, integrity, and service. Our graduates leave equipped not just with strong
              transcripts, but with a sense of purpose.
            </p>
          </div>
          <ul className="grid gap-4">
            {[
              ["Admissions open", "Sept 1 – Jan 31 each year for the August intake."],
              ["School hours", "Mon–Fri 8:00 AM – 3:15 PM. Office 8 AM – 5 PM."],
              ["Signature events", "Founder's Day, Sports Day, and Lavernalia cultural fest."],
            ].map(([t, b]) => (
              <li key={t} className="p-5 rounded-xl bg-card border border-border">
                <p className="font-medium">{t}</p>
                <p className="text-sm text-muted-foreground mt-1">{b}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, title: "Visit", body: "14 Hillview Avenue, Greenfield" },
            { icon: Phone, title: "Call", body: "+91 80 4567 8900" },
            { icon: Mail, title: "Write", body: "info@mountlaverna.edu" },
          ].map((c) => (
            <div key={c.title} className="p-6 rounded-2xl bg-card border border-border">
              <c.icon className="w-5 h-5 text-primary" />
              <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                {c.title}
              </p>
              <p className="mt-1 text-lg">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Mount Laverna School. All rights reserved.</p>
          <p>Learn. Lead. Serve.</p>
        </div>
      </footer>
    </div>
  );
}
