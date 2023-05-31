import { get } from "./httpService";
import config from "../config.json";

const apiEndpoint = `${config.apiUrl}/books/v1/volumes`;
const key = process.env.REACT_APP_API_KEY;

const getBooks = async (params) => {
  const { query, startIndex } = params;
  let data = {};
  try {
    data = await get(apiEndpoint, {
      params: { q: query, startIndex, printType: "books", key },
    });
  } catch (error) {
    console.log(error.message);
  }
  return {
    books: data?.data?.items || [],
    total: data?.data?.totalItems || 0,
  };
};
export { getBooks };
