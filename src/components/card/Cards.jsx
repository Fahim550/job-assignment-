import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, data]);
      })
      .catch((err) => console.log(err));
    // console.log("books", books);
  }, [1000]);
  return (
    <div >
      <h3>card</h3>
      <h2>{books.length}</h2>
      <ul >
        {books.map((book) => (
          <ul key={book.id} >
            {book.results.map((singleBook) => (
              // console.log("singleBook", singleBook),
              <Card  key={singleBook} books={singleBook} />
            ))}
          </ul>
        ))}
      </ul>
    </div>
  );
}
