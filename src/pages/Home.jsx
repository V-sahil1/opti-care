import React from 'react'
import Header from '../Componets/Header'
import SpecialityMenu from '../Componets/SpecialityMenu'
import TopDoctors from '../Componets/TopDoctors'
import Banner from '../Componets/Banner'

function Home() {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDoctors/>
      <Banner/>
    </div>
  )
}

export default Home