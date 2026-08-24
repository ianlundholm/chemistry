import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BUILD_STEPS, type BuildPhase } from "@/lib/chemistry/ozone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LewisSvg } from "@/components/molecule/lewis-svg";

export function BuildLab() {
  const [index, setIndex] = useState(0);
  const step = BUILD_STEPS[index];
  const phase: BuildPhase = step.id;
  const showCharges = phase === "complete" || phase === "resonance";
  const form = phase === "resonance" ? "hybrid" : "A";

  return (
    <section id="build" className="scroll-mt-24">
      <Header kicker="Construction" title="Build the Lewis structure" />
      <Card variant="paper" className="p-3 sm:p-5">
        <div className="rounded-lg bg-paper">
          <LewisSvg
            form={form}
            phase={phase}
            showCharges={showCharges}
            showLonePairs
            showOctets={phase === "terminals" || phase === "central"}
            showBondOrders={phase === "complete" || phase === "resonance"}
            showAngle={phase === "resonance"}
            surface="paper"
          />
        </div>
      </Card>

      <div className="mt-4 overflow-hidden rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]">
        <div className="mb-4 flex gap-1" aria-hidden>
          {BUILD_STEPS.map((s, i) => (
            <div
              key={s.id}
              className={
                i <= index
                  ? "h-1 flex-1 rounded-full bg-oxygen"
                  : "h-1 flex-1 rounded-full bg-elevated"
              }
            />
          ))}
        </div>
        <p className="text-xs font-medium tracking-wide text-oxygen-soft uppercase">
          {step.kicker} of {BUILD_STEPS.length}
        </p>
        <h3 className="mt-1 font-display text-2xl text-fg">{step.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {step.body}
        </p>
        {phase === "count" ? <ElectronMath /> : null}
        {phase === "complete" ? (
          <p className="mt-3 max-w-2xl text-sm text-fg">
            Check the badges: the single-bonded terminal is −1, the central
            oxygen is +1, the double-bonded terminal is 0. Sum of formal
            charges = 0, matching the neutral molecule.
          </p>
        ) : null}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            disabled={index === 0}
          >
            <ChevronLeft />
            Back
          </Button>
          <p className="text-xs text-subtle tabular-nums">
            {index + 1} / {BUILD_STEPS.length}
          </p>
          <Button
            onClick={() =>
              setIndex((i) => Math.min(BUILD_STEPS.length - 1, i + 1))
            }
            disabled={index === BUILD_STEPS.length - 1}
          >
            Next
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}

function Header({ kicker, title }: { kicker: string; title: string }) {
  return (
    <div className="mb-5">
      <p className="text-xs font-medium tracking-widest text-oxygen-soft uppercase">
        {kicker}
      </p>
      <h2 className="mt-1 font-display text-3xl text-fg">{title}</h2>
    </div>
  );
}

function ElectronMath() {
  return (
    <div className="mt-4 grid gap-2 sm:grid-cols-3">
      <MathChip label="Oxygen atoms" value="3" />
      <MathChip label="Valence per O" value="6" />
      <MathChip label="Total to place" value="18" />
    </div>
  );
}

function MathChip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-bg px-3 py-3">
      <div className="font-display text-2xl tabular-nums text-fg">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}
