import useSWR from "swr";
import axios from "axios";

const fetcher = async (url: string) => {
  const { data } = await axios.get(url);
  return data;
};

const useFetch = (filter: string) => {
  const { data, error } = useSWR(`${process.env.API_URL}/${filter}`, fetcher);
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFetch;
