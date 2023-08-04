import { useMemo } from "react";
import { Product } from "types/product";

const useSearchableProducts = (data: Product[], searchText: string) => {
  return useMemo(() => {
    const regex = new RegExp(searchText, "i");
    return data.filter(
      (item) => regex.test(item.name) || regex.test(item.description)
    );
  }, [data, searchText]);
};
export default useSearchableProducts;
