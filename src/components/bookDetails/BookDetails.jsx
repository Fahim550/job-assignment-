import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";

export default function BookDetails() {
  const location = useLocation();
  const { book } = location.state;

  const addWishList=(book)=>{
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = [...storedBooks, book];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    alert("Add Book",book)
  }
  return (
    <div>
      <Navbar />
      <div className="grid grid-col-1 sm:grid-cols-2 max-w-5xl mx-auto p-4 pt-20 space-x-8">
        {/* Left side: Book Image */}
        <div className="">
          <img
            src={book.formats["image/jpeg"]}
            alt={book.title}
            className="w-full rounded-lg"
          />
        </div>

        {/* Right side: Book Information */}
        <div className="">
          <h1 className="text-3xl font-bold mb-4">{book.title}</h1>

          <p className="text-xl font-semibold mb-4">
            <span className="font-bold">Author Name: </span>
            {book.authors[0].name}
          </p>
          <p className="text-xl font-semibold mb-4">
            <span className="font-bold">Genre:</span> {book.subjects.join(", ")}
          </p>
          <p className="text-xl font-semibold mb-4">
            <span className="font-bold">Languages:</span>{" "}
            {book.languages.join(", ")}
          </p>

          <div className="flex space-x-4">
            <button
              onClick={() => addWishList(book)}
              className="px-3 py-1 bg-purple-600 border rounded-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
