import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

export default function WishList() {
  const [wishListBooks, setWishListBooks] = useState([]);
  useEffect(() => {
    const books = JSON.parse(localStorage.getItem("books") || []);
    setWishListBooks(books);
    // console.log("wishListBooks", wishListBooks);
  }, []);
  const deleteBook = (book) => {
    const books = JSON.parse(localStorage.getItem("books") || []);
    if (books) {
      const updatedBooks = books.filter((books) => books.id !== book.id);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      setWishListBooks(updatedBooks); // Update state to reflect the removal
      alert("Book removed from cart");
    } else {
      alert("No books in the wishlist to remove");
    }
  };
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        {wishListBooks.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-6 bg-gray-50">
            {wishListBooks.map((book) => (
              <div
                key={book.id}
                className="border p-2 rounded shadow-lg flex flex-col sm:flex sm:flex-row gap-4 sm:gap-16 items-center bg-white w-38 md:w-full h-68 md:h-36"
              >
                <img
                  src={book.formats["image/jpeg"]}
                  alt={book.title}
                  className="w-32 h-32 justify-start hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-2xl"
                />
                <div className="justify-center w-6/12">
                  <h2 className="font-bold text-lg">{book.title}</h2>
                  <p className="text-gray-700">
                    <span className="font-bold text-gray-900">Author Name :</span>{" "}
                    {book.authors[0].name}
                  </p>
                </div>
                <div className=" flex gap-2">
                  <button className="bg-black rounded-md p-1 w-8 h-8 sm:w-16 sm:h-12">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 sm:w-10 sm:h-10 hover:scale-110 transition-scale-110  duration-300 ease-in-out mx-auto"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#ffffff"
                        d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                      />
                    </svg>
                  </button>

                  <button
                    className="bg-red-500 rounded-md p-1 w-8 h-8 sm:w-16 sm:h-12"
                    onClick={() => deleteBook(book)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 sm:w-10 sm:h-10 hover:scale-110 transition-scale-110  duration-300 ease-in-out mx-auto"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#ffffff"
                        d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
