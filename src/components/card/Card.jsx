import React from "react";

export default function Card(props) {
  const book = props.books;
  console.log("singleBook", book);
  return (
    <div className='flex overflow-hidden'>
      
    <div className="w-[320px]  border-2 shadow-sm mt-2 ">
      <div>
        <div className="h-[220px] flex justify-center items-center">
          <img
            src={book.formats["image/jpeg"]}
            className="max-w-[220px] max-h-[200px] hover:scale-110 transition-scale-110  duration-300 ease-in-out rounded-2xl"
          />
        </div>
        <div className="h-[120px]">
          <h1 className="font-bold text-xl">{book.title}</h1>

          <div className="flex m-0 p-0 flex-col">
            <div className="flex m-0 p-1.5">
              <p className="flex font-bold ">
                {book.authors.map(
                  (authors, id) => (
                    console.log("author name", authors.name),
                    (<li key={id}>{authors.name} </li>)
                  )
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="bg-slate-100 w-full text-xl  text-blue-600 font-bold border-2 border-solid border-blue-500 p-1.5 mt-2.5 hover:bg-blue-600 hover:text-white rounded-2xl"
          //   onClick={() => addCart(item)}
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}
