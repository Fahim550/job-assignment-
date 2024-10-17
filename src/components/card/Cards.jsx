import React, { useEffect, useState } from "react";
import Filter from "../filter/Filter";
import Card from "./Card";

export default function Cards() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, data]);
      })
      .catch((err) => console.log(err));
    console.log("books", books);
  }, []);

  const booksPerPage = 8;
  // Calculate the total number of pages
  const totalBooks = books.reduce((acc, book) => acc + book.results.length, 0);
  const totalPages = Math.ceil(80 / booksPerPage);

  // Calculate which books to show on the current page
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  // Flatten the nested books array to manage pagination easily
  const flatBooks = books.flatMap((book) => book.results);
  // Extract unique subjects from books
  const uniqueSubjects = [
    ...new Set(flatBooks.flatMap((book) => book.bookshelves)),
  ];

  // Slice  for the current page
  const currentBooks = flatBooks.slice(indexOfFirstBook, indexOfLastBook);
  // console.log("currentBooks", currentBooks);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleFilterChange = (filter) => {
    setFilterType(filter);
  };

  // Filter books based on search query (e.g., by title or author)
  const filteredBooks = currentBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "" || book.bookshelves.includes(filterType))
  );
  // console.log("filteredBooks", filteredBooks);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };
  return (
    <div className="justify-center mx-auto">
      <Filter
        searchQuery={searchQuery}
        onSearch={handleSearch}
        uniqueSubjects={uniqueSubjects}
        onFilterChange={handleFilterChange}
        filterType={filterType}
      />
      <ul className="p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {filteredBooks.map((singleBook, index) => (
          <Card key={index} books={singleBook} />
        ))}
      </ul>
      {/* Pagination controls */}
      <div className="flex justify-center space-x-2 mt-6 overflow-hidden my-2">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded ${
            currentPage === 1
              ? "bg-gray-300"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => handlePageChange(i + 1)}
            className={`px-3 py-2 rounded ${
              currentPage === i + 1
                ? "bg-blue-700 text-white"
                : "bg-white border-2 border-blue-700 hover:bg-blue-700"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded ${
            currentPage === totalPages
              ? "bg-gray-300"
              : "bg-blue-500 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}
