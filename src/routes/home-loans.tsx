import { createFileRoute } from "@tanstack/react-router";
import { ProductPage, type ProductDetail } from "@/components/ProductPage";

const home: ProductDetail = {
  slug: "/home-loans",
  tag: "Home",
  name: "Home loans",
  copy: "Mortgages that hold steady through the years.",
  headline: "A mortgage that holds steady through the years.",
  intro:
    "A home loan is the longest financial conversation you'll ever have. We take it slowly, show every illustrative scenario side by side, and stay with the file from first viewing to final payment.",
  fit: [
    {
      title: "First-time buyers",
      copy: "A patient first mortgage, with every fee and step explained.",
    },
    {
      title: "Moving up the ladder",
      copy: "Porting, topping up or restructuring as the family grows.",
    },
    {
      title: "Remortgaging",
      copy: "A yearly review so you're never quietly overpaying.",
    },
    {
      title: "Property investment",
      copy: "Buy-to-let and portfolio structures, sized conservatively.",
    },
  ],
  steps: [
    {
      n: "01",
      title: "An affordability conversation first",
      copy: "We start with what you can genuinely carry, not the maximum we could lend.",
    },
    {
      n: "02",
      title: "Every scenario, side by side",
      copy: "Illustrative rates, terms and totals compared openly before you choose.",
    },
    {
      n: "03",
      title: "One person to the finish line",
      copy: "The same adviser handles valuation, offer, completion and every review after.",
    },
  ],
  expect: [
    "Fixed and variable structures, explained in plain words",
    "Overpayment allowances so you can finish early",
    "One named adviser from application to keys to renewal",
    "Full illustrative breakdowns before you commit",
  ],
};

export const Route = createFileRoute("/home-loans")({
  head: () => ({
    meta: [
      {
        title: "Home Loans & Mortgages — Trustline Finance",
        description:
          "Mortgages that hold steady — first-time buyers, remortgaging, moving up and buy-to-let, handled by one named adviser. All figures illustrative only.",
      },
      { property: "og:title", content: "Home Loans & Mortgages — Trustline Finance" },
      {
        property: "og:description",
        content:
          "The longest financial conversation you'll ever have, taken slowly and honestly.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ProductPage detail={home} />,
});
