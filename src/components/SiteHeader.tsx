import { Link } from "@tanstack/react-router";
import mlsLogo from "@/assets/mls-logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  { to: "/primary", label: "Primary" },
  { to: "/junior-secondary", label: "Junior Secondary" },
  { to: "/admissions", label: "Admissions" },
  { to: "/clubs", label: "Clubs" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={mlsLogo} alt="Mount Laverna School crest" className="w-12 h-12 object-contain" />
          <div className="leading-tight">
            <p className="font-display text-lg" style={{ fontFamily: "var(--font-display)" }}>
              Mount Laverna
            </p>
            <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
              Diligence Rewards
            </p>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="hover:text-primary transition"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/"
          hash="chat"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-primary-foreground hover:opacity-90 transition"
          style={{ background: "var(--gradient-hero)" }}
        >
          Ask Laverna AI
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p className="font-display text-lg" style={{ fontFamily: "var(--font-display)" }}>
            Mount Laverna School
          </p>
          <p className="text-muted-foreground mt-2">Learn. Lead. Serve.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Explore</p>
          <ul className="mt-3 space-y-1">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="hover:text-primary transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Contact</p>
          <p className="mt-3">14 Hillview Avenue, Greenfield</p>
          <p>+91 80 4567 8900</p>
          <p>info@mountlaverna.edu</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted-foreground flex justify-between">
          <p>© {new Date().getFullYear()} Mount Laverna School. All rights reserved.</p>
          <p>Est. 1985</p>
        </div>
      </div>
    </footer>
  );
}