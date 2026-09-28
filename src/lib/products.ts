export type ProductSummary = {
  slug: string;
  tag: string;
  name: string;
  copy: string;
};

export const products: ProductSummary[] = [
  {
    slug: "/personal-loans",
    tag: "Personal",
    name: "Personal loans",
    copy: "Fixed repayments for the things you can name.",
  },
  {
    slug: "/business-loans",
    tag: "Business",
    name: "Business loans",
    copy: "Working capital sized to your order book.",
  },
  {
    slug: "/overdraft",
    tag: "Flex",
    name: "Overdraft",
    copy: "A quiet cushion for the cash-flow dips.",
  },
  {
    slug: "/home-loans",
    tag: "Home",
    name: "Home loans",
    copy: "Mortgages that hold steady through the years.",
  },
  {
    slug: "/insurance",
    tag: "Cover",
    name: "Insurance",
    copy: "Protection for the plan you've just built.",
  },
];
