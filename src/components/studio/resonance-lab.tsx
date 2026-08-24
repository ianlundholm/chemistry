import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LewisSvg } from "@/components/molecule/lewis-svg";
import type { ResonanceForm } from "@/lib/chemistry/ozone";

export function ResonanceLab() {
  const [playing, setPlaying] = useState(false);
  const [form, setForm] = useState<ResonanceForm>("A");

  useEffect(() => {
    if (!playing) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setPlaying(false);
      return;
    }
    const id = window.setInterval(() => {
      setForm((current) => (current === "A" ? "B" : "A"));
    }, 1600);
    return () => window.clearInterval(id);
  }, [playing]);

  return (
    <section id="resonance" className="scroll-mt-24">
      <p className="text-xs font-medium tracking-widest text-oxygen-soft uppercase">
        Resonance
      </p>
      <h2 className="mt-1 font-display text-3xl text-fg">
        Two drawings, one molecule
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        The double bond is not trapped on one side. Electrons are delocalized
        over the three-atom π system. We draw two Lewis structures and a
        double-headed arrow to mean: the real electron density is the average.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card variant="paper" className="p-3 sm:p-4">
          <LewisSvg form="A" showCharges showBondOrders surface="paper" />
        </Card>
        <Card variant="paper" className="p-3 sm:p-4">
          <LewisSvg form="B" showCharges showBondOrders surface="paper" />
        </Card>
      </div>
      <p className="mt-2 text-center font-display text-2xl text-muted" aria-hidden>
        ↔
      </p>

      <Card variant="paper" className="mt-2 p-3 sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-paper-muted">
            The hybrid is what spectroscopy sees: equal bond lengths, bond
            order 1.5, negative charge shared by both terminals.
          </p>
          <Button
            variant="outline"
            className="shrink-0 border-paper-line bg-paper text-paper-ink hover:bg-paper-line"
            onClick={() => {
              setPlaying((p) => !p);
              if (!playing) setForm("A");
            }}
          >
            {playing ? <Pause /> : <Play />}
            {playing ? "Pause flip" : "Flip A ↔ B"}
          </Button>
        </div>
        <LewisSvg
          form={playing ? form : "hybrid"}
          showCharges
          showBondOrders
          surface="paper"
        />
      </Card>

      <ul className="mt-6 grid gap-3 sm:grid-cols-3">
        <Fact
          title="Not isomers"
          body="The molecule does not oscillate between A and B. Those are bookkeeping drawings of one electronic structure."
        />
        <Fact
          title="Bond order 1.5"
          body="Each O–O link is a single bond in one form and a double in the other. Average: 1.5. Measured lengths are equal."
        />
        <Fact
          title="Partial charges"
          body="Central oxygen stays +1. The −1 is split, about −½ on each terminal in the hybrid — the 1,3-dipole of ozonolysis."
        />
      </ul>
    </section>
  );
}

function Fact({ title, body }: { title: string; body: string }) {
  return (
    <li className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <h3 className="font-medium text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </li>
  );
}
