import type { ReactNode } from "react";
import { useState } from "react";
import {
  ATOM_LABELS,
  type AtomId,
  formatCharge,
  FORM_A,
  octetElectrons,
  OXYGEN_VALENCE,
} from "@/lib/chemistry/ozone";
import { Card } from "@/components/ui/card";
import { LewisSvg } from "@/components/molecule/lewis-svg";
import { cn } from "@/lib/utils";

const ATOMS: AtomId[] = ["left", "center", "right"];

export function ChargeLab() {
  const [atom, setAtom] = useState<AtomId>("center");

  return (
    <section id="charge" className="scroll-mt-24">
      <p className="text-xs font-medium tracking-widest text-oxygen-soft uppercase">
        Formal charge
      </p>
      <h2 className="mt-1 font-display text-3xl text-fg">
        Who is charged, and why
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Formal charge is a bookkeeping tool, not a measured charge. It asks:
        if we split every bond pair evenly, how many electrons does this atom
        own compared with its group number? The formula is
        {" "}
        <span className="text-fg">FC = V − N − B/2</span>.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card variant="paper" className="p-3 sm:p-4">
          <LewisSvg
            form="A"
            selectedAtom={atom}
            onSelectAtom={setAtom}
            showCharges
            surface="paper"
          />
        </Card>
        <div className="flex flex-col gap-3">
          {ATOMS.map((id) => (
            <ChargeCard
              key={id}
              id={id}
              active={atom === id}
              onSelect={() => setAtom(id)}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Note title="Sum must match the real charge">
          (−1) + (+1) + (0) = 0. Ozone is a neutral molecule, so the formal
          charges have to cancel. If they do not, the electron count is wrong.
        </Note>
        <Note title="Prefer small charges, octets kept">
          You cannot give every oxygen an octet in the open structure without
          creating +1/−1. That is acceptable: the alternative (incomplete
          octets, or a cyclic isomer) is either invalid or not the observed
          molecule.
        </Note>
      </div>
    </section>
  );
}

function ChargeCard({
  id,
  active,
  onSelect,
}: {
  id: AtomId;
  active: boolean;
  onSelect: () => void;
}) {
  const atom = FORM_A.atoms[id];
  const { bonding, nonbonding } = octetElectrons(FORM_A, id);
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "rounded-xl p-4 text-left shadow-[var(--shadow-border)] transition-colors duration-150",
        active ? "bg-elevated" : "bg-surface hover:bg-elevated/60",
      )}
    >
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-medium text-fg">{ATOM_LABELS[id]}</span>
        <span className="font-display text-2xl text-oxygen-soft">
          {formatCharge(atom.formalCharge)}
        </span>
      </div>
      <p className="mt-2 font-mono text-xs text-muted">
        {OXYGEN_VALENCE} − {nonbonding} − {bonding / 2} ={" "}
        {formatCharge(atom.formalCharge)}
      </p>
      <p className="mt-2 text-xs leading-relaxed text-muted">
        {id === "left" &&
          "Three lone pairs (N = 6) and one single bond (B = 2). This oxygen owns one extra electron relative to a free atom."}
        {id === "center" &&
          "One lone pair (N = 2) and three bonding pairs (B = 6). The central atom is electron-deficient on paper — that is why ozone is electrophilic there."}
        {id === "right" &&
          "Two lone pairs (N = 4) and a double bond (B = 4). This matches a neutral oxygen with an octet."}
      </p>
    </button>
  );
}

function Note({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]">
      <h3 className="font-medium text-fg">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
