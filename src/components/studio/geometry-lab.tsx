import { Card } from "@/components/ui/card";
import { LewisSvg } from "@/components/molecule/lewis-svg";

export function GeometryLab() {
  return (
    <section id="geometry" className="scroll-mt-24">
      <p className="text-xs font-medium tracking-widest text-oxygen-soft uppercase">
        Shape
      </p>
      <h2 className="mt-1 font-display text-3xl text-fg">
        Bent, not linear
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
        Lewis structures tell you connectivity and electrons. VSEPR turns that
        into a shape. The central oxygen has two bonding domains and one lone
        pair (AX₂E): electron geometry trigonal planar, molecular geometry
        bent.
      </p>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Card variant="paper" className="p-3 sm:p-4">
          <LewisSvg form="hybrid" showCharges showAngle showBondOrders surface="paper" />
        </Card>
        <div className="grid gap-3">
          <Row k="Electron domains" v="3 (AX₂E)" />
          <Row k="Electron geometry" v="Trigonal planar" />
          <Row k="Molecular shape" v="Bent (angular)" />
          <Row k="Bond angle" v="116.8° (vs 120° ideal)" />
          <Row k="Point group" v="C₂v" />
          <Row k="Each O–O length" v="1.278 Å (equal)" />
        </div>
      </div>

      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
        The lone pair occupies more space than a bonding pair, so the angle
        closes slightly from 120°. A linear O=O=O drawing would put 180° at
        the center and would not match microwave spectroscopy — or the 1,3-dipole
        chemistry organic courses use in ozonolysis.
      </p>
    </section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 rounded-xl bg-surface px-4 py-3 shadow-[var(--shadow-border)]">
      <span className="text-sm text-muted">{k}</span>
      <span className="text-right text-sm font-medium text-fg">{v}</span>
    </div>
  );
}
