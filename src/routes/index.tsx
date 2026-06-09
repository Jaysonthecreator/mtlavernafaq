import { createFileRoute, Link } from "@tanstack/react-router";
import { Chatbot } from "@/components/Chatbot";
import { BookOpen, Users, Bus, Trophy, ArrowRight, Sparkles } from "lucide-react";
import mlsLogo from "@/assets/mls-logo.png";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

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
      <CursorBlob />
      <Hero />
      <Marquee />
      <Manifesto />
      <Pillars />
      <ChatSection />
      <BigCTA />
    </>
  );
}

/* -------- Custom cursor blob (desktop only) -------- */
function CursorBlob() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 50, damping: 20, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 50, damping: 20, mass: 0.8 });
  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX - 120);
      y.set(e.clientY - 120);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);
  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy, willChange: "transform" }}
      className="pointer-events-none fixed top-0 left-0 z-[1] hidden md:block w-[240px] h-[240px] rounded-full blur-3xl opacity-60"
    >
      <div className="w-full h-full rounded-full" style={{ background: "radial-gradient(circle, var(--gold), transparent 65%)" }} />
    </motion.div>
  );
}

/* -------- Hero with parallax + magnetic CTA -------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, oklch(0.82 0.14 85 / 0.45), transparent 45%), radial-gradient(circle at 85% 70%, oklch(0.45 0.1 265 / 0.4), transparent 50%)",
        }} />
      <motion.div style={{ y, opacity }} className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-10"
        >
          <img src={mlsLogo} alt="Mount Laverna School crest" className="w-16 h-16 object-contain drop-shadow-2xl" />
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs uppercase tracking-[0.25em] text-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]" /> Est. 1985 · CBC · K–12
          </span>
        </motion.div>

        <h1 className="font-medium leading-[0.9] tracking-tight text-foreground" style={{ fontFamily: "var(--font-display)" }}>
          <Reveal delay={0.1}><span className="block text-[18vw] md:text-[12vw] lg:text-[10vw]">Learn.</span></Reveal>
          <Reveal delay={0.25}><span className="block text-[18vw] md:text-[12vw] lg:text-[10vw]" style={{ color: "var(--gold)", fontStyle: "italic" }}>Lead.</span></Reveal>
          <Reveal delay={0.4}><span className="block text-[18vw] md:text-[12vw] lg:text-[10vw]">Serve.</span></Reveal>
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 max-w-xl text-lg text-foreground/90"
        >
          A CBC co-educational school in Nairobi nurturing curious minds and compassionate hearts. Built for tomorrow, rooted in character.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <MagneticLink to="/admissions" variant="gold">
            Apply for Admission <ArrowRight className="w-4 h-4" />
          </MagneticLink>
          <MagneticLink to="/clubs" variant="ghost">Explore Clubs</MagneticLink>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground/70 text-[10px] tracking-[0.4em] uppercase"
      >
        Scroll ↓
      </motion.div>
    </section>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function MagneticLink({ to, children, variant }: { to: string; children: React.ReactNode; variant: "gold" | "ghost" }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const onMove = (e: React.MouseEvent) => {
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * 0.3);
    y.set((e.clientY - (r.top + r.height / 2)) * 0.3);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  const base = "px-7 py-4 rounded-full font-medium inline-flex items-center gap-2 text-sm uppercase tracking-wider transition";
  const styles = variant === "gold"
    ? "text-primary-foreground"
    : "border border-white/25 text-foreground hover:bg-white/10";
  return (
    <motion.div style={{ x: sx, y: sy }}>
      <Link
        ref={ref}
        to={to}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`${base} ${styles}`}
        style={variant === "gold" ? { background: "var(--gradient-gold)" } : undefined}
      >
        {children}
      </Link>
    </motion.div>
  );
}

/* -------- Infinite marquee -------- */
function Marquee() {
  const items = ["CBC Curriculum", "★", "Founded 1985", "★", "30+ Clubs", "★", "Nairobi", "★", "K–12", "★", "Learn. Lead. Serve.", "★"];
  return (
    <section className="border-y border-border py-6 overflow-hidden bg-background">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items, ...items].map((t, i) => (
          <span key={i} className="text-3xl md:text-5xl font-medium text-foreground/80" style={{ fontFamily: "var(--font-display)" }}>
            {t}
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* -------- Manifesto with line-by-line reveal -------- */
function Manifesto() {
  const lines = [
    "We don't just teach.",
    "We grow leaders.",
    "We build character.",
    "We light up curiosity.",
  ];
  return (
    <section className="max-w-6xl mx-auto px-6 py-32 md:py-48">
      <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-10">// Manifesto</p>
      <div className="space-y-2">
        {lines.map((line, i) => (
          <motion.h2
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-8xl leading-[1.05]"
            style={{ fontFamily: "var(--font-display)", fontStyle: i % 2 ? "italic" : "normal", color: i % 2 ? "var(--gold)" : undefined }}
          >
            {line}
          </motion.h2>
        ))}
      </div>
    </section>
  );
}

/* -------- Pillars / feature cards with hover lift -------- */
function Pillars() {
  const items = [
    { icon: BookOpen, num: "01", title: "CBC curriculum", body: "Competency-Based learning from KG to Senior School — the only path we offer, taught with depth.", to: "/academics" },
    { icon: Trophy, num: "02", title: "30+ clubs & academies", body: "Football, chess, ballet, fashion, drama, French and more. Find your thing.", to: "/clubs" },
    { icon: Users, num: "03", title: "Small class sizes", body: "Personal mentorship where every student is seen, heard, and known.", to: "/about" },
    { icon: Bus, num: "04", title: "Safe transport", body: "GPS-tracked buses on 18 Nairobi routes, monitored every trip.", to: "/contact" },
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-3">// What we do</p>
          <h2 className="text-5xl md:text-6xl max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Four pillars. <em style={{ color: "var(--gold)" }}>One school.</em>
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
          >
            <Link
              to={it.to}
              className="group block p-6 h-full rounded-3xl bg-card border border-border hover:border-[var(--gold)] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-start justify-between">
                <span className="text-xs tracking-widest text-muted-foreground">{it.num}</span>
                <it.icon className="w-5 h-5 text-[var(--gold)] group-hover:rotate-12 transition-transform duration-500" />
              </div>
              <h3 className="mt-12 text-2xl" style={{ fontFamily: "var(--font-display)" }}>{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.body}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[var(--gold)] opacity-0 group-hover:opacity-100 transition">
                Discover <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* -------- Chat section -------- */
function ChatSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.4em] text-[var(--gold)] mb-4 inline-flex items-center gap-2">
          <Sparkles className="w-3 h-3" /> Ask anything, anytime
        </p>
        <h2 className="text-5xl md:text-6xl" style={{ fontFamily: "var(--font-display)" }}>
          Meet the <em style={{ color: "var(--gold)" }}>Laverna Assistant.</em>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-md">
          Fees, uniforms, admissions, transport, the Mzizi portal — get answers in seconds. Or just ask for homework help.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
        id="chat"
      >
        <Chatbot />
      </motion.div>
    </section>
  );
}

/* -------- Big CTA -------- */
function BigCTA() {
  return (
    <section className="relative overflow-hidden py-32 md:py-48" style={{ background: "var(--gradient-hero)" }}>
      <div className="max-w-7xl mx-auto px-6 text-center text-foreground">
        <motion.h2
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-6xl md:text-8xl lg:text-9xl leading-[0.95]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to <em style={{ color: "var(--gold)" }}>join us?</em>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          <MagneticLink to="/admissions" variant="gold">Start Application <ArrowRight className="w-4 h-4" /></MagneticLink>
          <MagneticLink to="/contact" variant="ghost">Talk to us</MagneticLink>
        </motion.div>
      </div>
    </section>
  );
}
