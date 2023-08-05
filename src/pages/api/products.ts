// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "data/products";
import { Product } from "types/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  try {
    const query = req.query?.q as string;
    if (query) {
      const regex = new RegExp(query, "i");
      const filteredProducts = products.filter(
        (item) => regex.test(item.name) || regex.test(item.description)
      );
      return res.status(200).json(filteredProducts);
    }
    res.status(200).json(products);
  } catch (e) {
    res.status(200).json(products);
  }
}
