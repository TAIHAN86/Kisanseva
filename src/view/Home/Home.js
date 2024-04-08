import React from 'react'
import "./../Home/Home.css"
import Navbar from "./../../Componant/Navbar/Navbar"
import Banner from "./../../Componant/Banner/Banner"
import Banner2 from "./../../Componant/Banner/Banner2"
import Cardslider from '../../Componant/Product card slider/Card slider'
import Cardslider2 from '../../Componant/Product card slider/Card slider2'
import Footer from "./../../Componant/Footer/Footer"
import Imagecard from "./../../Componant/Image-card/Card"
import Preloader from '../../Componant/preloader/preloader'

function Home() {
  console.log(process.env.REACT_APP_APPWRITE_URL)
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Preloader/>
      <Imagecard/>
      <Cardslider/>
      <Cardslider2/>
      <Banner2/>
      <Footer/>
      </div>
    
  )
}

export default Home