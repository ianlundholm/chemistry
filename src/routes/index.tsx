import { createFileRoute } from "@tanstack/react-router";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BuildLab } from "@/components/studio/build-lab";
import { ChargeLab } from "@/components/studio/charge-lab";
import { Explorer } from "@/components/studio/explorer";
import { GeometryLab } from "@/components/studio/geometry-lab";
import { QuizLab } from "@/components/studio/quiz-lab";
import { ResonanceLab } from "@/components/studio/resonance-lab";

export const Route = createFileRoute("/")({ component: Home });

const NAV = [
  { href: "#explore", label: "Structure" },
  { href: "#build", label: "Build" },
  { href: "#charge", label: "Charge" },
  { href: "#resonance", label: "Resonance" },
  { href: "#geometry", label: "Shape" },
  { href: "#quiz", label: "Quiz" },
];

function Home() {
  return (
    <TooltipProvider delayDuration={200}>
      <div className="min-h-svh bg-bg text-fg">
        <header className="sticky top-0 z-30 border-b border-border/80 bg-bg/92 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <a href="#top" className="flex items-baseline gap-2">
                <span className="font-display text-lg text-fg">Ozone Lewis Lab</span>
                <span className="font-display text-sm text-oxygen-soft">O₃</span>
              </a>
            </div>
            <nav className="mt-1 flex items-center gap-1 overflow-x-auto">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="inline-flex h-11 shrink-0 items-center px-3 text-sm text-muted transition-colors hover:text-fg"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main id="top" className="mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 sm:py-14">
          <Hero />
          <Explorer />
          <WhyOzone />
          <BuildLab />
          <ChargeLab />
          <ResonanceLab />
          <GeometryLab />
          <QuizLab />
        </main>

        <footer className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-subtle sm:px-6">
            Formal charge FC = V − N − B/2. Ozone data: bent C₂v, 116.8°, equal
            O–O bonds of order 1.5. Drawn for a first-semester organic course.
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
}

function Hero() {
  return (
    <section className="max-w-3xl">
      <p className="text-xs font-medium tracking-widest text-oxygen-soft uppercase">
        Collegiate organic chemistry
      </p>
      <h1 className="mt-3 font-display text-4xl leading-[1.12] tracking-tight text-fg sm:text-5xl">
        The Lewis structure of ozone, including the charges textbooks skip past.
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        O₃ looks simple until you count electrons. The valid open structure
        cannot give every oxygen a formal charge of zero. Click atoms on the
        figure, step through the construction, then check the resonance hybrid
        that actually exists.
      </p>
    </section>
  );
}

function WhyOzone() {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      <Blurb
        title="18 electrons, not 24"
        body="Three oxygens × 6 valence electrons. A common error is treating ozone like a filled-octet cartoon with too many dots."
      />
      <Blurb
        title="Formal charge is required"
        body="Open O–O–O with octets forces +1 on the central atom and −1 on a terminal. That pattern is the 1,3-dipole of ozonolysis."
      />
      <Blurb
        title="Resonance is the molecule"
        body="Neither Form A nor Form B is “the” structure. Equal bond lengths mean the hybrid: bond order 1.5 on both sides."
      />
    </section>
  );
}

function Blurb({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
      <h2 className="font-display text-xl text-fg">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
