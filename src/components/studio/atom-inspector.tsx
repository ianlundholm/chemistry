import {
  ATOM_LABELS,
  OXYGEN_VALENCE,
  type AtomId,
  type ResonanceForm,
  STRUCTURES,
  formatCharge,
  octetElectrons,
} from "@/lib/chemistry/ozone";
import { cn } from "@/lib/utils";

export function AtomInspector({
  atomId,
  form,
}: {
  atomId: AtomId | null;
  form: ResonanceForm;
}) {
  if (!atomId) {
    return (
      <div className="rounded-lg bg-elevated/70 p-4 text-sm text-muted">
        Select an oxygen atom on the structure to see its formal-charge
        arithmetic. Formal charge is FC = V − N − B/2.
      </div>
    );
  }

  const spec = STRUCTURES[form];
  const { bonding, nonbonding, total } = octetElectrons(spec, atomId);
  const fc = spec.atoms[atomId].formalCharge;
  const v = OXYGEN_VALENCE;
  const bHalf = bonding / 2;

  return (
    <div className="rounded-lg bg-elevated p-4">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">
        {ATOM_LABELS[atomId]} oxygen
      </p>
      <p className="mt-1 font-display text-2xl text-fg">
        FC = {formatCharge(fc)}
      </p>
      <p className="mt-3 font-mono text-sm text-fg">
        FC = V − N − B/2
      </p>
      <p className="mt-1 font-mono text-sm text-muted">
        FC = {v} − {nonbonding} − {bHalf} = {formatCharge(fc)}
      </p>
      <dl className="mt-4 grid grid-cols-3 gap-2 text-center">
        <Stat label="V valence" value={String(v)} />
        <Stat label="N nonbonding" value={String(nonbonding)} />
        <Stat label="B bonding" value={String(bonding)} />
      </dl>
      <p className="mt-3 text-xs text-muted">
        Electrons around this atom (octet count): {total}. Oxygen wants 8.
        {form === "hybrid" && atomId !== "center"
          ? " The extra single dot is the delocalized electron that the two terminals share."
          : null}
      </p>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-bg/50 px-2 py-2">
      <div className="font-display text-lg tabular-nums text-fg">{value}</div>
      <div className="text-xs text-muted">{label}</div>
    </div>
  );
}

export function FormToggle({
  value,
  onChange,
}: {
  value: ResonanceForm;
  onChange: (form: ResonanceForm) => void;
}) {
  const options: { id: ResonanceForm; label: string }[] = [
    { id: "A", label: "Form A" },
    { id: "hybrid", label: "Hybrid" },
    { id: "B", label: "Form B" },
  ];
  return (
    <div
      className="grid grid-cols-3 gap-1 rounded-lg bg-bg p-1"
      role="tablist"
      aria-label="Resonance form"
    >
      {options.map((opt) => (
        <button
          key={opt.id}
          type="button"
          role="tab"
          aria-selected={value === opt.id}
          onClick={() => onChange(opt.id)}
          className={cn(
            "h-11 rounded-md text-sm font-medium transition-colors duration-150",
            value === opt.id
              ? "bg-paper text-paper-ink"
              : "text-muted hover:text-fg",
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
