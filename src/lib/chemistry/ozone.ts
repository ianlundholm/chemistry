export type AtomId = "left" | "center" | "right";
export type ResonanceForm = "A" | "B" | "hybrid";
export type BuildPhase =
  | "count"
  | "atoms"
  | "skeleton"
  | "terminals"
  | "central"
  | "complete"
  | "resonance";

export const VALENCE_ELECTRONS = 18;
export const BOND_ANGLE_DEG = 116.8;
export const OXYGEN_VALENCE = 6;

/** Bent C2v layout, ~117° at the central atom. viewBox 0 0 640 400 */
export const ATOM_POSITIONS: Record<AtomId, { x: number; y: number }> = {
  left: { x: 208, y: 168 },
  center: { x: 320, y: 236 },
  right: { x: 432, y: 168 },
};

export const ATOM_LABELS: Record<AtomId, string> = {
  left: "Terminal (left)",
  center: "Central",
  right: "Terminal (right)",
};

export interface AtomElectronSpec {
  lonePairs: number;
  /** Extra unpaired dots (hybrid delocalization). */
  singleDots: number;
  formalCharge: number;
  /** Degrees, SVG coords (0 = east, 90 = south). */
  pairAngles: number[];
  singleDotAngles: number[];
}

export interface BondSpec {
  from: AtomId;
  to: AtomId;
  order: 1 | 1.5 | 2;
}

export interface StructureSpec {
  atoms: Record<AtomId, AtomElectronSpec>;
  bonds: BondSpec[];
}

const EMPTY_ATOM: AtomElectronSpec = {
  lonePairs: 0,
  singleDots: 0,
  formalCharge: 0,
  pairAngles: [],
  singleDotAngles: [],
};

/** Form A: double bond on the right. */
export const FORM_A: StructureSpec = {
  atoms: {
    left: {
      lonePairs: 3,
      singleDots: 0,
      formalCharge: -1,
      pairAngles: [122, 212, 302],
      singleDotAngles: [],
    },
    center: {
      lonePairs: 1,
      singleDots: 0,
      formalCharge: 1,
      pairAngles: [90],
      singleDotAngles: [],
    },
    right: {
      lonePairs: 2,
      singleDots: 0,
      formalCharge: 0,
      pairAngles: [58, 238],
      singleDotAngles: [],
    },
  },
  bonds: [
    { from: "left", to: "center", order: 1 },
    { from: "center", to: "right", order: 2 },
  ],
};

/** Form B: double bond on the left. */
export const FORM_B: StructureSpec = {
  atoms: {
    left: {
      lonePairs: 2,
      singleDots: 0,
      formalCharge: 0,
      pairAngles: [122, 302],
      singleDotAngles: [],
    },
    center: {
      lonePairs: 1,
      singleDots: 0,
      formalCharge: 1,
      pairAngles: [90],
      singleDotAngles: [],
    },
    right: {
      lonePairs: 3,
      singleDots: 0,
      formalCharge: -1,
      pairAngles: [58, 148, 238],
      singleDotAngles: [],
    },
  },
  bonds: [
    { from: "left", to: "center", order: 2 },
    { from: "center", to: "right", order: 1 },
  ],
};

/**
 * Resonance hybrid: bond order 1.5 each side.
 * Each terminal carries two lone pairs plus one delocalized electron
 * (the “half pair”), which keeps the electron count at 18.
 */
export const FORM_HYBRID: StructureSpec = {
  atoms: {
    left: {
      lonePairs: 2,
      singleDots: 1,
      formalCharge: -0.5,
      pairAngles: [122, 302],
      singleDotAngles: [212],
    },
    center: {
      lonePairs: 1,
      singleDots: 0,
      formalCharge: 1,
      pairAngles: [90],
      singleDotAngles: [],
    },
    right: {
      lonePairs: 2,
      singleDots: 1,
      formalCharge: -0.5,
      pairAngles: [58, 238],
      singleDotAngles: [148],
    },
  },
  bonds: [
    { from: "left", to: "center", order: 1.5 },
    { from: "center", to: "right", order: 1.5 },
  ],
};

export const STRUCTURES: Record<ResonanceForm, StructureSpec> = {
  A: FORM_A,
  B: FORM_B,
  hybrid: FORM_HYBRID,
};

export function structureForPhase(
  phase: BuildPhase,
  form: ResonanceForm = "A",
): StructureSpec {
  const complete = STRUCTURES[form === "hybrid" ? "A" : form];
  switch (phase) {
    case "count":
    case "atoms":
      return {
        atoms: {
          left: { ...EMPTY_ATOM },
          center: { ...EMPTY_ATOM },
          right: { ...EMPTY_ATOM },
        },
        bonds: [],
      };
    case "skeleton":
      return {
        atoms: {
          left: { ...EMPTY_ATOM },
          center: { ...EMPTY_ATOM },
          right: { ...EMPTY_ATOM },
        },
        bonds: [
          { from: "left", to: "center", order: 1 },
          { from: "center", to: "right", order: 1 },
        ],
      };
    case "terminals":
      return {
        atoms: {
          left: {
            lonePairs: 3,
            singleDots: 0,
            formalCharge: 0,
            pairAngles: [122, 212, 302],
            singleDotAngles: [],
          },
          center: { ...EMPTY_ATOM },
          right: {
            lonePairs: 3,
            singleDots: 0,
            formalCharge: 0,
            pairAngles: [58, 148, 238],
            singleDotAngles: [],
          },
        },
        bonds: [
          { from: "left", to: "center", order: 1 },
          { from: "center", to: "right", order: 1 },
        ],
      };
    case "central":
      return {
        atoms: {
          left: {
            lonePairs: 3,
            singleDots: 0,
            formalCharge: 0,
            pairAngles: [122, 212, 302],
            singleDotAngles: [],
          },
          center: {
            lonePairs: 1,
            singleDots: 0,
            formalCharge: 0,
            pairAngles: [90],
            singleDotAngles: [],
          },
          right: {
            lonePairs: 3,
            singleDots: 0,
            formalCharge: 0,
            pairAngles: [58, 148, 238],
            singleDotAngles: [],
          },
        },
        bonds: [
          { from: "left", to: "center", order: 1 },
          { from: "center", to: "right", order: 1 },
        ],
      };
    case "complete":
      return complete;
    case "resonance":
      return STRUCTURES[form];
  }
}

export function countElectrons(spec: StructureSpec): {
  bonding: number;
  nonbonding: number;
  total: number;
} {
  const bonding = spec.bonds.reduce((sum, b) => sum + b.order * 2, 0);
  let nonbonding = 0;
  for (const atom of Object.values(spec.atoms)) {
    nonbonding += atom.lonePairs * 2 + atom.singleDots;
  }
  return { bonding, nonbonding, total: bonding + nonbonding };
}

export function octetElectrons(
  spec: StructureSpec,
  id: AtomId,
): { bonding: number; nonbonding: number; total: number } {
  const atom = spec.atoms[id];
  const nonbonding = atom.lonePairs * 2 + atom.singleDots;
  const bonding = spec.bonds
    .filter((b) => b.from === id || b.to === id)
    .reduce((sum, b) => sum + b.order * 2, 0);
  return { bonding, nonbonding, total: bonding + nonbonding };
}

/** FC = V − N − B/2 */
export function formalCharge(spec: StructureSpec, id: AtomId): number {
  const { bonding, nonbonding } = octetElectrons(spec, id);
  return OXYGEN_VALENCE - nonbonding - bonding / 2;
}

export function formatCharge(value: number): string {
  if (value === 0) return "0";
  if (value === 0.5) return "+½";
  if (value === -0.5) return "−½";
  if (value > 0) return `+${value}`;
  return `−${Math.abs(value)}`;
}

export const BUILD_STEPS: {
  id: BuildPhase;
  title: string;
  kicker: string;
  body: string;
}[] = [
  {
    id: "count",
    title: "Count valence electrons",
    kicker: "Step 1",
    body: "Ozone is O₃. Each oxygen atom contributes 6 valence electrons, so the Lewis structure must account for 3 × 6 = 18 electrons. No extra charge, so nothing is added or subtracted.",
  },
  {
    id: "atoms",
    title: "Arrange the skeleton",
    kicker: "Step 2",
    body: "The least common arrangement that matches experiment is an open chain: O–O–O, with one oxygen in the middle. (A cyclic isomer can be drawn, but it is not the observed ground-state structure.)",
  },
  {
    id: "skeleton",
    title: "Connect with single bonds",
    kicker: "Step 3",
    body: "Two O–O single bonds use 4 electrons. That leaves 18 − 4 = 14 electrons to place as lone pairs.",
  },
  {
    id: "terminals",
    title: "Fill the terminal octets first",
    kicker: "Step 4",
    body: "Give each terminal oxygen 3 lone pairs (6 electrons each). That uses 12 of the remaining 14 electrons. Both terminals now have an octet: 2 bonding + 6 nonbonding.",
  },
  {
    id: "central",
    title: "Place the last pair on the central atom",
    kicker: "Step 5",
    body: "The last 2 electrons become one lone pair on the central oxygen. Central now has only 6 electrons around it (4 bonding + 2 nonbonding) — an incomplete octet.",
  },
  {
    id: "complete",
    title: "Share a lone pair to make a double bond",
    kicker: "Step 6",
    body: "Move one lone pair from a terminal oxygen into the adjacent bond. That terminal still has an octet, and the central atom now has 8 electrons. Formal charges appear: −1 on the single-bonded terminal, +1 on the central atom, 0 on the double-bonded terminal.",
  },
  {
    id: "resonance",
    title: "Draw the other equivalent form",
    kicker: "Step 7",
    body: "The double bond could have been formed on the left instead of the right. Those two Lewis structures are equivalent resonance forms. The real molecule is the hybrid: equal O–O bonds of order 1.5, with the negative charge shared by both terminals.",
  },
];

export const QUIZ: {
  id: string;
  prompt: string;
  choices: { id: string; label: string }[];
  answer: string;
  why: string;
}[] = [
  {
    id: "valence",
    prompt: "How many valence electrons must the Lewis structure of O₃ account for?",
    choices: [
      { id: "12", label: "12" },
      { id: "18", label: "18" },
      { id: "24", label: "24" },
      { id: "8", label: "8" },
    ],
    answer: "18",
    why: "Three oxygen atoms × 6 valence electrons each = 18. Ozone is neutral, so no electrons are added or removed for charge.",
  },
  {
    id: "central-fc",
    prompt: "In either valid resonance form, the formal charge on the central oxygen is",
    choices: [
      { id: "0", label: "0" },
      { id: "+1", label: "+1" },
      { id: "−1", label: "−1" },
      { id: "+2", label: "+2" },
    ],
    answer: "+1",
    why: "Central oxygen: V = 6, N = 2 (one lone pair), B = 6 (one single + one double). FC = 6 − 2 − 3 = +1. That +1 is present in both forms and in the hybrid.",
  },
  {
    id: "why-two",
    prompt: "Why do we draw two Lewis structures for ozone instead of one?",
    choices: [
      { id: "isomers", label: "They are different constitutional isomers that both exist" },
      { id: "resonance", label: "They are equivalent resonance forms of one molecule" },
      { id: "error", label: "One of them violates the octet rule, so we average them" },
      { id: "spin", label: "One is a singlet and the other is a triplet" },
    ],
    answer: "resonance",
    why: "The two drawings differ only in which terminal oxygen holds the double bond. They are not isomers — they are resonance forms of a single electronic structure. The hybrid has two equal O–O bonds.",
  },
  {
    id: "bond-order",
    prompt: "In the resonance hybrid, the bond order of each O–O bond is",
    choices: [
      { id: "1", label: "1" },
      { id: "1.5", label: "1.5" },
      { id: "2", label: "2" },
      { id: "3", label: "3" },
    ],
    answer: "1.5",
    why: "Each bond is a single bond in one form and a double bond in the other. The average bond order is (1 + 2) / 2 = 1.5. Experimentally the two O–O lengths are equal, between a typical single and double bond.",
  },
  {
    id: "shape",
    prompt: "VSEPR for the central atom (two bonds, one lone pair) predicts which molecular shape?",
    choices: [
      { id: "linear", label: "Linear" },
      { id: "bent", label: "Bent (angular)" },
      { id: "trigonal", label: "Trigonal planar" },
      { id: "tetrahedral", label: "Tetrahedral" },
    ],
    answer: "bent",
    why: "Electron-domain geometry is trigonal planar (AX₂E), but the molecular shape names only the bonded atoms, so ozone is bent. The observed angle is 116.8°, a little under the 120° ideal because the lone pair takes more space.",
  },
  {
    id: "dipole",
    prompt: "Ozone is a 1,3-dipole used in ozonolysis. Which charge pattern matches the hybrid?",
    choices: [
      { id: "all-zero", label: "All three oxygens are formally uncharged" },
      { id: "center-plus", label: "Central oxygen δ+, both terminals δ−" },
      { id: "center-minus", label: "Central oxygen δ−, both terminals δ+" },
      { id: "left-plus", label: "Only the left terminal is negative" },
    ],
    answer: "center-plus",
    why: "The central oxygen is +1 in every form. The −1 is shared by the two terminals in the hybrid (about −½ each). That + − + pattern (more precisely δ− / δ+ / δ−) is the 1,3-dipole that adds across alkenes.",
  },
];
