import React from 'react'
import { useEffect, useState } from "react";
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card';

export default function Home() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("https://gutendex.com/books")
      .then((res) => res.json())
      .then((data) => {
        setBooks((prevBooks) => [...prevBooks, data]);
      })
      .catch((err) => console.log(err));
    console.log("books", books);
  },[]);
  return (
    <div>
        <Navbar/>
        <Header/>
        <Filter/>
        <Card books={books}/>
    </div>
  )
}
