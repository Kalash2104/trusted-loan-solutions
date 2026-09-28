import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, type ProductDetail } from "@/components/ProductPage";

const personal: ProductDetail = {
  slug: "/personal-loans",
  tag: "Personal",
  name: "Personal loans",
  copy: "Fixed repayments for the things you can name.",
  headline: "A loan sized to the thing you're actually doing.",
  intro:
    "A wedding, a kitchen, a tidy-up of expensive debts — a personal loan gives you a fixed amount, a fixed repayment and an end date you can see from day one.",
  fit: [
    {
      title: "Consolidating expensive debts",
      copy: "Roll several repayments into one fixed plan and see the finish line.",
    },
    {
      title: "Home improvements",
      copy: "Fund the project in one go instead of piecemeal on cards.",
    },
    {
      title: "Family milestones",
      copy: "Weddings, education, relocating — planned costs with planned repayments.",
    },
    {
      title: "A named, one-off goal",
      copy: "If you can describe it in a sentence, we can size it honestly.",
    },
  ],
  steps: [
    {
      n: "01",
      title: "You tell us the goal",
      copy: "One conversation about what you're actually trying to do and what fits your budget.",
    },
    {
      n: "02",
      title: "We show the options",
      copy: "Illustrative rates and repayments side by side, before anything is committed.",
    },
    {
      n: "03",
      title: "You sign once, then it's fixed",
      copy: "Fixed repayments, a set end date, and the same person looking after your file.",
    },
  ],
  expect: [
    "Fixed monthly repayments for the full term",
    "A clear end date — the loan is closed, not open-ended",
    "An eligibility conversation before any credit search",
    "Repayment terms shaped around your budget",
  ],
};

export const Route = createFileRoute("/personal-loans")({
  head: () => ({
    meta: [
      {
        title: "Personal Loans — Trustline Finance",
        description:
          "Fixed repayments for the things you can name — debt consolidation, home improvements and family milestones. All figures illustrative only.",
      },
      { property: "og:title", content: "Personal Loans — Trustline Finance" },
      {
        property: "og:description",
        content:
          "A personal loan with a fixed repayment and an end date you can see from day one.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProductPage detail={personal} />,
});
