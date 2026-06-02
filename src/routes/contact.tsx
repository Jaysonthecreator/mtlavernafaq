import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mount Laverna School" },
      { name: "description", content: "Visit, call, or write to Mount Laverna School. Office hours, address, and admissions contact." },
      { property: "og:title", content: "Contact Mount Laverna School" },
      { property: "og:description", content: "Get in touch with our admissions and front office team." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <p className="text-xs uppercase tracking-[0.25em] text-[var(--gold)]">Contact</p>
      <h1 className="mt-3 text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
        We'd love to hear from you.
      </h1>
      <p className="mt-5 text-muted-foreground text-lg max-w-2xl">
        For instant answers about admissions, fees, transport, or uniforms, our AI assistant is
        available 24/7. For everything else, our team is here Monday to Friday.
      </p>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: MapPin, t: "Visit", b: "P.O. Box 6514-00300 Nairobi" },
          { icon: Phone, t: "Call", b: "0725500584" },
          { icon: Mail, t: "Write", b: "mtlaverna@yahoo.com" },
          { icon: Clock, t: "Office hours", b: "Mon–Fri · 8 AM – 5 PM" },
        ].map((c) => (
          <div key={c.t} className="p-6 rounded-2xl bg-card border border-border">
            <c.icon className="w-5 h-5 text-primary" />
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">{c.t}</p>
            <p className="mt-1 text-lg">{c.b}</p>
          </div>
        ))}
      </div>

      <section className="mt-16 grid lg:grid-cols-[2fr_1fr] gap-8">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! We'll be in touch within 2 working days.");
          }}
          className="p-8 rounded-2xl bg-card border border-border space-y-4"
        >
          <h2 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Send us a message
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Full name" className="px-4 py-3 rounded-lg bg-muted border border-transparent focus:border-ring focus:outline-none text-sm" />
            <input required type="email" placeholder="Email" className="px-4 py-3 rounded-lg bg-muted border border-transparent focus:border-ring focus:outline-none text-sm" />
          </div>
          <input placeholder="Subject" className="w-full px-4 py-3 rounded-lg bg-muted border border-transparent focus:border-ring focus:outline-none text-sm" />
          <textarea required rows={5} placeholder="How can we help?" className="w-full px-4 py-3 rounded-lg bg-muted border border-transparent focus:border-ring focus:outline-none text-sm" />
          <button type="submit" className="px-6 py-3 rounded-full font-medium text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
            Send message
          </button>
        </form>
        <aside className="rounded-2xl p-8 text-primary-foreground" style={{ background: "var(--gradient-hero)" }}>
          <h3 className="text-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Need an answer now?
          </h3>
          <p className="mt-3 text-primary-foreground">
            Our AI assistant handles common questions instantly — admissions deadlines, fee details,
            transport routes and more.
          </p>
          <Link
            to="/"
            hash="chat"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-primary"
            style={{ background: "var(--gradient-gold)" }}
          >
            Open the chatbot
          </Link>
        </aside>
      </section>
    </div>
  );
}