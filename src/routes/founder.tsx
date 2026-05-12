import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Our Founder, Mother Mary Kelvin — Mount Laverna School" },
      {
        name: "description",
        content:
          "Mother Mary Kelvin founded Mount Laverna School in 1985 with a vision of compassionate, rigorous education rooted in Franciscan values.",
      },
      { property: "og:title", content: "Mother Mary Kelvin — Founder of Mount Laverna" },
      {
        property: "og:description",
        content: "The story and legacy of Mother Mary Kelvin, foundress of Mount Laverna School.",
      },
    ],
  }),
  component: FounderPage,
});

const TIMELINE = [
  ["1932", "Born in Mangalore to a family of teachers and farmers."],
  ["1954", "Joins the Franciscan Sisters of St. Clare; takes the name Mary Kelvin."],
  ["1961", "Earns a Bachelor of Education from Bangalore University."],
  ["1972", "Begins a decade of teaching in rural mission schools across South India."],
  ["1985", "Founds Mount Laverna School with 84 students in a rented bungalow in Greenfield."],
  ["1992", "Moves the school to its present 12-acre Hillview campus."],
  ["2003", "Steps back from daily administration but continues mentoring teachers until 2015."],
  ["2019", "Passes away peacefully at age 87. Her motto, 'Diligence Rewards', endures."],
];

function FounderPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Our founder</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        Mother Mary Kelvin
      </h1>
      <p className="mt-3 text-xl text-muted-foreground italic" style={{ fontFamily: "var(--font-display)" }}>
        Foundress of Mount Laverna School · 1932 – 2019
      </p>

      <div className="mt-12 grid lg:grid-cols-[1fr_2fr] gap-10">
        <div className="space-y-5">
          <div
            className="aspect-[3/4] rounded-3xl border border-border grid place-items-center text-primary-foreground"
            style={{ background: "var(--gradient-hero)" }}
          >
            <div className="text-center px-6">
              <p className="text-7xl" style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}>
                MK
              </p>
              <p className="mt-3 text-sm uppercase tracking-[0.25em] opacity-80">In loving memory</p>
            </div>
          </div>
          <div className="p-5 rounded-xl bg-card border border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Order</p>
            <p className="mt-1">Franciscan Sisters of St. Clare</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Education</p>
            <p className="mt-1">B.Ed., Bangalore University, 1961</p>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">Honours</p>
            <p className="mt-1">National Teacher Award, 1998</p>
          </div>
        </div>

        <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
          <p>
            Mount Laverna School owes its existence to the quiet conviction of one woman:{" "}
            <strong className="text-foreground">Mother Mary Kelvin</strong>. Born in Mangalore in 1932
            and called to religious life as a young woman, she spent more than two decades teaching in
            rural mission schools before founding Laverna in 1985.
          </p>
          <p>
            Her vision was simple but radical for its time: a school that took academics seriously
            <em> and</em> took children seriously. Where rigour and tenderness could share a
            classroom. Where every child — regardless of faith, background or ability — would be
            known by name.
          </p>

          <figure
            className="my-8 p-8 rounded-2xl border-l-4"
            style={{ borderColor: "var(--gold)", background: "color-mix(in oklab, var(--gold) 10%, var(--card))" }}
          >
            <Quote className="w-6 h-6 text-[var(--gold)]" />
            <blockquote
              className="mt-3 text-2xl text-foreground leading-snug"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "Teach a child to think clearly and love deeply, and you have given the world a citizen."
            </blockquote>
            <figcaption className="mt-3 text-sm text-muted-foreground">
              — Mother Mary Kelvin, opening address, 1985
            </figcaption>
          </figure>

          <p>
            She began with 84 students in a rented bungalow, three teachers and one second-hand
            chalkboard. By the time she stepped back from daily administration in 2003, Laverna had
            grown into one of Greenfield's most respected schools — and one of the very few that still
            knew every student by their first name.
          </p>
          <p>
            Mother Kelvin passed away in 2019, but her motto — <em>Diligence Rewards</em> — is
            engraved over our main gate, and her standards of warmth and discipline continue to shape
            every classroom on campus.
          </p>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          A life in dates
        </h2>
        <ol className="mt-8 relative border-l border-border pl-6 space-y-6">
          {TIMELINE.map(([year, body]) => (
            <li key={year} className="relative">
              <span
                className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full"
                style={{ background: "var(--gold)" }}
              />
              <p className="text-sm uppercase tracking-widest text-[var(--gold)]">{year}</p>
              <p className="mt-1 text-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="mt-20 rounded-3xl p-10 text-primary-foreground"
        style={{ background: "var(--gradient-hero)" }}
      >
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          Continue the journey
        </h2>
        <p className="mt-3 max-w-2xl text-primary-foreground/80">
          Explore how Mother Kelvin's vision lives on in our Primary and Junior Secondary sections.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/primary" className="px-5 py-2.5 rounded-full font-medium text-primary" style={{ background: "var(--gradient-gold)" }}>
            Primary School
          </Link>
          <Link to="/junior-secondary" className="px-5 py-2.5 rounded-full font-medium border border-white/25 hover:bg-white/10 transition">
            Junior Secondary
          </Link>
        </div>
      </section>
    </div>
  );
}