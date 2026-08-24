import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { LewisSvg } from "@/components/molecule/lewis-svg";
import { AtomInspector, FormToggle } from "@/components/studio/atom-inspector";
import type { AtomId, ResonanceForm } from "@/lib/chemistry/ozone";
import { cn } from "@/lib/utils";

export function Explorer() {
  const [form, setForm] = useState<ResonanceForm>("hybrid");
  const [atom, setAtom] = useState<AtomId | null>("center");
  const [showCharges, setShowCharges] = useState(true);
  const [showLonePairs, setShowLonePairs] = useState(true);
  const [showBondOrders, setShowBondOrders] = useState(true);
  const [showOctets, setShowOctets] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) {
        return;
      }
      if (event.key === "1") setForm("A");
      if (event.key === "2") setForm("hybrid");
      if (event.key === "3") setForm("B");
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="explore" className="scroll-mt-24">
      <div className="grid gap-4 lg:grid-cols-5">
        <Card variant="paper" className="p-3 sm:p-5 lg:col-span-3">
          <LewisSvg
            form={form}
            selectedAtom={atom}
            onSelectAtom={setAtom}
            showCharges={showCharges}
            showLonePairs={showLonePairs}
            showBondOrders={showBondOrders}
            showOctets={showOctets}
            showAngle={form === "hybrid"}
            surface="paper"
          />
        </Card>
        <div className="flex flex-col gap-3 lg:col-span-2">
          <FormToggle value={form} onChange={setForm} />
          <AtomInspector atomId={atom} form={form} />
          <div className="grid grid-cols-2 gap-2">
            <Toggle
              label="Formal charges"
              on={showCharges}
              onClick={() => setShowCharges((v) => !v)}
            />
            <Toggle
              label="Lone pairs"
              on={showLonePairs}
              onClick={() => setShowLonePairs((v) => !v)}
            />
            <Toggle
              label="Bond orders"
              on={showBondOrders}
              onClick={() => setShowBondOrders((v) => !v)}
            />
            <Toggle
              label="Octet counts"
              on={showOctets}
              onClick={() => setShowOctets((v) => !v)}
            />
          </div>
          <p className="hidden text-xs text-subtle sm:block">
            Keys 1 / 2 / 3 switch Form A, hybrid, and Form B.
          </p>
        </div>
      </div>
    </section>
  );
}

function Toggle({
  label,
  on,
  onClick,
}: {
  label: string;
  on: boolean;
  onClick: () => void;
}) {
  return (
    <Button
      type="button"
      variant={on ? "paper" : "outline"}
      size="sm"
      onClick={onClick}
      aria-pressed={on}
      className={cn("h-11 justify-center")}
    >
      {label}
    </Button>
  );
}
