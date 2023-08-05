import apiRequest from "helpers/api";
import { Product } from "types/product";

export const getProducts = async (): Promise<Product[]> => {
  const apiResponse = await apiRequest({
    url: `/api/products`,
    method: "get",
  });
  const products = apiResponse.data as Product[];
  return products;
};
