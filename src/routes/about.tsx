import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mount Laverna School" },
      { name: "description", content: "Forty years of Franciscan values, modern learning, and a vibrant K-12 community." },
      { property: "og:title", content: "About Mount Laverna School" },
      { property: "og:description", content: "Founded 1985. Cambridge curriculum. Franciscan values." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Our story</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        Forty years of Franciscan values, modern learning.
      </h1>
      <div className="mt-10 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Founded in 1985 by the Franciscan Sisters, Mount Laverna began as a small primary school
            of 84 students. Today we are home to over 1,200 learners from KG through Grade 12, united
            by the simple promise of our motto: <em>Diligence Rewards</em>.
          </p>
          <p>
            Our pedagogy combines the academic rigour of the Cambridge framework with the Franciscan
            ideals of compassion, integrity, and service. Graduates leave equipped not just with strong
            transcripts but with a sense of purpose.
          </p>
          <p>
            We believe small class sizes, attentive mentorship, and a culture of inquiry create the
            conditions for every child to thrive — academically, creatively, and ethically.
          </p>
        </div>
        <ul className="space-y-4">
          {[
            ["Founded", "1985"],
            ["Curriculum", "Cambridge (CAIE)"],
            ["Students", "1,200+"],
            ["Faculty", "92, with 70% holding postgraduate degrees"],
            ["Campus", "12 acres in Greenfield"],
            ["Accreditations", "CAIE · CIS candidate"],
          ].map(([k, v]) => (
            <li key={k} className="p-5 rounded-xl bg-card border border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{k}</p>
              <p className="mt-1 text-lg">{v}</p>
            </li>
          ))}
        </ul>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          Our values
        </h2>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {[
            { t: "Compassion", b: "We treat every member of our community with kindness and respect." },
            { t: "Curiosity", b: "We ask better questions and pursue ideas with rigour and joy." },
            { t: "Service", b: "We use what we learn to make our neighbourhood and world better." },
          ].map((v) => (
            <div key={v.t} className="p-6 rounded-2xl bg-card border border-border">
              <h3 className="text-xl" style={{ fontFamily: "var(--font-display)" }}>
                {v.t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.b}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}