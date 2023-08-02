import { createContext, useState, useContext, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SearchContext = createContext({} as any);

export const SearchProvider = ({ children }: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
