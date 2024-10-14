import React from "react";

export default function Card(props) {
  const books = props;
  console.log("books", books);
  return (
    <div>
      <h3>card</h3>
      <h2>{books.books.length}</h2>
      <ul>
        {books.books.map(
          (book) => (
            console.log("book", book),
            (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
}
