import React, { FormEvent } from "react";
import { useRouter } from "next/router";
import SearchIcon from "assets/icons/search-icon";
import Barcode from "assets/icons/barcode";
import { useSearch } from "contexts/search/use-search";

type SearchProps = { className?: string; id?: string };

const styles = {
  searchBase:
    "flex items-center justify-center w-full lg:w-[34.375rem] lg:max-w-screen-md rounded-[3.525rem] relative overflow-hidden border border-mygray",
  searchIconWrapper:
    "absolute top-0 left-6 flex items-center justify-center h-full w-50px",
  barcodeIconWrapper:
    "absolute top-0 right-6 flex items-center justify-center h-full w-50px cursor-pointer",
  searchInput:
    "w-full h-12 px-16  text-gray-900 placeholder-gray-500 bg-gray-f7 border-2 border-transparent rounded outline-none transition duration-200 hover:border-t-gray-400 hover:border-b-gray-400 focus:border-b-black focus:border-t-black focus:placeholder-mygray",
};

const Search: React.FC<SearchProps> = ({ className, ...props }) => {
  const router = useRouter();
  const { searchTerm, setSearchTerm } = useSearch();

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const inputElement = e.currentTarget as HTMLInputElement;
    setSearchTerm(inputElement.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!searchTerm) {
      return;
    }

    router.push(`/?search=${searchTerm}`);
  };

  const classNames = styles.searchBase + " " + className;
  return (
    <form noValidate role="search" className={classNames} onSubmit={onSubmit}>
      <span className={styles.searchIconWrapper}>
        <SearchIcon color="#999999" />
      </span>
      <label htmlFor={props.id || "search-normal"} className="sr-only">
        {props.id || "search-normal"}
      </label>
      <input
        type="search"
        placeholder="Search Here"
        className={styles.searchInput}
        value={searchTerm}
        onChange={onSearch}
        id={props.id || "search-normal"}
        autoComplete="off"
        {...props}
      />
      <span className={styles.barcodeIconWrapper}>
        <Barcode />
      </span>
    </form>
  );
};

export default Search;
