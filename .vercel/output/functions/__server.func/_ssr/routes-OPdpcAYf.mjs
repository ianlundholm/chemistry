import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as Pause, c as Check, i as Play, o as ChevronRight, r as RotateCcw, s as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { i as Slot } from "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import { n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-OPdpcAYf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var TooltipProvider = Provider;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 max-w-xs rounded-md bg-elevated px-3 py-2 text-xs text-fg shadow-[var(--shadow-border)]", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
/** Bent C2v layout, ~117° at the central atom. viewBox 0 0 640 400 */
var ATOM_POSITIONS = {
	left: {
		x: 208,
		y: 168
	},
	center: {
		x: 320,
		y: 236
	},
	right: {
		x: 432,
		y: 168
	}
};
var ATOM_LABELS = {
	left: "Terminal (left)",
	center: "Central",
	right: "Terminal (right)"
};
var EMPTY_ATOM = {
	lonePairs: 0,
	singleDots: 0,
	formalCharge: 0,
	pairAngles: [],
	singleDotAngles: []
};
/** Form A: double bond on the right. */
var FORM_A = {
	atoms: {
		left: {
			lonePairs: 3,
			singleDots: 0,
			formalCharge: -1,
			pairAngles: [
				122,
				212,
				302
			],
			singleDotAngles: []
		},
		center: {
			lonePairs: 1,
			singleDots: 0,
			formalCharge: 1,
			pairAngles: [90],
			singleDotAngles: []
		},
		right: {
			lonePairs: 2,
			singleDots: 0,
			formalCharge: 0,
			pairAngles: [58, 238],
			singleDotAngles: []
		}
	},
	bonds: [{
		from: "left",
		to: "center",
		order: 1
	}, {
		from: "center",
		to: "right",
		order: 2
	}]
};
var STRUCTURES = {
	A: FORM_A,
	B: {
		atoms: {
			left: {
				lonePairs: 2,
				singleDots: 0,
				formalCharge: 0,
				pairAngles: [122, 302],
				singleDotAngles: []
			},
			center: {
				lonePairs: 1,
				singleDots: 0,
				formalCharge: 1,
				pairAngles: [90],
				singleDotAngles: []
			},
			right: {
				lonePairs: 3,
				singleDots: 0,
				formalCharge: -1,
				pairAngles: [
					58,
					148,
					238
				],
				singleDotAngles: []
			}
		},
		bonds: [{
			from: "left",
			to: "center",
			order: 2
		}, {
			from: "center",
			to: "right",
			order: 1
		}]
	},
	hybrid: {
		atoms: {
			left: {
				lonePairs: 2,
				singleDots: 1,
				formalCharge: -.5,
				pairAngles: [122, 302],
				singleDotAngles: [212]
			},
			center: {
				lonePairs: 1,
				singleDots: 0,
				formalCharge: 1,
				pairAngles: [90],
				singleDotAngles: []
			},
			right: {
				lonePairs: 2,
				singleDots: 1,
				formalCharge: -.5,
				pairAngles: [58, 238],
				singleDotAngles: [148]
			}
		},
		bonds: [{
			from: "left",
			to: "center",
			order: 1.5
		}, {
			from: "center",
			to: "right",
			order: 1.5
		}]
	}
};
function structureForPhase(phase, form = "A") {
	const complete = STRUCTURES[form === "hybrid" ? "A" : form];
	switch (phase) {
		case "count":
		case "atoms": return {
			atoms: {
				left: { ...EMPTY_ATOM },
				center: { ...EMPTY_ATOM },
				right: { ...EMPTY_ATOM }
			},
			bonds: []
		};
		case "skeleton": return {
			atoms: {
				left: { ...EMPTY_ATOM },
				center: { ...EMPTY_ATOM },
				right: { ...EMPTY_ATOM }
			},
			bonds: [{
				from: "left",
				to: "center",
				order: 1
			}, {
				from: "center",
				to: "right",
				order: 1
			}]
		};
		case "terminals": return {
			atoms: {
				left: {
					lonePairs: 3,
					singleDots: 0,
					formalCharge: 0,
					pairAngles: [
						122,
						212,
						302
					],
					singleDotAngles: []
				},
				center: { ...EMPTY_ATOM },
				right: {
					lonePairs: 3,
					singleDots: 0,
					formalCharge: 0,
					pairAngles: [
						58,
						148,
						238
					],
					singleDotAngles: []
				}
			},
			bonds: [{
				from: "left",
				to: "center",
				order: 1
			}, {
				from: "center",
				to: "right",
				order: 1
			}]
		};
		case "central": return {
			atoms: {
				left: {
					lonePairs: 3,
					singleDots: 0,
					formalCharge: 0,
					pairAngles: [
						122,
						212,
						302
					],
					singleDotAngles: []
				},
				center: {
					lonePairs: 1,
					singleDots: 0,
					formalCharge: 0,
					pairAngles: [90],
					singleDotAngles: []
				},
				right: {
					lonePairs: 3,
					singleDots: 0,
					formalCharge: 0,
					pairAngles: [
						58,
						148,
						238
					],
					singleDotAngles: []
				}
			},
			bonds: [{
				from: "left",
				to: "center",
				order: 1
			}, {
				from: "center",
				to: "right",
				order: 1
			}]
		};
		case "complete": return complete;
		case "resonance": return STRUCTURES[form];
	}
}
function countElectrons(spec) {
	const bonding = spec.bonds.reduce((sum, b) => sum + b.order * 2, 0);
	let nonbonding = 0;
	for (const atom of Object.values(spec.atoms)) nonbonding += atom.lonePairs * 2 + atom.singleDots;
	return {
		bonding,
		nonbonding,
		total: bonding + nonbonding
	};
}
function octetElectrons(spec, id) {
	const atom = spec.atoms[id];
	const nonbonding = atom.lonePairs * 2 + atom.singleDots;
	const bonding = spec.bonds.filter((b) => b.from === id || b.to === id).reduce((sum, b) => sum + b.order * 2, 0);
	return {
		bonding,
		nonbonding,
		total: bonding + nonbonding
	};
}
function formatCharge(value) {
	if (value === 0) return "0";
	if (value === .5) return "+½";
	if (value === -.5) return "−½";
	if (value > 0) return `+${value}`;
	return `−${Math.abs(value)}`;
}
var BUILD_STEPS = [
	{
		id: "count",
		title: "Count valence electrons",
		kicker: "Step 1",
		body: "Ozone is O₃. Each oxygen atom contributes 6 valence electrons, so the Lewis structure must account for 3 × 6 = 18 electrons. No extra charge, so nothing is added or subtracted."
	},
	{
		id: "atoms",
		title: "Arrange the skeleton",
		kicker: "Step 2",
		body: "The least common arrangement that matches experiment is an open chain: O–O–O, with one oxygen in the middle. (A cyclic isomer can be drawn, but it is not the observed ground-state structure.)"
	},
	{
		id: "skeleton",
		title: "Connect with single bonds",
		kicker: "Step 3",
		body: "Two O–O single bonds use 4 electrons. That leaves 18 − 4 = 14 electrons to place as lone pairs."
	},
	{
		id: "terminals",
		title: "Fill the terminal octets first",
		kicker: "Step 4",
		body: "Give each terminal oxygen 3 lone pairs (6 electrons each). That uses 12 of the remaining 14 electrons. Both terminals now have an octet: 2 bonding + 6 nonbonding."
	},
	{
		id: "central",
		title: "Place the last pair on the central atom",
		kicker: "Step 5",
		body: "The last 2 electrons become one lone pair on the central oxygen. Central now has only 6 electrons around it (4 bonding + 2 nonbonding) — an incomplete octet."
	},
	{
		id: "complete",
		title: "Share a lone pair to make a double bond",
		kicker: "Step 6",
		body: "Move one lone pair from a terminal oxygen into the adjacent bond. That terminal still has an octet, and the central atom now has 8 electrons. Formal charges appear: −1 on the single-bonded terminal, +1 on the central atom, 0 on the double-bonded terminal."
	},
	{
		id: "resonance",
		title: "Draw the other equivalent form",
		kicker: "Step 7",
		body: "The double bond could have been formed on the left instead of the right. Those two Lewis structures are equivalent resonance forms. The real molecule is the hybrid: equal O–O bonds of order 1.5, with the negative charge shared by both terminals."
	}
];
var QUIZ = [
	{
		id: "valence",
		prompt: "How many valence electrons must the Lewis structure of O₃ account for?",
		choices: [
			{
				id: "12",
				label: "12"
			},
			{
				id: "18",
				label: "18"
			},
			{
				id: "24",
				label: "24"
			},
			{
				id: "8",
				label: "8"
			}
		],
		answer: "18",
		why: "Three oxygen atoms × 6 valence electrons each = 18. Ozone is neutral, so no electrons are added or removed for charge."
	},
	{
		id: "central-fc",
		prompt: "In either valid resonance form, the formal charge on the central oxygen is",
		choices: [
			{
				id: "0",
				label: "0"
			},
			{
				id: "+1",
				label: "+1"
			},
			{
				id: "−1",
				label: "−1"
			},
			{
				id: "+2",
				label: "+2"
			}
		],
		answer: "+1",
		why: "Central oxygen: V = 6, N = 2 (one lone pair), B = 6 (one single + one double). FC = 6 − 2 − 3 = +1. That +1 is present in both forms and in the hybrid."
	},
	{
		id: "why-two",
		prompt: "Why do we draw two Lewis structures for ozone instead of one?",
		choices: [
			{
				id: "isomers",
				label: "They are different constitutional isomers that both exist"
			},
			{
				id: "resonance",
				label: "They are equivalent resonance forms of one molecule"
			},
			{
				id: "error",
				label: "One of them violates the octet rule, so we average them"
			},
			{
				id: "spin",
				label: "One is a singlet and the other is a triplet"
			}
		],
		answer: "resonance",
		why: "The two drawings differ only in which terminal oxygen holds the double bond. They are not isomers — they are resonance forms of a single electronic structure. The hybrid has two equal O–O bonds."
	},
	{
		id: "bond-order",
		prompt: "In the resonance hybrid, the bond order of each O–O bond is",
		choices: [
			{
				id: "1",
				label: "1"
			},
			{
				id: "1.5",
				label: "1.5"
			},
			{
				id: "2",
				label: "2"
			},
			{
				id: "3",
				label: "3"
			}
		],
		answer: "1.5",
		why: "Each bond is a single bond in one form and a double bond in the other. The average bond order is (1 + 2) / 2 = 1.5. Experimentally the two O–O lengths are equal, between a typical single and double bond."
	},
	{
		id: "shape",
		prompt: "VSEPR for the central atom (two bonds, one lone pair) predicts which molecular shape?",
		choices: [
			{
				id: "linear",
				label: "Linear"
			},
			{
				id: "bent",
				label: "Bent (angular)"
			},
			{
				id: "trigonal",
				label: "Trigonal planar"
			},
			{
				id: "tetrahedral",
				label: "Tetrahedral"
			}
		],
		answer: "bent",
		why: "Electron-domain geometry is trigonal planar (AX₂E), but the molecular shape names only the bonded atoms, so ozone is bent. The observed angle is 116.8°, a little under the 120° ideal because the lone pair takes more space."
	},
	{
		id: "dipole",
		prompt: "Ozone is a 1,3-dipole used in ozonolysis. Which charge pattern matches the hybrid?",
		choices: [
			{
				id: "all-zero",
				label: "All three oxygens are formally uncharged"
			},
			{
				id: "center-plus",
				label: "Central oxygen δ+, both terminals δ−"
			},
			{
				id: "center-minus",
				label: "Central oxygen δ−, both terminals δ+"
			},
			{
				id: "left-plus",
				label: "Only the left terminal is negative"
			}
		],
		answer: "center-plus",
		why: "The central oxygen is +1 in every form. The −1 is shared by the two terminals in the hybrid (about −½ each). That + − + pattern (more precisely δ− / δ+ / δ−) is the 1,3-dipole that adds across alkenes."
	}
];
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/70 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:not-disabled:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-bg hover:bg-accent/90",
			oxygen: "bg-oxygen text-fg hover:bg-oxygen-soft",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)] hover:bg-elevated",
			ghost: "bg-transparent text-muted hover:text-fg hover:bg-elevated",
			paper: "bg-paper text-paper-ink hover:bg-accent"
		},
		size: {
			default: "h-11 rounded-md px-4",
			sm: "h-9 rounded-sm px-3 text-sm",
			lg: "h-12 rounded-lg px-5",
			icon: "size-11 rounded-md"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Card = import_react.forwardRef(({ className, variant = "default", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("rounded-xl p-5 shadow-[var(--shadow-border)]", variant === "default" && "bg-surface text-fg", variant === "paper" && "bg-paper text-paper-ink shadow-[var(--shadow-paper)]", className),
	...props
}));
Card.displayName = "Card";
var CardHeader = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("mb-4 flex flex-col gap-1", className),
	...props
}));
CardHeader.displayName = "CardHeader";
var CardTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
	ref,
	className: cn("font-display text-xl font-medium leading-snug tracking-tight", className),
	...props
}));
CardTitle.displayName = "CardTitle";
var CardDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
CardDescription.displayName = "CardDescription";
var CardContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	ref,
	className: cn("", className),
	...props
}));
CardContent.displayName = "CardContent";
var ATOM_IDS = [
	"left",
	"center",
	"right"
];
var ATOM_R = 26;
var PAIR_DIST = 44;
var DOT_R = 3.4;
var PAIR_SEP = 5.2;
var BOND_INSET = 32;
function specFromProps(form, phase) {
	if (phase) return structureForPhase(phase, form);
	return STRUCTURES[form];
}
function bondEndpoints(bond) {
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
		py: ux
	};
}
function BondLines({ bond, stroke }) {
	const { x1, y1, x2, y2, px, py } = bondEndpoints(bond);
	const off = 4.2;
	if (bond.order === 1) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1,
		y1,
		x2,
		y2,
		stroke,
		strokeWidth: 2.6,
		strokeLinecap: "round"
	});
	if (bond.order === 2) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: x1 + px * off,
		y1: y1 + py * off,
		x2: x2 + px * off,
		y2: y2 + py * off,
		stroke,
		strokeWidth: 2.4,
		strokeLinecap: "round"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: x1 - px * off,
		y1: y1 - py * off,
		x2: x2 - px * off,
		y2: y2 - py * off,
		stroke,
		strokeWidth: 2.4,
		strokeLinecap: "round"
	})] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: x1 + px * off,
		y1: y1 + py * off,
		x2: x2 + px * off,
		y2: y2 + py * off,
		stroke,
		strokeWidth: 2.4,
		strokeLinecap: "round"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
		x1: x1 - px * off,
		y1: y1 - py * off,
		x2: x2 - px * off,
		y2: y2 - py * off,
		stroke,
		strokeWidth: 2.2,
		strokeLinecap: "round",
		strokeDasharray: "5 5"
	})] });
}
function LonePair({ cx, cy, angle, fill }) {
	const rad = angle * Math.PI / 180;
	const px = cx + Math.cos(rad) * PAIR_DIST;
	const py = cy + Math.sin(rad) * PAIR_DIST;
	const perp = rad + Math.PI / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: px + Math.cos(perp) * PAIR_SEP,
		cy: py + Math.sin(perp) * PAIR_SEP,
		r: DOT_R,
		fill
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: px - Math.cos(perp) * PAIR_SEP,
		cy: py - Math.sin(perp) * PAIR_SEP,
		r: DOT_R,
		fill
	})] });
}
function SingleDot({ cx, cy, angle, fill }) {
	const rad = angle * Math.PI / 180;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
		cx: cx + Math.cos(rad) * PAIR_DIST,
		cy: cy + Math.sin(rad) * PAIR_DIST,
		r: DOT_R,
		fill
	});
}
function chargeOffset(id) {
	if (id === "left") return {
		dx: -24,
		dy: -26
	};
	if (id === "right") return {
		dx: 24,
		dy: -26
	};
	return {
		dx: 34,
		dy: 28
	};
}
function ChargeBadge({ x, y, id, value, surface }) {
	if (value === 0) return null;
	const label = formatCharge(value);
	const negative = value < 0;
	const fill = negative ? "var(--color-paper-ink)" : "var(--color-oxygen)";
	const fg = negative ? "var(--color-paper)" : "var(--color-fg)";
	const ring = surface === "paper" ? "var(--color-paper)" : "var(--color-bg)";
	const { dx, dy } = chargeOffset(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x + dx}, ${y + dy})`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			r: 13,
			fill,
			stroke: ring,
			strokeWidth: 2
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
			textAnchor: "middle",
			dominantBaseline: "central",
			fill: fg,
			fontSize: label.length > 2 ? 10 : 12,
			fontWeight: 600,
			fontFamily: "Figtree, sans-serif",
			children: label
		})]
	});
}
function formCaption(form, phase) {
	if (phase) switch (phase) {
		case "count":
		case "atoms": return "PLACE THE ATOMS";
		case "skeleton": return "SINGLE BONDS";
		case "terminals": return "TERMINAL OCTETS";
		case "central": return "CENTRAL ATOM STILL SHORT";
		case "complete": return "RESONANCE FORM A";
		case "resonance": return form === "hybrid" ? "RESONANCE HYBRID" : `RESONANCE FORM ${form}`;
	}
	return form === "hybrid" ? "RESONANCE HYBRID" : form === "A" ? "RESONANCE FORM A" : "RESONANCE FORM B";
}
function AngleArc({ stroke }) {
	const c = ATOM_POSITIONS.center;
	const l = ATOM_POSITIONS.left;
	const r = ATOM_POSITIONS.right;
	const radius = 52;
	const a1 = Math.atan2(l.y - c.y, l.x - c.x);
	const a2 = Math.atan2(r.y - c.y, r.x - c.x);
	const p1 = {
		x: c.x + Math.cos(a1) * radius,
		y: c.y + Math.sin(a1) * radius
	};
	const p2 = {
		x: c.x + Math.cos(a2) * radius,
		y: c.y + Math.sin(a2) * radius
	};
	const labelR = 98;
	const mid = (a1 + a2) / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
		d: `M ${p1.x} ${p1.y} A ${radius} ${radius} 0 0 1 ${p2.x} ${p2.y}`,
		fill: "none",
		stroke,
		strokeWidth: 1.4,
		opacity: .7
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
		x: c.x + Math.cos(mid) * labelR,
		y: c.y + Math.sin(mid) * labelR,
		textAnchor: "middle",
		dominantBaseline: "middle",
		fill: stroke,
		stroke: "var(--color-paper)",
		strokeWidth: 5,
		paintOrder: "stroke",
		fontSize: 12,
		fontFamily: "Figtree, sans-serif",
		children: "116.8°"
	})] });
}
function LewisSvg({ form = "A", phase, selectedAtom = null, onSelectAtom, showCharges = true, showLonePairs = true, showBondOrders = false, showOctets = false, showAngle = false, className, surface = "paper" }) {
	const uid = (0, import_react.useId)();
	const spec = specFromProps(form, phase);
	const ink = surface === "paper" ? "var(--color-paper-ink)" : "var(--color-fg)";
	const muted = surface === "paper" ? "var(--color-paper-muted)" : "var(--color-muted)";
	const electrons = countElectrons(spec);
	const interactive = Boolean(onSelectAtom);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 640 400",
		className: cn("h-auto w-full", className),
		role: "img",
		"aria-label": "Lewis structure of ozone",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("radialGradient", {
				id: `${uid}-atom`,
				cx: "38%",
				cy: "32%",
				r: "70%",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--color-oxygen-soft)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--color-oxygen)"
				})]
			}) }),
			showAngle && phase !== "count" && phase !== "atoms" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AngleArc, { stroke: muted }) : null,
			spec.bonds.map((bond) => {
				const a = ATOM_POSITIONS[bond.from];
				const b = ATOM_POSITIONS[bond.to];
				const mx = (a.x + b.x) / 2;
				const my = (a.y + b.y) / 2;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BondLines, {
					bond,
					stroke: ink
				}), showBondOrders ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: mx,
					y: my + 18,
					textAnchor: "middle",
					fill: muted,
					fontSize: 11,
					fontFamily: "Figtree, sans-serif",
					children: bond.order === 1.5 ? "1.5" : bond.order === 2 ? "2" : "1"
				}) : null] }, `${bond.from}-${bond.to}`);
			}),
			ATOM_IDS.map((id) => {
				const pos = ATOM_POSITIONS[id];
				const atom = spec.atoms[id];
				const selected = selectedAtom === id;
				const octet = octetElectrons(spec, id);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
					showLonePairs ? atom.pairAngles.map((angle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LonePair, {
						cx: pos.x,
						cy: pos.y,
						angle,
						fill: ink
					}, `${id}-p-${angle}`)) : null,
					showLonePairs ? atom.singleDotAngles.map((angle) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SingleDot, {
						cx: pos.x,
						cy: pos.y,
						angle,
						fill: ink
					}, `${id}-d-${angle}`)) : null,
					interactive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: pos.x,
						cy: pos.y,
						r: 48,
						fill: "transparent",
						className: "cursor-pointer",
						onClick: () => onSelectAtom?.(id),
						tabIndex: 0,
						role: "button",
						"aria-label": `Select ${id} oxygen`,
						"aria-pressed": selected
					}) : null,
					selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: pos.x,
						cy: pos.y,
						r: 34,
						fill: "none",
						stroke: "var(--color-oxygen)",
						strokeWidth: 2,
						opacity: .9
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: pos.x,
						cy: pos.y,
						r: ATOM_R,
						fill: `url(#${uid}-atom)`,
						className: interactive ? "pointer-events-none" : void 0
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						cx: pos.x - 7,
						cy: pos.y - 8,
						r: 7,
						fill: "var(--color-fg)",
						opacity: .18,
						className: "pointer-events-none"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: pos.x,
						y: pos.y + 1,
						textAnchor: "middle",
						dominantBaseline: "middle",
						fill: "var(--color-fg)",
						fontSize: 22,
						fontWeight: 600,
						fontFamily: "Fraunces, serif",
						className: "pointer-events-none",
						children: "O"
					}),
					showCharges ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChargeBadge, {
						x: pos.x,
						y: pos.y,
						id,
						value: atom.formalCharge,
						surface
					}) : null,
					showOctets ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
						x: pos.x,
						y: pos.y + ATOM_R + 18,
						textAnchor: "middle",
						fill: muted,
						fontSize: 11,
						fontFamily: "Figtree, sans-serif",
						children: octet.total === 0 ? "" : `${octet.total} e⁻ around`
					}) : null
				] }, id);
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 320,
				y: 28,
				textAnchor: "middle",
				fill: muted,
				fontSize: 12,
				fontFamily: "Figtree, sans-serif",
				letterSpacing: "0.16em",
				children: formCaption(form, phase)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: 320,
				y: 378,
				textAnchor: "middle",
				fill: ink,
				fontSize: 13,
				fontFamily: "Figtree, sans-serif",
				children: electrons.total === 0 ? "18 valence electrons to place" : `${electrons.bonding} bonding  ·  ${electrons.nonbonding} nonbonding  ·  ${electrons.total} total`
			})
		]
	});
}
function BuildLab() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const step = BUILD_STEPS[index];
	const phase = step.id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "build",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
				kicker: "Construction",
				title: "Build the Lewis structure"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				variant: "paper",
				className: "p-3 sm:p-5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "rounded-lg bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
						form: phase === "resonance" ? "hybrid" : "A",
						phase,
						showCharges: phase === "complete" || phase === "resonance",
						showLonePairs: true,
						showOctets: phase === "terminals" || phase === "central",
						showBondOrders: phase === "complete" || phase === "resonance",
						showAngle: phase === "resonance",
						surface: "paper"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 overflow-hidden rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-4 flex gap-1",
						"aria-hidden": true,
						children: BUILD_STEPS.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: i <= index ? "h-1 flex-1 rounded-full bg-oxygen" : "h-1 flex-1 rounded-full bg-elevated" }, s.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-medium tracking-wide text-oxygen-soft uppercase",
						children: [
							step.kicker,
							" of ",
							BUILD_STEPS.length
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl text-fg",
						children: step.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base",
						children: step.body
					}),
					phase === "count" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ElectronMath, {}) : null,
					phase === "complete" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl text-sm text-fg",
						children: "Check the badges: the single-bonded terminal is −1, the central oxygen is +1, the double-bonded terminal is 0. Sum of formal charges = 0, matching the neutral molecule."
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center justify-between gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								onClick: () => setIndex((i) => Math.max(0, i - 1)),
								disabled: index === 0,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {}), "Back"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs text-subtle tabular-nums",
								children: [
									index + 1,
									" / ",
									BUILD_STEPS.length
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								onClick: () => setIndex((i) => Math.min(BUILD_STEPS.length - 1, i + 1)),
								disabled: index === BUILD_STEPS.length - 1,
								children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})]
							})
						]
					})
				]
			})
		]
	});
}
function Header({ kicker, title }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs font-medium tracking-widest text-oxygen-soft uppercase",
			children: kicker
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "mt-1 font-display text-3xl text-fg",
			children: title
		})]
	});
}
function ElectronMath() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-4 grid gap-2 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MathChip, {
				label: "Oxygen atoms",
				value: "3"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MathChip, {
				label: "Valence per O",
				value: "6"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MathChip, {
				label: "Total to place",
				value: "18"
			})
		]
	});
}
function MathChip({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-bg px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-2xl tabular-nums text-fg",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted",
			children: label
		})]
	});
}
var ATOMS = [
	"left",
	"center",
	"right"
];
function ChargeLab() {
	const [atom, setAtom] = (0, import_react.useState)("center");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "charge",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-oxygen-soft uppercase",
				children: "Formal charge"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl text-fg",
				children: "Who is charged, and why"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base",
				children: [
					"Formal charge is a bookkeeping tool, not a measured charge. It asks: if we split every bond pair evenly, how many electrons does this atom own compared with its group number? The formula is",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-fg",
						children: "FC = V − N − B/2"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					variant: "paper",
					className: "p-3 sm:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
						form: "A",
						selectedAtom: atom,
						onSelectAtom: setAtom,
						showCharges: true,
						surface: "paper"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-3",
					children: ATOMS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChargeCard, {
						id,
						active: atom === id,
						onSelect: () => setAtom(id)
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
					title: "Sum must match the real charge",
					children: "(−1) + (+1) + (0) = 0. Ozone is a neutral molecule, so the formal charges have to cancel. If they do not, the electron count is wrong."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Note, {
					title: "Prefer small charges, octets kept",
					children: "You cannot give every oxygen an octet in the open structure without creating +1/−1. That is acceptable: the alternative (incomplete octets, or a cyclic isomer) is either invalid or not the observed molecule."
				})]
			})
		]
	});
}
function ChargeCard({ id, active, onSelect }) {
	const atom = FORM_A.atoms[id];
	const { bonding, nonbonding } = octetElectrons(FORM_A, id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onSelect,
		className: cn("rounded-xl p-4 text-left shadow-[var(--shadow-border)] transition-colors duration-150", active ? "bg-elevated" : "bg-surface hover:bg-elevated/60"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-medium text-fg",
					children: ATOM_LABELS[id]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-2xl text-oxygen-soft",
					children: formatCharge(atom.formalCharge)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 font-mono text-xs text-muted",
				children: [
					6,
					" − ",
					nonbonding,
					" − ",
					bonding / 2,
					" =",
					" ",
					formatCharge(atom.formalCharge)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-xs leading-relaxed text-muted",
				children: [
					id === "left" && "Three lone pairs (N = 6) and one single bond (B = 2). This oxygen owns one extra electron relative to a free atom.",
					id === "center" && "One lone pair (N = 2) and three bonding pairs (B = 6). The central atom is electron-deficient on paper — that is why ozone is electrophilic there.",
					id === "right" && "Two lone pairs (N = 4) and a double bond (B = 4). This matches a neutral oxygen with an octet."
				]
			})
		]
	});
}
function Note({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-medium text-fg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children
		})]
	});
}
function AtomInspector({ atomId, form }) {
	if (!atomId) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "rounded-lg bg-elevated/70 p-4 text-sm text-muted",
		children: "Select an oxygen atom on the structure to see its formal-charge arithmetic. Formal charge is FC = V − N − B/2."
	});
	const spec = STRUCTURES[form];
	const { bonding, nonbonding, total } = octetElectrons(spec, atomId);
	const fc = spec.atoms[atomId].formalCharge;
	const v = 6;
	const bHalf = bonding / 2;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg bg-elevated p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs font-medium tracking-wide text-muted uppercase",
				children: [ATOM_LABELS[atomId], " oxygen"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-display text-2xl text-fg",
				children: ["FC = ", formatCharge(fc)]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 font-mono text-sm text-fg",
				children: "FC = V − N − B/2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 font-mono text-sm text-muted",
				children: [
					"FC = ",
					v,
					" − ",
					nonbonding,
					" − ",
					bHalf,
					" = ",
					formatCharge(fc)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-4 grid grid-cols-3 gap-2 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "V valence",
						value: String(v)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "N nonbonding",
						value: String(nonbonding)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "B bonding",
						value: String(bonding)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-xs text-muted",
				children: [
					"Electrons around this atom (octet count): ",
					total,
					". Oxygen wants 8.",
					form === "hybrid" && atomId !== "center" ? " The extra single dot is the delocalized electron that the two terminals share." : null
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-bg/50 px-2 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-display text-lg tabular-nums text-fg",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-xs text-muted",
			children: label
		})]
	});
}
function FormToggle({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-3 gap-1 rounded-lg bg-bg p-1",
		role: "tablist",
		"aria-label": "Resonance form",
		children: [
			{
				id: "A",
				label: "Form A"
			},
			{
				id: "hybrid",
				label: "Hybrid"
			},
			{
				id: "B",
				label: "Form B"
			}
		].map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			role: "tab",
			"aria-selected": value === opt.id,
			onClick: () => onChange(opt.id),
			className: cn("h-11 rounded-md text-sm font-medium transition-colors duration-150", value === opt.id ? "bg-paper text-paper-ink" : "text-muted hover:text-fg"),
			children: opt.label
		}, opt.id))
	});
}
function Explorer() {
	const [form, setForm] = (0, import_react.useState)("hybrid");
	const [atom, setAtom] = (0, import_react.useState)("center");
	const [showCharges, setShowCharges] = (0, import_react.useState)(true);
	const [showLonePairs, setShowLonePairs] = (0, import_react.useState)(true);
	const [showBondOrders, setShowBondOrders] = (0, import_react.useState)(true);
	const [showOctets, setShowOctets] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const target = event.target;
			if (target && [
				"INPUT",
				"TEXTAREA",
				"SELECT"
			].includes(target.tagName)) return;
			if (event.key === "1") setForm("A");
			if (event.key === "2") setForm("hybrid");
			if (event.key === "3") setForm("B");
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "explore",
		className: "scroll-mt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
				variant: "paper",
				className: "p-3 sm:p-5 lg:col-span-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
					form,
					selectedAtom: atom,
					onSelectAtom: setAtom,
					showCharges,
					showLonePairs,
					showBondOrders,
					showOctets,
					showAngle: form === "hybrid",
					surface: "paper"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 lg:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormToggle, {
						value: form,
						onChange: setForm
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AtomInspector, {
						atomId: atom,
						form
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-2 gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Formal charges",
								on: showCharges,
								onClick: () => setShowCharges((v) => !v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Lone pairs",
								on: showLonePairs,
								onClick: () => setShowLonePairs((v) => !v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Bond orders",
								on: showBondOrders,
								onClick: () => setShowBondOrders((v) => !v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
								label: "Octet counts",
								on: showOctets,
								onClick: () => setShowOctets((v) => !v)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden text-xs text-subtle sm:block",
						children: "Keys 1 / 2 / 3 switch Form A, hybrid, and Form B."
					})
				]
			})]
		})
	});
}
function Toggle({ label, on, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		type: "button",
		variant: on ? "paper" : "outline",
		size: "sm",
		onClick,
		"aria-pressed": on,
		className: cn("h-11 justify-center"),
		children: label
	});
}
function GeometryLab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "geometry",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-oxygen-soft uppercase",
				children: "Shape"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl text-fg",
				children: "Bent, not linear"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base",
				children: "Lewis structures tell you connectivity and electrons. VSEPR turns that into a shape. The central oxygen has two bonding domains and one lone pair (AX₂E): electron geometry trigonal planar, molecular geometry bent."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					variant: "paper",
					className: "p-3 sm:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
						form: "hybrid",
						showCharges: true,
						showAngle: true,
						showBondOrders: true,
						surface: "paper"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Electron domains",
							v: "3 (AX₂E)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Electron geometry",
							v: "Trigonal planar"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Molecular shape",
							v: "Bent (angular)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Bond angle",
							v: "116.8° (vs 120° ideal)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Point group",
							v: "C₂v"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
							k: "Each O–O length",
							v: "1.278 Å (equal)"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-sm leading-relaxed text-muted",
				children: "The lone pair occupies more space than a bonding pair, so the angle closes slightly from 120°. A linear O=O=O drawing would put 180° at the center and would not match microwave spectroscopy — or the 1,3-dipole chemistry organic courses use in ozonolysis."
			})
		]
	});
}
function Row({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-baseline justify-between gap-4 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-right text-sm font-medium text-fg",
			children: v
		})]
	});
}
function QuizLab() {
	const [answers, setAnswers] = (0, import_react.useState)({});
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const score = (0, import_react.useMemo)(() => {
		return QUIZ.reduce((sum, q) => sum + (answers[q.id] === q.answer ? 1 : 0), 0);
	}, [answers]);
	const complete = Object.keys(answers).length === QUIZ.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "quiz",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-oxygen-soft uppercase",
				children: "Check yourself"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl text-fg",
				children: "Six questions on O₃"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm text-muted",
				children: "Choose an answer for each item, then reveal the score. Explanations use the same formal-charge arithmetic as the figure."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-6 flex flex-col gap-4",
				children: QUIZ.map((q, index) => {
					const picked = answers[q.id];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)] sm:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm font-medium text-fg",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mr-2 text-muted tabular-nums",
									children: [index + 1, "."]
								}), q.prompt]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 grid gap-2",
								children: q.choices.map((choice) => {
									const selected = picked === choice.id;
									const correct = submitted && choice.id === q.answer;
									const wrong = submitted && selected && choice.id !== q.answer;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											if (submitted) return;
											setAnswers((prev) => ({
												...prev,
												[q.id]: choice.id
											}));
										},
										className: cn("flex min-h-11 items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors duration-150", selected && !submitted && "bg-elevated text-fg", !selected && !submitted && "bg-bg text-muted hover:text-fg", correct && "bg-elevated text-fg", wrong && "bg-oxygen/15 text-fg", submitted && !correct && !wrong && "bg-bg text-subtle"),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: choice.label }),
											correct ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-oxygen-soft" }) : null,
											wrong ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4 text-oxygen-soft" }) : null
										]
									}, choice.id);
								})
							}),
							submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted",
								children: q.why
							}) : null
						]
					}, q.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-wrap items-center gap-3",
				children: [!submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: () => setSubmitted(true),
					disabled: !complete,
					children: "Check answers"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-2xl text-fg tabular-nums",
					children: [
						score,
						" / ",
						QUIZ.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					onClick: () => {
						setAnswers({});
						setSubmitted(false);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, {}), "Try again"]
				})] }), !complete && !submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: "Answer every item to check."
				}) : null]
			})
		]
	});
}
function ResonanceLab() {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)("A");
	(0, import_react.useEffect)(() => {
		if (!playing) return;
		if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setPlaying(false);
			return;
		}
		const id = window.setInterval(() => {
			setForm((current) => current === "A" ? "B" : "A");
		}, 1600);
		return () => window.clearInterval(id);
	}, [playing]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "resonance",
		className: "scroll-mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-oxygen-soft uppercase",
				children: "Resonance"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl text-fg",
				children: "Two drawings, one molecule"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base",
				children: "The double bond is not trapped on one side. Electrons are delocalized over the three-atom π system. We draw two Lewis structures and a double-headed arrow to mean: the real electron density is the average."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					variant: "paper",
					className: "p-3 sm:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
						form: "A",
						showCharges: true,
						showBondOrders: true,
						surface: "paper"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
					variant: "paper",
					className: "p-3 sm:p-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
						form: "B",
						showCharges: true,
						showBondOrders: true,
						surface: "paper"
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-center font-display text-2xl text-muted",
				"aria-hidden": true,
				children: "↔"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				variant: "paper",
				className: "mt-2 p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-paper-muted",
						children: "The hybrid is what spectroscopy sees: equal bond lengths, bond order 1.5, negative charge shared by both terminals."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						className: "shrink-0 border-paper-line bg-paper text-paper-ink hover:bg-paper-line",
						onClick: () => {
							setPlaying((p) => !p);
							if (!playing) setForm("A");
						},
						children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {}), playing ? "Pause flip" : "Flip A ↔ B"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LewisSvg, {
					form: playing ? form : "hybrid",
					showCharges: true,
					showBondOrders: true,
					surface: "paper"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Not isomers",
						body: "The molecule does not oscillate between A and B. Those are bookkeeping drawings of one electronic structure."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Bond order 1.5",
						body: "Each O–O link is a single bond in one form and a double in the other. Average: 1.5. Measured lengths are equal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
						title: "Partial charges",
						body: "Central oxygen stays +1. The −1 is split, about −½ on each terminal in the hybrid — the 1,3-dipole of ozonolysis."
					})
				]
			})
		]
	});
}
function Fact({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "rounded-xl bg-surface p-4 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-medium text-fg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: body
		})]
	});
}
var NAV = [
	{
		href: "#explore",
		label: "Structure"
	},
	{
		href: "#build",
		label: "Build"
	},
	{
		href: "#charge",
		label: "Charge"
	},
	{
		href: "#resonance",
		label: "Resonance"
	},
	{
		href: "#geometry",
		label: "Shape"
	},
	{
		href: "#quiz",
		label: "Quiz"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-h-svh bg-bg text-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
					className: "sticky top-0 z-30 border-b border-border/80 bg-bg/92 backdrop-blur-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto max-w-6xl px-4 py-3 sm:px-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex items-center justify-between gap-4",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#top",
								className: "flex items-baseline gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-lg text-fg",
									children: "Ozone Lewis Lab"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-sm text-oxygen-soft",
									children: "O₃"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "mt-1 flex items-center gap-1 overflow-x-auto",
							children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: item.href,
								className: "inline-flex h-11 shrink-0 items-center px-3 text-sm text-muted transition-colors hover:text-fg",
								children: item.label
							}, item.href))
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					id: "top",
					className: "mx-auto flex max-w-6xl flex-col gap-20 px-4 py-10 sm:px-6 sm:py-14",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Explorer, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyOzone, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BuildLab, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChargeLab, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResonanceLab, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GeometryLab, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuizLab, {})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "border-t border-border",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto max-w-6xl px-4 py-8 text-sm text-subtle sm:px-6",
						children: "Formal charge FC = V − N − B/2. Ozone data: bent C₂v, 116.8°, equal O–O bonds of order 1.5. Drawn for a first-semester organic course."
					})
				})
			]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "max-w-3xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-widest text-oxygen-soft uppercase",
				children: "Collegiate organic chemistry"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl leading-[1.12] tracking-tight text-fg sm:text-5xl",
				children: "The Lewis structure of ozone, including the charges textbooks skip past."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg",
				children: "O₃ looks simple until you count electrons. The valid open structure cannot give every oxygen a formal charge of zero. Click atoms on the figure, step through the construction, then check the resonance hybrid that actually exists."
			})
		]
	});
}
function WhyOzone() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "grid gap-4 sm:grid-cols-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blurb, {
				title: "18 electrons, not 24",
				body: "Three oxygens × 6 valence electrons. A common error is treating ozone like a filled-octet cartoon with too many dots."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blurb, {
				title: "Formal charge is required",
				body: "Open O–O–O with octets forces +1 on the central atom and −1 on a terminal. That pattern is the 1,3-dipole of ozonolysis."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Blurb, {
				title: "Resonance is the molecule",
				body: "Neither Form A nor Form B is “the” structure. Equal bond lengths mean the hybrid: bond order 1.5 on both sides."
			})
		]
	});
}
function Blurb({ title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-xl bg-surface p-5 shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-xl text-fg",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted",
			children: body
		})]
	});
}
//#endregion
export { Home as component };
