import { createFileRoute, Link } from "@tanstack/react-router";
import heroFamily from "@/assets/hero-family.jpg";
import { products } from "@/lib/products";
import { EnquiryBanner } from "@/components/EnquiryBanner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Trustline Finance — Personal, Business & Home Loans",
        description:
          "Personal loans, business loans, overdraft facilities, home loans and insurance — one honest conversation, no fine-print surprises.",
      },
      {
        property: "og:title",
        content: "Trustline Finance — Personal, Business & Home Loans",
      },
      {
        property: "og:description",
        content:
          "Five considered products, one honest conversation. No fine-print surprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  {
    n: "01",
    title: "You tell us the goal",
    copy: "One conversation about what you're actually trying to do.",
  },
  {
    n: "02",
    title: "We show every option",
    copy: "Illustrative rates, side by side, before you commit to anything.",
  },
  {
    n: "03",
    title: "We stay on the line",
    copy: "The same person handles your file from first call to final signature.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <header className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            style={{ animation: "rise 500ms var(--ease-editorial) both" }}
          >
            A trusted lending house
          </p>
          <h1
            className="font-display text-5xl font-semibold italic leading-[1.02] tracking-tight text-balance md:text-7xl"
            style={{
              animation: "wipe 700ms var(--ease-editorial) both",
              animationDelay: "120ms",
            }}
          >
            The steady hand behind your next chapter.
          </h1>
          <p
            className="mt-6 max-w-[52ch] text-lg text-pretty text-muted-foreground"
            style={{
              animation: "rise 500ms var(--ease-editorial) both",
              animationDelay: "320ms",
            }}
          >
            Five considered products, one honest conversation. No fine-print
            surprises — just clarity about what you can afford and what we can
            do.
          </p>
          <div
            className="mt-8 flex flex-wrap items-center gap-4"
            style={{
              animation: "rise 500ms var(--ease-editorial) both",
              animationDelay: "440ms",
            }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-200 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Start a confidential enquiry
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-all duration-200 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:border-foreground/30"
            >
              See your options
            </a>
          </div>
        </div>
        <img
          src={heroFamily}
          alt="A family reviewing loan documents together at a sunlit table"
          width={912}
          height={1008}
          className="aspect-[9/10] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
        />
      </header>

      {/* Journey strip */}
      <section
        id="journey"
        className="border-y border-border/70 px-6 py-14 scroll-mt-16"
      >
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-8 sm:grid-cols-3">
          {steps.map((s) => (
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

      {/* Products */}
      <section
        id="products"
        className="mx-auto max-w-[1400px] px-6 py-16 scroll-mt-16"
      >
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold italic tracking-tight md:text-4xl">
            Five ways we help
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Illustrative only
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {products.map((p) => (
            <Link
              key={p.name}
              to={p.slug}
              className="group flex flex-col rounded-xl border border-border/70 bg-card p-5 transition-all duration-200 ease-[var(--ease-editorial)] hover:-translate-y-1 hover:border-primary/40"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {p.tag}
              </span>
              <h3 className="mt-6 font-display text-2xl italic transition-colors group-hover:text-primary">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-pretty text-muted-foreground">
                {p.copy}
              </p>
              <span className="mt-5 text-xs text-muted-foreground transition-colors group-hover:text-primary">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="border-y border-border/70 bg-card px-6 py-16">
        <div className="mx-auto max-w-[70ch] text-center">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            From a client file
          </p>
          <blockquote className="font-display text-2xl font-medium italic leading-snug text-balance md:text-3xl">
            "They talked me out of a bigger loan than I needed. That's when I
            knew I could trust them."
          </blockquote>
          <p className="mt-5 text-sm text-muted-foreground">
            — M. Adeyemi, home loan client since 2019
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <div className="mx-auto max-w-[900px] px-6 py-16">
        <EnquiryBanner />
      </div>
    </div>
  );
}
