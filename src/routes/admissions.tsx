import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions — Mount Laverna School" },
      { name: "description", content: "Application process, fee structure, and key dates for joining Mount Laverna School." },
      { property: "og:title", content: "Admissions at Mount Laverna" },
      { property: "og:description", content: "Apply between September 1 and January 31 for the August intake." },
    ],
  }),
  component: AdmissionsPage,
});

const STEPS = [
  ["1. Enquire", "Submit the online enquiry form or visit the front office for a campus tour."],
  ["2. Apply", "Complete the application form along with previous report cards and a KES 2,000 application fee."],
  ["3. Assessment", "Age-appropriate assessment and a parent–child interaction with the Head of School."],
  ["4. Offer", "Successful applicants receive an offer letter within two weeks."],
  ["5. Enrol", "Confirm your seat by paying the term fee within 14 days of the offer."],
];

const FEES = [
  ["Kindergarten (PP1–PP2)", "KES 80,000 / year"],
  ["Lower Primary (1–3)", "KES 100,000 / year"],
  ["Upper Primary (4–6)", "KES 120,000 / year"],
  ["Junior School (7–9)", "KES 140,000 / year"],
  ["Senior School (10–12)", "KES 160,000 / year"],
];

function AdmissionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Admissions 2026–27</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        Begin your Laverna journey.
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        Applications open <strong>September 1</strong> and close <strong>January 31</strong> each
        year for the August intake. We welcome students from all faiths and backgrounds.
      </p>

      <section className="mt-14">
        <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
          The application process
        </h2>
        <ol className="mt-6 space-y-3">
          {STEPS.map(([t, b]) => (
            <li key={t} className="p-5 rounded-xl bg-card border border-border flex gap-4">
              <CheckCircle2 className="w-5 h-5 text-[var(--gold)] mt-1 shrink-0" />
              <div>
                <p className="font-medium">{t}</p>
                <p className="text-sm text-muted-foreground mt-1">{b}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16 grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl" style={{ fontFamily: "var(--font-display)" }}>
            Fee structure
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Tuition is billed in three terms. Transport, uniforms, and meals are billed separately.
          </p>
          <div className="mt-5 rounded-2xl border border-border overflow-hidden">
            {FEES.map(([g, f], i) => (
              <div
                key={g}
                className={`flex justify-between px-5 py-4 ${i % 2 === 0 ? "bg-card" : "bg-muted/40"}`}
              >
                <span>{g}</span>
                <span className="font-medium">{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl p-8 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Have questions?
          </h3>
          <p className="mt-3 text-primary-foreground/80">
            Our AI assistant can answer most admissions questions instantly — from required documents
            to scholarship details and uniform pricing.
          </p>
          <Link
            to="/"
            hash="chat"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-primary"
            style={{ background: "var(--gradient-gold)" }}
          >
            Ask Laverna AI
          </Link>
        </div>
      </section>
    </div>
  );
}