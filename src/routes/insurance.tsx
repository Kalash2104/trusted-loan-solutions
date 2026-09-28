import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, type ProductDetail } from "@/components/ProductPage";

const insurance: ProductDetail = {
  slug: "/insurance",
  tag: "Cover",
  name: "Insurance",
  copy: "Protection for the plan you've just built.",
  headline: "Protection for the plan you've just built.",
  intro:
    "A loan, a home, a business — each one is a plan. Insurance is how the plan survives the things you can't schedule. We only recommend cover we'd hold ourselves, explained without jargon.",
  fit: [
    {
      title: "Life cover alongside a mortgage",
      copy: "So the home survives even if the worst happens.",
    },
    {
      title: "Income protection",
      copy: "Keeps repayments running through illness or injury.",
    },
    {
      title: "Key-person cover",
      copy: "Protects a business that depends on one or two people.",
    },
    {
      title: "Family and asset cover",
      copy: "Sensible, right-sized protection for what you've built.",
    },
  ],
  steps: [
    {
      n: "01",
      title: "We map what would break",
      copy: "A short, honest look at what a bad month would do to the plan.",
    },
    {
      n: "02",
      title: "We show only cover that fits",
      copy: "Plain-language summaries and illustrative premiums, with anything unsuitable ruled out.",
    },
    {
      n: "03",
      title: "We stay for the claim",
      copy: "Policies reviewed with you as life changes, and a named person when you need it most.",
    },
  ],
  expect: [
    "Plain-language policy summaries before you sign",
    "Cover matched to your loan, home or business — not sold generically",
    "A named person to call at claim time",
    "A review at every life change: move, marry, expand",
  ],
};

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      {
        title: "Insurance — Trustline Finance",
        description:
          "Life cover, income protection and key-person insurance — right-sized protection for the plan you've just built. All figures illustrative only.",
      },
      { property: "og:title", content: "Insurance — Trustline Finance" },
      {
        property: "og:description",
        content:
          "Only cover we'd hold ourselves, explained without jargon and reviewed as life changes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProductPage detail={insurance} />,
});
