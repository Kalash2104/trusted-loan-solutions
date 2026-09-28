import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, type ProductDetail } from "@/components/ProductPage";

const overdraft: ProductDetail = {
  slug: "/overdraft",
  tag: "Flex",
  name: "Overdraft",
  copy: "A quiet cushion for the cash-flow dips.",
  headline: "A quiet cushion for the dips, not a debt to carry.",
  intro:
    "An overdraft isn't a debt to carry — it's a pre-agreed buffer that sits unused until the month goes sideways. You only pay for the days and amounts you actually use.",
  fit: [
    {
      title: "Timing gaps",
      copy: "Salary day is the 30th; the supplier wants paying on the 12th.",
    },
    {
      title: "Seasonal businesses",
      copy: "A safety net through the off-season, cleared again in the busy one.",
    },
    {
      title: "Unexpected shortfalls",
      copy: "A surprise bill or urgent repair shouldn't become a crisis.",
    },
    {
      title: "Planned breathing room",
      copy: "Some customers keep an overdraft unused for years, purely for peace of mind.",
    },
  ],
  steps: [
    {
      n: "01",
      title: "We look at your flow",
      copy: "A short review of typical inflows and outgoings, so the limit is sized honestly.",
    },
    {
      n: "02",
      title: "Agreed before you need it",
      copy: "The limit is arranged and documented in advance, at illustrative terms shown upfront.",
    },
    {
      n: "03",
      title: "Use it, clear it, keep it",
      copy: "Dip in when needed, repay when cash arrives. An annual review keeps the limit right.",
    },
  ],
  expect: [
    "Interest charged only on what you use",
    "Arranged in advance, so you're never borrowing in a panic",
    "Linked to your existing account — no second login",
    "Reviewed with you annually, not sprung on you",
  ],
};

export const Route = createFileRoute("/overdraft")({
  head: () => ({
    meta: [
      {
        title: "Overdraft Facility — Trustline Finance",
        description:
          "A pre-agreed overdraft cushion for cash-flow dips — interest only on what you use, arranged before you need it. All figures illustrative only.",
      },
      { property: "og:title", content: "Overdraft Facility — Trustline Finance" },
      {
        property: "og:description",
        content:
          "A pre-agreed buffer that sits unused until the month goes sideways.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProductPage detail={overdraft} />,
});
