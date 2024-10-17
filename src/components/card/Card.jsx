import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const book = props.books;
  const navigate = useNavigate(); 
  console.log("singleBook", book);

  const addWishList=(book)=>{
    const storedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = [...storedBooks, book];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    alert("Add Book",book)
  }
  const handleBookClick = (book) => {
    // Navigate to the book details page with the book ID
    navigate(`/bookdetails/${book.id}`, { state: { book } });
  };

  return (
    <div className="w-[200px] sm:w-[208px] md:w-[245px]  border-2 shadow-sm mt-2 rounded-xl mx-auto " >
      <div onClick={() => handleBookClick(book)}>
        <div className="h-[200px] sm:h-[260px] flex justify-center items-center">
          <img
            src={book.formats["image/jpeg"]}
            className="h-[150px]  w-[200] md:-w-[220px] md:h-[200px]  hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-2xl"
          />
        </div>
        <div className="h-[180px] sm:h-[230px] p-2">
          <h1 className="font-bold text-sm md:text-xl  flex overflow-auto tracking-tighter leading-3">
            {book.title.length > 50
              ? book.title.slice(0, 70) + "..."
              : book.title}
          </h1>
          <div className="flex m-0 p-0 flex-col">
            <div className="flex m-0 my-1">
              <p className="flex font-bold text-xs md:text-lg  ">
                {book.authors.map((authors, id) => (
                  // console.log("author name", authors.name),
                  <li key={id} className="tracking-tighter leading-4">
                    Author Name :{" "}
                    <span className="text-gray-600">{authors.name}</span>{" "}
                  </li>
                ))}
              </p>
            </div>
          </div>
          Subject :
          <div className="flex m-0 p-0  h-[105px]">
            {/* <div className="flex flex-col  m-0 p-1.5  overflow-auto"> */}
            
            <p className="flex flex-col font-bold text-xs md:text-md overflow-auto w-full">
              {book.subjects.map((subject, id) => (
                // console.log("author name", authors.name),
                <li key={id} className="">
                  {subject}
                </li>
              ))}
            </p>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div
        className="bg-purple-900 mx-auto flex justify-center rounded-b-lg "
        onClick={() => addWishList(book)}
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
      </div>
    </div>
  );
}
