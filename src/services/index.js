import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const MAX_RESULTS = 30;

export const googleBooksApi = {
  async getBooks(searchTerm) {
    const response = await axios.get(
      `${BASE_URL}?q=${searchTerm}&maxResults=${MAX_RESULTS}&key=${process.env.REACT_APP_API_KEY}`,
    );

    return response.data;
  },
};
