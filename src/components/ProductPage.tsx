import { Link } from "@tanstack/react-router";
import { products, type ProductSummary } from "@/lib/products";
import { EnquiryBanner } from "./EnquiryBanner";

export type ProductDetail = ProductSummary & {
  headline: string;
  intro: string;
  fit: { title: string; copy: string }[];
  steps: { n: string; title: string; copy: string }[];
  expect: string[];
};

export function ProductPage({ detail }: { detail: ProductDetail }) {
  const others = products.filter((p) => p.slug !== detail.slug);

  return (
    <div>
      {/* Hero */}
      <header className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 px-6 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div style={{ animation: "rise 500ms var(--ease-editorial) both" }}>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            {detail.tag}
          </p>
          <h1 className="font-display text-4xl font-semibold italic leading-[1.05] tracking-tight text-balance md:text-6xl">
            {detail.headline}
          </h1>
          <p className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground">
            {detail.intro}
          </p>
        </div>
        <aside
          className="rounded-xl border border-border/70 bg-card p-6"
          style={{
            animation: "rise 500ms var(--ease-editorial) both",
            animationDelay: "160ms",
          }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            At a glance
          </p>
          <ul className="mt-4 space-y-3">
            {detail.expect.map((e) => (
              <li key={e} className="flex gap-3 text-sm text-pretty">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 border-t border-border/70 pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Illustrative only — not an offer
          </p>
        </aside>
      </header>

      {/* Who it's for */}
      <section className="border-y border-border/70 px-6 py-14">
        <div className="mx-auto max-w-[1400px]">
          <h2 className="font-display text-3xl font-semibold italic tracking-tight">
            Who it&apos;s for
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.fit.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border/70 bg-card p-5"
              >
                <h3 className="font-display text-xl italic">{f.title}</h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {f.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-[1400px] px-6 py-14">
        <h2 className="font-display text-3xl font-semibold italic tracking-tight">
          How it works
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {detail.steps.map((s) => (
            <div key={s.n} className="flex gap-4">
              <span className="pt-1 font-mono text-xs text-accent">{s.n}</span>
              <div>
                <h3 className="font-display text-xl italic">{s.title}</h3>
                <p className="mt-1 max-w-[34ch] text-sm text-pretty text-muted-foreground">
                  {s.copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-[900px] px-6 pb-16">
        <EnquiryBanner />
      </div>

      {/* Other products */}
      <section className="border-t border-border/70 px-6 py-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold italic tracking-tight">
              Other ways we help
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Explore
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                className="group rounded-xl border border-border/70 bg-card p-5 transition-all duration-200 ease-[var(--ease-editorial)] hover:-translate-y-1 hover:border-primary/40"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {p.tag}
                </span>
                <h3 className="mt-5 font-display text-xl italic transition-colors group-hover:text-primary">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-pretty text-muted-foreground">
                  {p.copy}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
