type ApiRequest = {
  method: string;
  url: string;
  data?: any;
  token?: string | null;
  headers?: { [key: string]: any };
};
export default ApiRequest;
