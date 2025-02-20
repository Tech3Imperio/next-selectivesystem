"use server";

import { DoorSealProductsPanel } from "./data";

export async function generateMetadata({ params }, parent) {
  // read route params
  const id = (await params).productId;

  console.log(id);

  const product = DoorSealProductsPanel.find((i) => i.id === id);

  console.log("The product name is:", product.ProductName);

  return {
    title: product.ProductName,
    description: product.description,
    keywords: product.features,
    alternates: {
      canonical: `/products/door-seals/${product.id}`,
    },
    image: product.images,
  };
}

export default async function Page() {}
