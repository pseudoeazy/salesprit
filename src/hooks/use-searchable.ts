import { useMemo } from "react";

type Category = { category_ids: string; name: string };
export const useSearchable = (
  data: Category[],
  category: string,
  searchText: string,
  searchProps: (item: Category) => string[]
) => {
  return useMemo(() => {
    const regex = new RegExp(searchText, "i");
    let _data = data;
    if (category) {
      _data = _data.filter((item) =>
        item.category_ids.split(",")?.includes(category)
      );
    }
    return _data.filter((item) =>
      searchProps(item).some((sp) => regex.test(sp))
    );
  }, [data, searchText, searchProps]);
};
