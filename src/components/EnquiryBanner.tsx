export function EnquiryBanner() {
  return (
    <div className="flex flex-col justify-between gap-6 rounded-xl bg-primary p-8 text-primary-foreground md:flex-row md:items-center md:p-10">
      <div>
        <h2 className="font-display text-3xl font-semibold italic tracking-tight">
          Ready when you are.
        </h2>
        <p className="mt-2 max-w-[40ch] text-sm text-pretty text-primary-foreground/75">
          A 15-minute call. No obligation, no jargon.
        </p>
      </div>
      <a
        href="#contact"
        className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all duration-200 ease-[var(--ease-editorial)] hover:-translate-y-0.5 hover:bg-accent/90"
      >
        Book your enquiry
      </a>
    </div>
  );
}
