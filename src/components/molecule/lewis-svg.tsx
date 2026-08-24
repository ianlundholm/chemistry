import { useId } from "react";
import {
  ATOM_POSITIONS,
  type AtomId,
  type BondSpec,
  type BuildPhase,
  type ResonanceForm,
  type StructureSpec,
  STRUCTURES,
  countElectrons,
  formatCharge,
  octetElectrons,
  structureForPhase,
} from "@/lib/chemistry/ozone";
import { cn } from "@/lib/utils";

const ATOM_IDS: AtomId[] = ["left", "center", "right"];
const ATOM_R = 26;
const PAIR_DIST = 44;
const DOT_R = 3.4;
const PAIR_SEP = 5.2;
const BOND_INSET = 32;

type Surface = "paper" | "dark";

export interface LewisSvgProps {
  form?: ResonanceForm;
  phase?: BuildPhase;
  selectedAtom?: AtomId | null;
  onSelectAtom?: (id: AtomId) => void;
  showCharges?: boolean;
  showLonePairs?: boolean;
  showBondOrders?: boolean;
  showOctets?: boolean;
  showAngle?: boolean;
  className?: string;
  surface?: Surface;
}

function specFromProps(form: ResonanceForm, phase?: BuildPhase): StructureSpec {
  if (phase) return structureForPhase(phase, form);
  return STRUCTURES[form];
}

function bondEndpoints(bond: BondSpec) {
  const a = ATOM_POSITIONS[bond.from];
  const b = ATOM_POSITIONS[bond.to];
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  return {
    x1: a.x + ux * BOND_INSET,
    y1: a.y + uy * BOND_INSET,
    x2: b.x - ux * BOND_INSET,
    y2: b.y - uy * BOND_INSET,
    px: -uy,
    py: ux,
  };
}

function BondLines({
  bond,
  stroke,
}: {
  bond: BondSpec;
  stroke: string;
}) {
  const { x1, y1, x2, y2, px, py } = bondEndpoints(bond);
  const off = 4.2;

  if (bond.order === 1) {
    return (
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={stroke}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    );
  }

  if (bond.order === 2) {
    return (
      <g>
        <line
          x1={x1 + px * off}
          y1={y1 + py * off}
          x2={x2 + px * off}
          y2={y2 + py * off}
          stroke={stroke}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
        <line
          x1={x1 - px * off}
          y1={y1 - py * off}
          x2={x2 - px * off}
          y2={y2 - py * off}
          stroke={stroke}
          strokeWidth={2.4}
          strokeLinecap="round"
        />
      </g>
    );
  }

  return (
    <g>
      <line
        x1={x1 + px * off}
        y1={y1 + py * off}
        x2={x2 + px * off}
        y2={y2 + py * off}
        stroke={stroke}
        strokeWidth={2.4}
        strokeLinecap="round"
      />
      <line
        x1={x1 - px * off}
        y1={y1 - py * off}
        x2={x2 - px * off}
        y2={y2 - py * off}
        stroke={stroke}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeDasharray="5 5"
      />
    </g>
  );
}

function LonePair({
  cx,
  cy,
  angle,
  fill,
}: {
  cx: number;
  cy: number;
  angle: number;
  fill: string;
}) {
  const rad = (angle * Math.PI) / 180;
  const px = cx + Math.cos(rad) * PAIR_DIST;
  const py = cy + Math.sin(rad) * PAIR_DIST;
  const perp = rad + Math.PI / 2;
  return (
    <g>
      <circle
        cx={px + Math.cos(perp) * PAIR_SEP}
        cy={py + Math.sin(perp) * PAIR_SEP}
        r={DOT_R}
        fill={fill}
      />
      <circle
        cx={px - Math.cos(perp) * PAIR_SEP}
        cy={py - Math.sin(perp) * PAIR_SEP}
        r={DOT_R}
        fill={fill}
      />
    </g>
  );
}

function SingleDot({
  cx,
  cy,
  angle,
  fill,
}: {
  cx: number;
  cy: number;
  angle: number;
  fill: string;
}) {
  const rad = (angle * Math.PI) / 180;
  return (
    <circle
      cx={cx + Math.cos(rad) * PAIR_DIST}
      cy={cy + Math.sin(rad) * PAIR_DIST}
      r={DOT_R}
      fill={fill}
    />
  );
}

function chargeOffset(id: AtomId): { dx: number; dy: number } {
  if (id === "left") return { dx: -24, dy: -26 };
  if (id === "right") return { dx: 24, dy: -26 };
  return { dx: 34, dy: 28 };
}

function ChargeBadge({
  x,
  y,
  id,
  value,
  surface,
}: {
  x: number;
  y: number;
  id: AtomId;
  value: number;
  surface: Surface;
}) {
  if (value === 0) return null;
  const label = formatCharge(value);
  const negative = value < 0;
  const fill = negative ? "var(--color-paper-ink)" : "var(--color-oxygen)";
  const fg = negative ? "var(--color-paper)" : "var(--color-fg)";
  const ring = surface === "paper" ? "var(--color-paper)" : "var(--color-bg)";
  const { dx, dy } = chargeOffset(id);
  return (
    <g transform={`translate(${x + dx}, ${y + dy})`}>
      <circle r={13} fill={fill} stroke={ring} strokeWidth={2} />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        fill={fg}
        fontSize={label.length > 2 ? 10 : 12}
        fontWeight={600}
        fontFamily="Figtree, sans-serif"
      >
        {label}
      </text>
    </g>
  );
}

function formCaption(form: ResonanceForm, phase?: BuildPhase): string {
  if (phase) {
    switch (phase) {
      case "count":
      case "atoms":
        return "PLACE THE ATOMS";
      case "skeleton":
        return "SINGLE BONDS";
      case "terminals":
        return "TERMINAL OCTETS";
      case "central":
        return "CENTRAL ATOM STILL SHORT";
      case "complete":
        return "RESONANCE FORM A";
      case "resonance":
        return form === "hybrid" ? "RESONANCE HYBRID" : `RESONANCE FORM ${form}`;
    }
  }
  return form === "hybrid"
    ? "RESONANCE HYBRID"
    : form === "A"
      ? "RESONANCE FORM A"
      : "RESONANCE FORM B";
}

function AngleArc({ stroke }: { stroke: string }) {
  const c = ATOM_POSITIONS.center;
  const l = ATOM_POSITIONS.left;
  const r = ATOM_POSITIONS.right;
  const radius = 52;
  const a1 = Math.atan2(l.y - c.y, l.x - c.x);
  const a2 = Math.atan2(r.y - c.y, r.x - c.x);
  const p1 = { x: c.x + Math.cos(a1) * radius, y: c.y + Math.sin(a1) * radius };
  const p2 = { x: c.x + Math.cos(a2) * radius, y: c.y + Math.sin(a2) * radius };
  const labelR = 98;
  const mid = (a1 + a2) / 2;
  return (
    <g>
      <path
        d={`M ${p1.x} ${p1.y} A ${radius} ${radius} 0 0 1 ${p2.x} ${p2.y}`}
        fill="none"
        stroke={stroke}
        strokeWidth={1.4}
        opacity={0.7}
      />
      <text
        x={c.x + Math.cos(mid) * labelR}
        y={c.y + Math.sin(mid) * labelR}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={stroke}
        stroke="var(--color-paper)"
        strokeWidth={5}
        paintOrder="stroke"
        fontSize={12}
        fontFamily="Figtree, sans-serif"
      >
        116.8°
      </text>
    </g>
  );
}

export function LewisSvg({
  form = "A",
  phase,
  selectedAtom = null,
  onSelectAtom,
  showCharges = true,
  showLonePairs = true,
  showBondOrders = false,
  showOctets = false,
  showAngle = false,
  className,
  surface = "paper",
}: LewisSvgProps) {
  const uid = useId();
  const spec = specFromProps(form, phase);
  const ink = surface === "paper" ? "var(--color-paper-ink)" : "var(--color-fg)";
  const muted =
    surface === "paper" ? "var(--color-paper-muted)" : "var(--color-muted)";
  const electrons = countElectrons(spec);
  const interactive = Boolean(onSelectAtom);

  return (
    <svg
      viewBox="0 0 640 400"
      className={cn("h-auto w-full", className)}
      role="img"
      aria-label="Lewis structure of ozone"
    >
      <defs>
        <radialGradient id={`${uid}-atom`} cx="38%" cy="32%" r="70%">
          <stop offset="0%" stopColor="var(--color-oxygen-soft)" />
          <stop offset="100%" stopColor="var(--color-oxygen)" />
        </radialGradient>
      </defs>

      {showAngle && phase !== "count" && phase !== "atoms" ? (
        <AngleArc stroke={muted} />
      ) : null}

      {spec.bonds.map((bond) => {
        const a = ATOM_POSITIONS[bond.from];
        const b = ATOM_POSITIONS[bond.to];
        const mx = (a.x + b.x) / 2;
        const my = (a.y + b.y) / 2;
        return (
          <g key={`${bond.from}-${bond.to}`}>
            <BondLines bond={bond} stroke={ink} />
            {showBondOrders ? (
              <text
                x={mx}
                y={my + 18}
                textAnchor="middle"
                fill={muted}
                fontSize={11}
                fontFamily="Figtree, sans-serif"
              >
                {bond.order === 1.5 ? "1.5" : bond.order === 2 ? "2" : "1"}
              </text>
            ) : null}
          </g>
        );
      })}

      {ATOM_IDS.map((id) => {
        const pos = ATOM_POSITIONS[id];
        const atom = spec.atoms[id];
        const selected = selectedAtom === id;
        const octet = octetElectrons(spec, id);
        return (
          <g key={id}>
            {showLonePairs
              ? atom.pairAngles.map((angle) => (
                  <LonePair
                    key={`${id}-p-${angle}`}
                    cx={pos.x}
                    cy={pos.y}
                    angle={angle}
                    fill={ink}
                  />
                ))
              : null}
            {showLonePairs
              ? atom.singleDotAngles.map((angle) => (
                  <SingleDot
                    key={`${id}-d-${angle}`}
                    cx={pos.x}
                    cy={pos.y}
                    angle={angle}
                    fill={ink}
                  />
                ))
              : null}

            {interactive ? (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={48}
                fill="transparent"
                className="cursor-pointer"
                onClick={() => onSelectAtom?.(id)}
                tabIndex={0}
                role="button"
                aria-label={`Select ${id} oxygen`}
                aria-pressed={selected}
              />
            ) : null}

            {selected ? (
              <circle
                cx={pos.x}
                cy={pos.y}
                r={ATOM_R + 8}
                fill="none"
                stroke="var(--color-oxygen)"
                strokeWidth={2}
                opacity={0.9}
              />
            ) : null}

            <circle
              cx={pos.x}
              cy={pos.y}
              r={ATOM_R}
              fill={`url(#${uid}-atom)`}
              className={interactive ? "pointer-events-none" : undefined}
            />
            <circle
              cx={pos.x - 7}
              cy={pos.y - 8}
              r={7}
              fill="var(--color-fg)"
              opacity={0.18}
              className="pointer-events-none"
            />
            <text
              x={pos.x}
              y={pos.y + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-fg)"
              fontSize={22}
              fontWeight={600}
              fontFamily="Fraunces, serif"
              className="pointer-events-none"
            >
              O
            </text>

            {showCharges ? (
              <ChargeBadge
                x={pos.x}
                y={pos.y}
                id={id}
                value={atom.formalCharge}
                surface={surface}
              />
            ) : null}

            {showOctets ? (
              <text
                x={pos.x}
                y={pos.y + ATOM_R + 18}
                textAnchor="middle"
                fill={muted}
                fontSize={11}
                fontFamily="Figtree, sans-serif"
              >
                {octet.total === 0 ? "" : `${octet.total} e⁻ around`}
              </text>
            ) : null}
          </g>
        );
      })}

      <text
        x={320}
        y={28}
        textAnchor="middle"
        fill={muted}
        fontSize={12}
        fontFamily="Figtree, sans-serif"
        letterSpacing="0.16em"
      >
        {formCaption(form, phase)}
      </text>

      <text
        x={320}
        y={378}
        textAnchor="middle"
        fill={ink}
        fontSize={13}
        fontFamily="Figtree, sans-serif"
      >
        {electrons.total === 0
          ? "18 valence electrons to place"
          : `${electrons.bonding} bonding  ·  ${electrons.nonbonding} nonbonding  ·  ${electrons.total} total`}
      </text>
    </svg>
  );
}
