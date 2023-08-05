import axios from "axios";
import ApiRequest from "types/api-request";

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that is within the range of 2xx cause this function to trigger
    // add a response property
    const responseObj = {
      ...response,
      status: response.status,
      data: response.data,
    };
    return Promise.resolve(responseObj);
  },
  function (error) {
    // Any status code that falls outside the range of 2xx cause this function to trigger
    const isExpectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
    //if server or network error, set error response to unexpected error occurred
    if (!isExpectedError) {
      error.response.data = {
        errors: [{ error: "An unexpected error occurred! 😔 " }],
      };
    }
    // Do something with response error
    return Promise.reject(error);
  }
);

const apiRequest = ({
  method,
  url,
  data = [],
  token = null,
  headers = { "Content-Type": "application/json" },
}: ApiRequest) => {
  console.log(`API_URL+Path: ${process.env.API_URL}${url}`);
  return axios({
    method,
    url: `${process.env.API_URL}${url}`,
    data,
    headers: {
      ...headers,
      ...(!!token && {
        Authorization: `Bearer ${token}`,
      }),
    },
  });
};

export default apiRequest;
