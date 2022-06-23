import axios from 'axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes';
const MAX_RESULTS = 30;

/**
 * @typedef {Object} Options
 * @property {String} Options.searchTerm  - Search query for books.
 * @property {String} [Options.category=''] - Category of books. By default, all.
 * @property {Number} [Options.page=0] - The number of page starting from 0. By default, 0.
 * @property {Number} [Options.sort='relevance'] - The type of sorting. By default, relevance.
 */

export const googleBooksApi = {
  /**
   * @description The function returns a lists of the books according to the specified parameters.
   * @param {Options} options - Object with search parameters.
   * @returns {Object} object with books.
   */
  async getBooks({ searchTerm, category = '', page = 0, sort = 'relevance' }) {
    console.log(searchTerm);
    const startIndex = MAX_RESULTS * page;

    const response = await axios.get(
      `${BASE_URL}?q=intitle:${searchTerm}+subject:${category}&maxResults=${MAX_RESULTS}&startIndex=${startIndex}&orderBy=${sort}&key=${process.env.REACT_APP_API_KEY}`,
    );

    return response.data;
  },
};
