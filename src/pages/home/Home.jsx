import React from "react";
import Cards from "../../components/card/Cards";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Cards />
    </div>
  );
}
