import { Link } from "@tanstack/react-router";
import { products } from "@/lib/products";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-border/70 bg-background/90 px-6 py-4 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6">
        <Link to="/" className="font-display text-2xl italic tracking-tight">
          Trustline Finance
        </Link>
        <div className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={p.slug}
              className="whitespace-nowrap transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {p.name}
            </Link>
          ))}
          <Link
            to="/about"
            className="whitespace-nowrap transition-colors hover:text-primary"
            activeProps={{ className: "text-primary" }}
          >
            About us
          </Link>
        </div>
        <div className="flex items-center gap-5">
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-accent xl:inline">
            Lending &amp; Insurance
          </span>
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all duration-200 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Talk to us
          </a>
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-border/70 px-6 py-12 scroll-mt-16"
    >
      <div className="mx-auto flex max-w-[1400px] flex-col gap-10 lg:flex-row lg:justify-between">
        <div>
          <div className="font-display text-2xl italic">Trustline Finance</div>
          <p className="mt-3 max-w-[30ch] text-xs text-pretty text-muted-foreground">
            Rates and figures shown across this site are illustrative examples
            for discussion only, not offers or real claims.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
            Products
          </p>
          <div className="mt-3 grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={p.slug}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {p.name}
              </Link>
            ))}
            <Link
              to="/about"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              About us
            </Link>
          </div>
        </div>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-foreground">
            Contact &amp; regulatory
          </p>
          <p>Registered lending &amp; insurance services company.</p>
          <p>Registered office: [client's registered address].</p>
          <p>enquiries@trustline.example · 0800 000 0000</p>
        </div>
      </div>
    </footer>
  );
}
