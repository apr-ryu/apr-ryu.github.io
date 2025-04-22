import axios from "axios";

export const interceptFetchData = async <T>(
  interceptedResponse: T[]
): Promise<T[]> => {
  axios.interceptors.response.use(function (response) {
    response.data = interceptedResponse;
    return response;
  });
  return await fetchData("https://catfact.ninja/fact");
};

const fetchData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);
  const data = response.data;
  return data;
};
