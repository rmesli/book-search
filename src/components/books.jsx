import { useEffect, useState } from "react";

import BooksTable from "./booksTable";
import SearchInput from "./searchInput";

import { getBooks } from "../services/bookService";
import Pagination from "./common/Pagination";

const Books = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [pageSize] = useState(10);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) return;

    const getStartIndex = () => {
      if (currentPage === 0) return 0;
      return currentPage * pageSize - pageSize;
    };
    const searchBooks = async () => {
      if (currentPage === 0) return;

      let data = {};
      const startIndex = getStartIndex();
      try {
        data = await getBooks({ query, startIndex });
      } catch (error) {
        console.log(error);
      }
      const { books, total } = data;
      if (books) {
        setBooks(books);
        setItemsCount(total);
      }
    };
    searchBooks();
  }, [currentPage, pageSize, query]);

  const handleSearch = (query) => {
    setCurrentPage(1);
    setQuery(query);
  };
  return (
    <>
      <h3 style={{ paddingTop: 20 }}>Recherche de livres</h3>
      <div style={{ paddingTop: 20 }}>
        <SearchInput onChange={handleSearch} />
        <div style={{ paddingTop: 20 }}>
          <BooksTable books={books} />
        </div>
        <Pagination
          itemsCount={itemsCount}
          itemsPerPage={pageSize}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          alwaysShown={false}
        />
      </div>
    </>
  );
};
export default Books;
