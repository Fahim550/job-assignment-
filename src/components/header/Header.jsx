import React from "react";
import bookshrlf from "../../assets/bookshelf.jpg";
export default function Header() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <img
          src={bookshrlf}
          className="w-full sm:max-h-96 opacity-30 brightness-50 relative"
          alt=""
        />
        <div className="absolute w-1/2 flex justify-center">
          <h2 className="text-lg sm:text-3xl shadow-gray-800 text-gray-800 font-bold ">
          Explore the World of Knowledge: Your Journey Starts Here.
          </h2>
        </div>
      </div>
    </div>
  );
}
