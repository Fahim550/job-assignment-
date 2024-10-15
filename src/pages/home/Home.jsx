import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Filter from '../../components/filter/Filter'
import Cards from '../../components/card/Cards';

export default function Home() {

  return (
    <div>
        <Navbar/>
        <Header/>
        <Filter/>
        <Cards />
    </div>
  )
}
