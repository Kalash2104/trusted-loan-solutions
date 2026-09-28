import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, type ProductDetail } from "@/components/ProductPage";

const business: ProductDetail = {
  slug: "/business-loans",
  tag: "Business",
  name: "Business loans",
  copy: "Working capital sized to your order book.",
  headline: "Working capital that matches your order book.",
  intro:
    "Cash that arrives when the work does — not months later. We lend against the reality of your trading cycle, with repayments that follow it.",
  fit: [
    {
      title: "Bridging invoice gaps",
      copy: "Cover the weeks between paying suppliers and getting paid.",
    },
    {
      title: "Equipment and fit-out",
      copy: "Buy the machine, vehicle or premises work the business needs now.",
    },
    {
      title: "Growth and stock",
      copy: "Fund a bigger order or a new location without draining reserves.",
    },
    {
      title: "Seasonal trading",
      copy: "Repayments that ease in the quiet months instead of breaking you.",
    },
  ],
  steps: [
    {
      n: "01",
      title: "We read your cycle",
      copy: "A short, honest review of how money actually moves through your business.",
    },
    {
      n: "02",
      title: "We size it to reality",
      copy: "An amount and schedule matched to your order book, with illustrative terms shown upfront.",
    },
    {
      n: "03",
      title: "One manager, start to finish",
      copy: "A named relationship manager handles the file — and the top-up conversation later.",
    },
  ],
  expect: [
    "Repayment schedules matched to your cash cycle",
    "Secured and unsecured routes, discussed openly",
    "A named relationship manager, not a queue",
    "Top-up reviews as your order book grows",
  ],
};

export const Route = createFileRoute("/business-loans")({
  head: () => ({
    meta: [
      {
        title: "Business Loans — Trustline Finance",
        description:
          "Working capital sized to your order book — bridging invoice gaps, equipment, growth and seasonal trading. All figures illustrative only.",
      },
      { property: "og:title", content: "Business Loans — Trustline Finance" },
      {
        property: "og:description",
        content:
          "Business lending with repayments that follow your trading cycle, not fight it.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProductPage detail={business} />,
});
