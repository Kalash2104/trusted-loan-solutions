import { createFileRoute } from "@tanstack/react-router";
import aboutOffice from "@/assets/about-office.jpg";
import { EnquiryBanner } from "@/components/EnquiryBanner";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Us — Trustline Finance",
        description:
          "Who we are: a lending and insurance house built on plain words, one person per file, and the willingness to talk you out of a loan.",
      },
      { property: "og:title", content: "About Us — Trustline Finance" },
      {
        property: "og:description",
        content:
          "The lending house that learned to say no — our story, values and promises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    title: "Plain words",
    copy: "Every term explained in language you'd use at your own kitchen table. If we can't say it simply, we don't hide it in small print.",
  },
  {
    title: "One person, one file",
    copy: "The person who takes your first call handles your last signature. You are never passed between departments.",
  },
  {
    title: "Fit before size",
    copy: "We'd rather write a smaller loan you can carry than a bigger one we can be proud of. We will sometimes talk you out of borrowing.",
  },
  {
    title: "Illustrative honesty",
    copy: "Every figure on this site is labelled illustrative until it's confirmed in writing for your specific case. No teaser rates, no bait.",
  },
];

function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <header className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <p
            className="mb-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
            style={{ animation: "rise 500ms var(--ease-editorial) both" }}
          >
            Who we are
          </p>
          <h1
            className="font-display text-4xl font-semibold italic leading-[1.05] tracking-tight text-balance md:text-6xl"
            style={{
              animation: "wipe 700ms var(--ease-editorial) both",
              animationDelay: "120ms",
            }}
          >
            The lending house that learned to say no.
          </h1>
          <p
            className="mt-6 max-w-[56ch] text-lg text-pretty text-muted-foreground"
            style={{
              animation: "rise 500ms var(--ease-editorial) both",
              animationDelay: "320ms",
            }}
          >
            Trustline Finance was built on a simple observation: most people
            don't regret the loan they took — they regret the loan they were
            steered into. So we do the opposite. We ask what you're actually
            trying to do, show you every option honestly, and sometimes tell
            you not to borrow at all.
          </p>
        </div>
        <img
          src={aboutOffice}
          alt="An adviser and clients talking through a plan across a sunlit table"
          width={1200}
          height={912}
          className="aspect-[4/3] w-full rounded-xl object-cover outline-1 -outline-offset-1 outline-black/5"
        />
      </header>

      {/* Story */}
      <section className="border-y border-border/70 bg-card px-6 py-14">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr]">
          <h2 className="font-display text-3xl font-semibold italic tracking-tight">
            How we work
          </h2>
          <div className="max-w-[64ch] space-y-4 text-pretty text-muted-foreground">
            <p>
              Every enquiry starts with a conversation, not an application
              form. We want to know what you're trying to do, what a
              comfortable monthly repayment looks like for you, and what would
              happen if a bad month arrived. Only then do we talk products.
            </p>
            <p>
              When we do, everything is shown side by side: illustrative rates,
              terms and totals, compared openly before you choose. The same
              adviser who takes your first call carries your file through to
              the final signature — and stays available for every review
              after.
            </p>
            <p>
              We lend across personal loans, business loans, overdraft
              facilities and home loans, and we arrange insurance to protect
              what the lending builds. One house, one standard.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-[1400px] px-6 py-14">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="font-display text-3xl font-semibold italic tracking-tight">
            What we promise
          </h2>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Our standard
          </span>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="rounded-xl border border-border/70 bg-card p-5"
            >
              <span className="font-mono text-xs text-accent">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl italic">{v.title}</h3>
              <p className="mt-2 text-sm text-pretty text-muted-foreground">
                {v.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-[900px] px-6 pb-16">
        <EnquiryBanner />
      </div>
    </div>
  );
}
